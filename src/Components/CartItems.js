// CartItems.js

import React, { useContext } from 'react';
import { ItemContext } from '../Context/ItemContext';
import './CartItems.css'; // Import CSS file

const CartItems = () => {
  const { cartItems,removeFromCart,removeAllItems } = useContext(ItemContext);

  // Calculating total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveFromCart = (itemId) => {
    removeFromCart(itemId);
  };

  const handleRemoveAllItems = () => {
    removeAllItems();
  };

  const handlePlaceOrder = () => {
    console.log("Order Placed! Implement your place order logic here.");
  };

  return (
    <div className="cart-container">
      <h2>Cart Items</h2>
      <ul className="cart-list">
        {cartItems && cartItems.length > 0 && cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <span className="item-title">{item.title}</span>
            <span className="item-price">${item.price}</span>
            <span className="item-quantity">x {item.quantity}</span>
            <button onClick={() => handleRemoveFromCart(item.id)} className="delete-btn">Remove</button>
          </li>
        ))}
      </ul>
      <p className="total-price">Total Price: ${totalPrice}</p>
      <div className="cart-actions">
        <button onClick={handleRemoveAllItems} className="remove-all-btn">
          Remove All Items
        </button>
        <button onClick={handlePlaceOrder} className="place-order-btn">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CartItems;
