import { useState } from "react";

const catalog = [
  { id: "P101", name: "Laptop", price: 50000 },
  { id: "P102", name: "Mouse", price: 500 },
  { id: "P103", name: "Keyboard", price: 1000 },
  { id: "P104", name: "Headphones", price: 1500 },
  { id: "P105", name: "Monitor", price: 10000 },
];

export default function App() {
  // For input Id:
  const [searchProductId, setSearchProductId] = useState("");
  // For table cart list:
  const [productList, setProductList] = useState([]);
  // For checkout price:
  const [totalPrice, setTotalPrice] = useState(0);

  // For adding Item in cart:
  function handleAddItem(id, e) {
    e.preventDefault();
    if (!id) return;
    const item = catalog.find((pro) => pro.id === id);
    if (!item) {
      alert("Invalid Product Id");
      return;
    }

    setProductList((items) => {
      const existItem = items.find((item) => item.id === id);

      if (existItem) {
        // Increase quantity
        return items.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        // Add new item with quantity 1
        const item = catalog.find((pro) => pro.id === id);
        if (!item) return items; // safety check
        const newItem = { ...item, quantity: 1 };
        return [...items, newItem];
      }
    });
    setSearchProductId("");
    setTotalPrice(0);
  }

  // For removing item from cart:
  function handleRemoveItem(id) {
    const newList = productList.filter((item) => item.id !== id);
    // if (newList.length === 0) {

    // }
    setProductList((items) => newList);
    setTotalPrice(0);
  }

  // When checkout button clicked:
  function checkoutTotal() {
    const total = productList.reduce((sum, curr) => sum + curr.quantity * curr.price, 0);
    return total;
  }

  return (
    <div className="App">
      <Header />
      <SearchField searchId={searchProductId} setSearchId={setSearchProductId} onAddItem={handleAddItem} />
      <CartTable productList={productList} onRemoveItem={handleRemoveItem} />
      <Checkout total={checkoutTotal} totalPrice={totalPrice} setTotalPrice={setTotalPrice} />
    </div>
  );
}

function Header() {
  return <h1>Product Checkout</h1>;
}

function SearchField({ searchId, setSearchId, onAddItem }) {
  return (
    <form className="input-area" onSubmit={(e) => onAddItem(searchId, e)}>
      <input type="text" id="productId" placeholder="Enter Product ID (e.g. P101)" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
      <button className="btn-add">Add to Cart</button>
    </form>
  );
}

function CartTable({ productList, onRemoveItem }) {
  return (
    <table id="cartTable">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price per Unit</th>
          <th>Total Price</th>
          {productList.length > 0 && <th>Remove</th>}
        </tr>
      </thead>
      <tbody>
        {productList.map((product) => (
          <TableRow product={product} key={product.id} onRemoveItem={onRemoveItem} />
        ))}
      </tbody>
    </table>
  );
}

function TableRow({ product, onRemoveItem }) {
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.quantity}</td>
      <td>{`₹ ${product.price}`}</td>
      <td>{`₹ ${product.price * product.quantity}`}</td>
      <td>
        <button className="remove-item" onClick={() => onRemoveItem(product.id)}>
          ❌
        </button>
      </td>
    </tr>
  );
}

function Checkout({ total, totalPrice, setTotalPrice }) {
  return (
    <div className="checkout">
      <div>
        <button id="checkoutBtn" onClick={() => setTotalPrice(total)}>
          Checkout
        </button>
      </div>

      {totalPrice > 0 && (
        <div className="total" id="totalAmount">
          {`₹ ${totalPrice}`}
        </div>
      )}
    </div>
  );
}
