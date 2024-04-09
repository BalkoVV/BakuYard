// CartProvider.jsx
import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

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

    <CartContext.Provider value={{ cartItems, setCartItems, addToCart, increaseQuantity, decreaseQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
    
  );
};

export default CartContext;

// CartProvider.jsx

// import React, { createContext, useState, useEffect } from 'react';

// const CartContext = createContext();

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

//   const decreaseQuantity = (itemId) => {
//     const updatedCartItems = cartItems.map(cartItem =>
//       cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
//     );

//     setCartItems(updatedCartItems.filter(item => item.quantity > 0));

//     console.log(updatedCartItems);
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

// import React, { createContext, useState, useEffect } from 'react';

// // Створюємо контекст
// const CartContext = createContext();

// // Компонент CartProvider, який надає доступ до стану корзини та функцій для роботи з нею
// export const CartProvider = ({ children }) => {
//   // Створюємо стан для зберігання товарів у корзині
//   const [cartItems, setCartItems] = useState([]);

//   // Витягуємо товари з локального сховища під час завантаження сторінки
//   useEffect(() => {
//     const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
//     if (storedCartItems.length > 0) {
//       setCartItems(storedCartItems);
//     }
//   }, []);

//   // Зберігаємо зміни в корзині у локальному сховищі кожного разу, коли стан корзини змінюється
//   useEffect(() => {
//     localStorage.setItem("cartItems", JSON.stringify(cartItems));
//   }, [cartItems]);

//   // Функція для додавання товару до корзини
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

//   // Функція для збільшення кількості одного з товарів у корзині
//   const increaseQuantity = (itemId) => {
//     setCartItems(cartItems.map(cartItem =>
//       cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
//     ));
//   };

//   // Функція для зменшення кількості одного з товарів у корзині
//   const decreaseQuantity = (itemId) => {
//     const updatedCartItems = cartItems.map(cartItem =>
//       cartItem.id === itemId ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
//     );

//     setCartItems(updatedCartItems.filter(item => item.quantity > 0));
//   };

//   // Функція для очищення корзини
//   const clearCart = () => {
//     setCartItems([]);
//   };

//   // Повертаємо провайдер контексту зі значенням корзини та функцій для роботи з нею
//   return (
//     <CartContext.Provider value={{ cartItems, setCartItems, addToCart, increaseQuantity, decreaseQuantity, clearCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// // Експортуємо контекст
// export default CartContext;
