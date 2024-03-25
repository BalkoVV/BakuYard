// CartContext.js

import React, { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const increaseQuantity = (itemId) => {
    setCartItems(cartItems.map(cartItem =>
      cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    ));
  };

  const decreaseQuantity = (itemId) => {
    const updatedCartItems = cartItems.map(cartItem =>
      cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );

    setCartItems(updatedCartItems.filter(item => item.quantity > 0));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increaseQuantity, decreaseQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;



