// Items.js

import React, { useContext } from 'react';
import { ItemContext } from '../Context/ItemContext';
import './Items.css'; // Import your CSS file

const Items = () => {
  const { items, addTocart } = useContext(ItemContext);

  return (
    <div className="shopping-page">
      <h2>Items</h2>
      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id} className="item-card-container">
            <div className="item-card small">
              <img src={item.image} alt={item.title} className="image" />
              <div className="item-details">
                <h3 className="item-title">{item.title}</h3>
                <p className="item-description">{item.description.slice(0,50)}</p>
                <p className="item-price">${item.price}</p>
                <button onClick={() => addTocart(item.id)} className="add-to-cart-btn">
                  Add to Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
