import React, { useState } from "react";
import "./Cart.css";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 999,
    category: "Electronics",
    popularity: 5,
    date: "2025-03-10",
  },
  {
    id: 2,
    name: "Smartphone",
    price: 699,
    category: "Electronics",
    popularity: 9,
    date: "2025-03-05",
  },
  {
    id: 3,
    name: "Headphones",
    price: 199,
    category: "Accessories",
    popularity: 8,
    date: "2025-02-25",
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 299,
    category: "Wearables",
    popularity: 6,
    date: "2025-03-08",
  },
  {
    id: 5,
    name: "Tablet",
    price: 499,
    category: "Electronics",
    popularity: 7,
    date: "2025-02-15",
  },
  {
    id: 6,
    name: "Gaming Console",
    price: 399,
    category: "Gaming",
    popularity: 10,
    date: "2025-03-12",
  },
];

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Add to Cart Function
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove from Cart
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Calculate Total Price
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container">
      <h2>🛒 Product Store</h2>

      {/* Product Grid */}
      <div className="grid-container">
        {products.map((product) => (
          <div key={product.id} className="grid-item">
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button className="add-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="cart">
        <h3>🛍️ Shopping Cart</h3>
        {cart.length === 0 ? (
          <p>Cart is empty</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} (${item.price}) x {item.quantity}
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>🗑️</button>
              </li>
            ))}
          </ul>
        )}
        <h4>Total: ${totalPrice.toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default Cart;
