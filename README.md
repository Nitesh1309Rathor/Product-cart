# 🛒 Product Checkout App (React)

A simple React application that simulates a product checkout system. Add products by ID, manage the cart, and calculate the total price.

## 🚀 Features

- ✅ Add products to the cart using Product ID
- 🔁 Auto-increment quantity if product already exists
- 📋 Display cart items in a table
- ❌ Remove items from the cart
- 💰 Calculate total price at checkout

## 📦 Product Catalog

| Product ID | Name        | Price (₹) |
|------------|-------------|-----------|
| P101       | Laptop      | 50,000    |
| P102       | Mouse       | 500       |
| P103       | Keyboard    | 1,000     |
| P104       | Headphones  | 1,500     |
| P105       | Monitor     | 10,000    |

## 🧑‍💻 Tech Stack

- **React (with Hooks)**
- **JavaScript (ES6)**
- **HTML & CSS**

## 🖼️ UI Components

- **Header**: App title
- **SearchField**: Input to add product by ID
- **CartTable**: Table showing product details and quantity
- **Checkout**: Button to compute total price

## 📁 Folder Structure

```
src/
├── App.js
├── index.js
├── styles.css (optional)
```

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/your-username/product-checkout-app.git
cd product-checkout-app
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm start
```

### 4. Open in browser
Visit: `http://localhost:3000`

## 🧪 Example Usage

- 🔍 Type `P101` → click “Add to Cart”
- ➕ Add again to increase quantity
- ❌ Click ❌ to remove an item
- 🧾 Click "Checkout" to view total

## 📸 Screenshots

![Screenshot (1)](https://github.com/user-attachments/assets/ec54626b-29fe-4852-86c7-79c4ea57881e)
![Screenshot (2)](https://github.com/user-attachments/assets/023ce4da-3c37-40d7-822c-9125547e0d37)


## 📝 Notes

- Product ID must match exactly (e.g., `P101`, not `p101`)
- Alert shown for invalid Product ID
- Total is calculated only on Checkout button click

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ using React.
