// // Basket.jsx

import React, { useContext, useState, useEffect } from "react";
import CartContext from "components/CartProvider/CartProvider";

const Basket = () => {
  const { cartItems, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const isOrderButtonActive = () => {
    return cartItems.length > 0 && name.trim() !== "" && phoneNumber.trim() !== "";
  };

  const handleSubmitOrder = () => {
    if (isOrderButtonActive()) {
      const orderDetails = {
        name,
        phoneNumber,
        cartItems,
        totalPrice
      };
  
      const botToken = '7074161122:AAGCX_7aMobZIj6F6pTpURI2fopAgf8SVMU';
      const botChatId = 539872126;
  
      const message = `
        Нове замовлення!
    
        Ім'я: ${name}
        Номер телефону: ${phoneNumber}
    
        Товари:
        ${cartItems.map(item => `${item.назва}: ${item.quantity} шт.`).join('\n')}
    
        Загальна сума: ${totalPrice} грн.
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
      })
      .catch(error => {
        console.error('Error sending order details:', error);
      });
    }
  };

  return (
    <section>
      <h2>Кошик</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.назва} == {item.обєм} == {item.ціна} == 
            <button onClick={() => increaseQuantity(item.id)}>+</button> == {item.quantity} шт. == 
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
          </li>
        ))}
      </ul>
      <p>Кількість позицій: {totalItems}</p>
      <p>Загальна сума: {totalPrice}</p>
      <input type="text" placeholder="Ім'я" value={name} onChange={handleNameChange} />
      <input type="text" placeholder="Номер телефону" value={phoneNumber} onChange={handlePhoneNumberChange} />
      <button onClick={handleSubmitOrder} disabled={!isOrderButtonActive()}>Замовити</button>
    </section>
  );
};

export default Basket;
