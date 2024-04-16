import React from "react";
import styles from 'OrderButton.module.css';

export const OrderButton = ({ isActive }) => {
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
            // console.log('Order details sent successfully');
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
      <button 
        className={isActive ? 'active' : 'inactive'}
        onClick={handleSubmitOrder} 
       disabled={!isOrderButtonActive()}>
      <h3>Замовити</h3>
      >
         
      </button>
      )
}