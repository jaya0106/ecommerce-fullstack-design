import React, { useState } from "react";
import "./Cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: 99.99, quantity: 1 },
    { id: 2, name: "Product 2", price: 79.99, quantity: 1 },
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mt-5">
      <h2 className="text-center">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <h4 className="text-center mt-4">Your cart is empty</h4>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
              <div className="quantity-control">
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
            </div>
          ))}
          <h4 className="text-end">Total: ${totalPrice.toFixed(2)}</h4>
          <button className="btn btn-dark w-100 mt-3">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
