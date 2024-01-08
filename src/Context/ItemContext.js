import React, { createContext, useEffect, useState } from 'react';

const ItemContext = createContext();


const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addTocart = (itemId) => {
    const selectedItem = items.find(item => item.id === itemId)

    const itemInCart = cartItems.find(item => item.id === itemId);
    if (itemInCart) {
      // If item is already in the cart, update the quantity
      const updatedCart = cartItems.map(item =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // If item is not in the cart, add it with quantity 1
      setCartItems([...cartItems, { ...selectedItem, quantity: 1 }]);
    }
  }
  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const removeAllItems = () => {
    setCartItems([]);
  };

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setItems(data)
        console.log(data)

      } catch (error) {
        console.log('Error fetching items:', error)

      }
    }
    fetchItems()
  }, [])
  return (
    <ItemContext.Provider value={{ items, cartItems, addTocart, removeFromCart, removeAllItems }}>
      {children}</ItemContext.Provider>
  )
}


export { ItemContext, ItemProvider }
