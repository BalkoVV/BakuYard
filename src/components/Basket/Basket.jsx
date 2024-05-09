import React, { useContext, useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import CartContext from "components/CartProvider/CartProvider";

// import { ReactComponent as ToMenuIcon } from 'images/undo.svg';
import ToMenuButton from "components/ToMenuButton/ToMenuButton";
import styles from 'components/Basket/Basket.module.css';

export const Basket = () => {
  const { cartItems, increaseQuantity, decreaseQuantity, clearCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isNameValid, setIsNameValid] = useState(false);
  const [isPhoneNumberValid, setIsPhoneNumberValid] = useState(false);
  const [street, setStreet] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const isStreetValid = street.trim() !== '';
  const isHouseNumberValid = houseNumber.trim() !== '';
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [basketEmpty, setBasketEmpty] = useState(false); 

  useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.fades}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1'; 
      }, 10 * index); 
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
    setBasketEmpty(cartItems.length === 0);
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

  const handleStreetChange = (event) => {
    setStreet(event.target.value);
  }
  
  const handleHouseNumberChange = (event) => {
    setHouseNumber(event.target.value);
  }

  // const isOrderButtonActive = () => {
  //   return cartItems.length > 0 && isNameValid && isPhoneNumberValid;
  // };
  const isOrderButtonActive = () => {
    return cartItems.length > 0 && isNameValid && isPhoneNumberValid && isStreetValid && isHouseNumberValid;
  };
  

  const handleSubmitOrder = () => {
    if (isOrderButtonActive()) {
      const botToken = '7074161122:AAGCX_7aMobZIj6F6pTpURI2fopAgf8SVMU';
      const botChatId = 539872126;

      const message = `
        Нове замовлення!

        Name: ${name}
        Phone Number: ${phoneNumber}

        Items:
        ${cartItems.map(item => `
        ${item.назва}: ${item.quantity} шт.`).join('\n')}

        Total Price: ${totalPrice} грн
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

  useEffect(() => {
    if (basketEmpty || orderCompleted) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [basketEmpty, orderCompleted]);

  // useEffect(() => {
  //   if (basketEmpty || orderCompleted) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }

  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [basketEmpty, orderCompleted]);
  
  return (
    <div className={styles.basket}>
      
      <div className={styles.basketContainer}>
      <ToMenuButton/>
        <h1 className={styles.basketTitle}>Замовлення</h1>
        
        
        <div className={styles.basketBox}>
          
          {basketEmpty ? (
            <div className={styles.emptyOrderBasketBox}>
              <span className={styles.basketEmpty}>
                <div className={styles.basketEmptyMessage}>
                  <h2>
                    Ваш кошик порожній <br/>
                    Додайте страви з Меню <br/>
                    *доступні для доставки
                  </h2>
                </div>
              </span>
            </div>
          ) : (
            <div className={styles.basketListBox}>
              <ul className={styles.basketList}>
              <h3 className={styles.basketTitled}>Замовлення</h3>

              {cartItems.map((item) => (
                <li className={styles.basketListItem} key={item.id}>
                  
                  <div className={styles.basketListItemInfo}>

                    <span className={styles.basketListItemCategory}>
                      {item.категорія}
                    </span>
                    
                    <span className={styles.basketListItemName}>
                      {item.назва}
                    </span>

                    <span className={styles.basketListItemIngred}>
                      {item.інгредієнти}
                    </span>

                  </div>




                  <div className={styles.basketListItemManagement}>
                  <span className={styles.basketListItemCounter}>
                    <button className={styles.basketListItemDecrease} onClick={() => decreaseQuantity(item.id)}>
                      -
                    </button>
                    <span className={styles.basketListItemQuantity}>
                      {item.quantity}
                    </span>
                    <button className={styles.basketListItemIncrease} onClick={() => increaseQuantity(item.id)}>
                      +
                    </button>
                  </span>
                  
                  <span className={styles.basketListItemPrice}>
                    {item.ціна}
                  </span>
                  </div>
                </li>
              ))}

<div className={styles.basketOrderInfo}>

<div className={styles.basketQuantityBox}>

    <span className={styles.basketQuantityTitle}>
      <h3>Кількість позицій: </h3>
    </span>

    <span className={styles.basketTotalQuantity}>
      {totalItems}
    </span>

</div>

<div className={styles.basketQuantityBox}>

    <span className={styles.basketPriceTitle}>
      <h3>Загальна сума:</h3>
    </span>

    <span className={styles.basketTotalPrice}>
      {totalPrice}
    </span>

</div>

</div>
            </ul>
            </div>

          )}

          {/* <div className={styles.basketOrderInfo}>

              <div className={styles.basketQuantityBox}>

                  <span className={styles.basketQuantityTitle}>
                    <h3>Кількість позицій: </h3>
                  </span>

                  <span className={styles.basketTotalQuantity}>
                    {totalItems}
                  </span>

              </div>

              <div className={styles.basketQuantityBox}>

                  <span className={styles.basketPriceTitle}>
                    <h3>Загальна сума:</h3>
                  </span>

                  <span className={styles.basketTotalPrice}>
                    {totalPrice}
                  </span>

              </div>

          </div> */}

          <div className={styles.basketMakeOrder}>
            <div className={styles.basketInputBox}>
              <input  
                className={styles.basketInput} 
                type="text" placeholder="Ім'я (мінімум 3 символи)" 
                value={name} 
                onChange={handleNameChange} 
              />
              <input  
                className={styles.basketInput} 
                type="text" placeholder="Телефон (без +38)" 
                value={phoneNumber} 
                onChange={handlePhoneNumberChange} 
              />
              <div className={styles.basketInputAddressBox}>
                <input  
                  className={`${styles.basketInput} ${styles.basketInputStreet}`} 
                  type="text" placeholder="Вулиця" 
                  value={street} 
                  onChange={handleStreetChange} 
                />
                <input  
                  className={`${styles.basketInput} ${styles.basketInputStreetNumber}`} 
                  type="text" placeholder="№" 
                  value={houseNumber} 
                  onChange={handleHouseNumberChange} 
                />
              </div>
            </div>

            
            <button 
              className={`
              ${styles.buttonMakeOrder} 
              ${!isOrderButtonActive() ? 
                styles.disabled : 
                styles.active}
              `}
              onClick={handleSubmitOrder}
              disabled={!isOrderButtonActive()}
              >
              <h3>Замовити</h3>
            </button>


          </div>

          {orderCompleted && 
          
          
          <div className={styles.emptyOrderBasketBox}>
              <span className={styles.orderDone}>
            <div className={styles.orderDoneMessage}>
                <h2>Замовлення оформлене!  <br/>
                    Адміністратор зателефонує Вам  <br/>
                    для підтвердження <br/>
                    та узгодження деталей
                </h2>
            </div>
          </span>
            </div>
          
          }
        </div>
      </div>
    </div>
  );
};

export default Basket;

