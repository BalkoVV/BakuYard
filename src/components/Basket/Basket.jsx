import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "components/CartProvider/CartProvider";

import { ReactComponent as ToMenuIcon } from 'images/toMenu.svg';
import styles from 'components/Basket/Basket.module.css';

export const Basket = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, clearCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);

  useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.fades}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1'; 
      }, 50 * index); 
    });
  }, []);

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cartItems.reduce((acc, item) => {
        return acc + (parseFloat(item.ціна) * item.quantity);
      }, 0);
      setTotalPrice(total);
    };

    const calculateTotalItems = () => {
      const total = cartItems.reduce((acc, item) => {
        return acc + item.quantity;
      }, 0);
      setTotalItems(total);
    };

    calculateTotalPrice();
    calculateTotalItems();
  }, [cartItems]);

  useEffect(() => {
    const storedName = localStorage.getItem("customerName") || "";
    const storedPhoneNumber = localStorage.getItem("customerPhoneNumber") || "";
    setName(storedName);
    setPhoneNumber(storedPhoneNumber);
  }, []);

  const handleNameChange = (event) => {
    const value = event.target.value;
    const nameRegex = /^[A-Za-zА-Яа-яҐґЄєІіЇї]{3,15}$/; 
    setIsNameValid(nameRegex.test(value)); 
    setName(value); 
  };

  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    const phoneRegex = /^\d{10}$/; 
    setIsPhoneNumberValid(phoneRegex.test(value));
    setPhoneNumber(value);
  };

  const isOrderButtonActive = () => {
    return cartItems.length > 0 && isNameValid && isPhoneNumberValid;
  };

  

  const handleSubmitOrder = () => {
    if (isOrderButtonActive()) {
      const botToken = '7074161122:AAGCX_7aMobZIj6F6pTpURI2fopAgf8SVMU';
      const botChatId = 539872126;

      const message = `
        New order!

        Name: ${name}
        Phone Number: ${phoneNumber}

        Items:
        ${cartItems.map(item => `${item.назва}: ${item.quantity} pcs.`).join('\n')}

        Total Price: ${totalPrice} UAH
      `;

      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: botChatId,
          text: message,
        }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to send message to Telegram bot');
          }
          console.log('Order details sent successfully');
          clearCart(); // Очистка кошика після успішного замовлення
          setName(""); // Очистка поля імені після успішного замовлення
          setPhoneNumber(""); // Очистка поля номера телефону після успішного замовлення
          setOrderCompleted(true);
        })
        .catch(error => {
          console.error('Error sending order details:', error);
        });
    }
  };

  return (
    <div  className={styles.basket}>

      <div className={styles.basketContainer}>
      <h1 className={styles.basketTitle}>Замовлення</h1>
        <div  className={styles.basketBox}>

          

         
            <NavLink to="/menu" className={styles.toMenuLink}>
              <ToMenuIcon/>
            </NavLink>
        
          <ul className={styles.basketList}>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.назва} - {item.обєм} - {item.ціна} -
                <button onClick={() => increaseQuantity(item.id)}>+</button> - {item.quantity} шт. -
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
              </li>
            ))}
          </ul>

          <p className={styles.fades}>Кількість позицій: {totalItems}</p>
          <p className={styles.fades}>Загальна сума: {totalPrice}</p>

          <input  className={styles.fades} type="text" placeholder="Ім'я" value={name} onChange={handleNameChange} />
          <input  className={styles.fades} type="text" placeholder="Телефон" value={phoneNumber} onChange={handlePhoneNumberChange} />

          <button  className={styles.fades} onClick={handleSubmitOrder} disabled={!isOrderButtonActive()}>Замовити</button>
          {orderCompleted && <p>Замовлення оформлене. Чекайте дзвінка адміністратора для підтвердження</p>}

        </div>
    </div>
</div>
  );
};

export default Basket;

// import React, { useContext, useState, useEffect } from "react";
// import CartContext from "components/CartProvider/CartProvider";
// import styles from 'components/Basket/Basket.module.css';

// const Basket = () => {
//   const { cartItems, increaseQuantity, decreaseQuantity, clearCart } = useContext(CartContext);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [totalItems, setTotalItems] = useState(0);
//   const [name, setName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [isNameValid, setIsNameValid] = useState(false);
//   const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
//   const [orderCompleted, setOrderCompleted] = useState(false);

//   useEffect(() => {
//     const contentElements = document.querySelectorAll(`.${styles.fades}`);
//     contentElements.forEach((element, index) => {
//       setTimeout(() => {
//         element.style.opacity = '1'; 
//       }, 50 * index); 
//     });
//   }, []);

//   useEffect(() => {
//     const calculateTotalPrice = () => {
//       const total = cartItems.reduce((acc, item) => {
//         return acc + (parseFloat(item.price) * item.quantity);
//       }, 0);
//       setTotalPrice(total);
//     };

//     const calculateTotalItems = () => {
//       const total = cartItems.reduce((acc, item) => {
//         return acc + item.quantity;
//       }, 0);
//       setTotalItems(total);
//     };

//     calculateTotalPrice();
//     calculateTotalItems();
//   }, [cartItems]);

//   useEffect(() => {
//     const storedName = localStorage.getItem("customerName") || "";
//     const storedPhoneNumber = localStorage.getItem("customerPhoneNumber") || "";
//     setName(storedName);
//     setPhoneNumber(storedPhoneNumber);
//   }, []);

//   const handleNameChange = (event) => {
//     const value = event.target.value;
//     const nameRegex = /^[A-Za-zА-Яа-яҐґЄєІіЇї]{3,15}$/; 
//     setIsNameValid(nameRegex.test(value)); 
//     setName(value); 
//   };

//   const handlePhoneNumberChange = (event) => {
//     const value = event.target.value;
//     const phoneRegex = /^\d{10}$/; 
//     setIsPhoneNumberValid(phoneRegex.test(value));
//     setPhoneNumber(value);
//   };

//   const isOrderButtonActive = () => {
//     return cartItems.length > 0 && isNameValid && isPhoneNumberValid;
//   };

//   const handleSubmitOrder = () => {
//     if (isOrderButtonActive()) {
//       const botToken = '7074161122:AAGCX_7aMobZIj6F6pTpURI2fopAgf8SVMU';
//       const botChatId = 539872126;

//       const message = `
//         New order!

//         Name: ${name}
//         Phone Number: ${phoneNumber}

//         Items:
//         ${cartItems.map(item => `${item.name}: ${item.quantity} pcs.`).join('\n')}

//         Total Price: ${totalPrice} UAH
//       `;

//       fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           chat_id: botChatId,
//           text: message,
//         }),
//       })
//         .then(response => {
//           if (!response.ok) {
//             throw new Error('Failed to send message to Telegram bot');
//           }
//           console.log('Order details sent successfully');
//           clearCart(); // Очистка кошика після успішного замовлення
//           setName(""); // Очистка поля імені після успішного замовлення
//           setPhoneNumber(""); // Очистка поля номера телефону після успішного замовлення
//           setOrderCompleted(true);
//         })
//         .catch(error => {
//           console.error('Error sending order details:', error);
//         });
//     }
//   };

//   return (
//     <div className={styles.basket}>
//       <div className={styles.basketContainer}>
//         <div className={styles.basketBox}>
//           <h1>Ваше замовлення</h1>
//           <ul>
//             {cartItems.map((item) => (
//               <li key={item.id}>
//                 {item.name} - {item.volume} - {item.price} -
//                 <button onClick={() => increaseQuantity(item.id)}>+</button> - {item.quantity} шт. -
//                 <button onClick={() => decreaseQuantity(item.id)}>-</button>
//               </li>
//             ))}
//           </ul>
//           <p>Кількість позицій: {totalItems}</p>
//           <p>Загальна сума: {totalPrice}</p>
//           <input type="text" placeholder="Ім'я" value={name} onChange={handleNameChange} />
//           <input type="text" placeholder="Телефон" value={phoneNumber} onChange={handlePhoneNumberChange} />
//           <button onClick={handleSubmitOrder} disabled={!isOrderButtonActive()}>Замовити</button>
//           {orderCompleted && <p>Замовлення оформлене. Чекайте дзвінка адміністратора для підтвердження</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Basket;
