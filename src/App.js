// App.js
import React from 'react';
import Items from './Components/Items';
import CartItems from './Components/CartItems';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="left-panel">
        <Items />
      </div>
      <div className="right-panel">
        <CartItems />
      </div>
    </div>
  );
};

export default App;
