// // CartProvider.jsx

// import React, { createContext, useState, useEffect } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   useEffect(() => {
//     const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     if (storedCartItems.length > 0) {
//       setCartItems(storedCartItems);
//     }
//   }, []);
  
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (item) => {
//     const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
//     if (existingItem) {
//       setCartItems(cartItems.map(cartItem =>
//         cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//       ));
//     } else {
//       setCartItems([...cartItems, { ...item, quantity: 1 }]);
//     }
//   };

//   const increaseQuantity = (itemId) => {
//     setCartItems(cartItems.map(cartItem =>
//       cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//     ));
//   };

//   const decreaseQuantity = (itemId, updateButtonState) => {
//     const updatedCartItems = cartItems.map(cartItem =>
//       cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
//     );
  
//     setCartItems(updatedCartItems.filter(item => item.quantity > 0));
  
//     // Оновлення стану кнопки
//     if (updateButtonState) {
//       updateButtonState(itemId);
//     }
//   };
  

  

//   const clearCart = () => {
//     setCartItems([]);
   
//   };

//   return (

//     <CartContext.Provider value={{ cartItems, setCartItems, addToCart, increaseQuantity, decreaseQuantity, clearCart }}>
//       {children}
//     </CartContext.Provider>
    
//   );
// };

// export default CartContext;

// CartProvider.jsx

import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (storedCartItems.length > 0) {
      setCartItems(storedCartItems);
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

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

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== itemId));
  };

  const increaseQuantity = (itemId) => {
    setCartItems(cartItems.map(cartItem =>
      cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
    ));
  };

  const decreaseQuantity = (itemId, updateButtonState) => {
    const updatedCartItems = cartItems.map(cartItem =>
      cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    );
  
    setCartItems(updatedCartItems.filter(item => item.quantity > 0));
  
    // Оновлення стану кнопки
    if (updateButtonState) {
      updateButtonState(itemId);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
