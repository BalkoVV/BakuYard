import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "components/CartProvider/CartProvider";

import { ReactComponent as ToMenuIcon } from 'images/toMenuIcon.svg';
import styles from 'components/Basket/Basket.module.css';
import "index.css";

import PlusIcon from 'images/increase.svg';
import MinusIcon from 'images/minus.svg';
import closheMenu1 from 'images/closherrCardMenu.svg';
import closheMenu2 from 'images/closherrCardMenu.svg';

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
    const contentElements = document.querySelectorAll(`.${styles.fadeIn}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1'; 
      }, 1 * index); 
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

    const nameRegex = /^[A-Za-zА-Яа-яҐґЄєІіЇї\s]+$/; 
    if (nameRegex.test(value) || value === '') {
      setIsNameValid(nameRegex.test(value)); 
      setName(value); 
    }
  };
  
  const handlePhoneNumberChange = (event) => {
    const value = event.target.value;
    const phoneRegex = /^\d{0,10}$/; 
    if (phoneRegex.test(value) || value === '') {
      setIsPhoneNumberValid(phoneRegex.test(value));
      setPhoneNumber(value);
    }
  };
  

  const handleStreetChange = (event) => {
    const value = event.target.value;
    const streetRegex = /^[A-Za-zА-Яа-яҐґЄєІіЇї\s]+$/;
    if (streetRegex.test(value) || value === '') {
      setStreet(value);
    }
  };
  
  const handleHouseNumberChange = (event) => {
    const value = event.target.value;
    const houseNumberRegex = /^\d+$/;
    if (houseNumberRegex.test(value) || value === '') {
      setHouseNumber(value);
    }
  };
  

  const isOrderButtonActive = () => {
    return cartItems.length > 0 && isNameValid && isPhoneNumberValid && isStreetValid && isHouseNumberValid;
  };
  

  const handleSubmitOrder = () => {
    if (isOrderButtonActive()) {
     
      const botToken = '7381297312:AAGXSrCnATa8DHTnYPA8FXMHIBeVuh4sUNo';
      const botChatId = 6721446998;

      const message = `
        Нове замовлення!

        Ім'я: ${name}
        Телефон: ${phoneNumber}
        Вулиця: ${street}, ${houseNumber}

               Страви:
        ${cartItems.map(item => `
        ${item.категорія}:
        ${item.назва} х ${item.quantity}шт.`).join('\n')}

        Загалом: ${totalPrice} грн.
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
          clearCart(); 
          setName(""); 
          setPhoneNumber(""); 
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

  
  return (
    <div className={styles.basket}>
      <div className={styles.discriptionBox}>
              <h1 className={styles.basketTitle}>Замовлення</h1> 

              <img
            src={closheMenu1}
            alt=""
            style={{
              position: 'fixed',
              top: '70px',
              left: '-30px',
              width: '500px',
              height: '500px',
              zIndex: '0',
              rotate: '10deg',
              transform: 'scaleX(-1)',
              opacity: '.4'
            }}
          />
          <img
            className={styles.menuCardImage}
            src={closheMenu2}
            alt=""
            style={{
              position: 'fixed',
              bottom: '10px',
              right: '-30px',
              width: '500px',
              height: '500px',
              zIndex: '0',
              rotate: '-10deg',
              opacity: '.4',
            }}
          />
              <div className={styles.toMenuButton}>
                <NavLink to="/menu" className={styles.toMenuLink}>
                  <ToMenuIcon className={styles.toMenuIcon}/>
                  <h1 className={styles.toMenuDescription}>до Меню</h1>
                </NavLink>
              </div>

            </div>
            <div className={styles.basketContainer}>
        
          
              {orderCompleted ? ( 
            <div className={styles.emptyOrderBasketBox}>
              <span className={styles.orderDone}>
                <div className={styles.orderDoneMessage}>
                    <h2>Ваше замовлення сформовано!  <br/>
                        Зачекайте дзвінка Адміністратора  <br/>
                        для підтвердження та узгодження деталей
                    </h2>
                </div>
              </span>
            </div>
          ) : (
        <div className={styles.basketBox}>
          
          {basketEmpty ? (
            <div className={styles.emptyOrderBasketBox}>
              <span className={styles.basketEmpty}>
                <div className={styles.basketEmptyMessage}>
                  <h2>
                    Ваше замовлення ще не сформоване <br/>
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
                            <td className={styles.basketListItemCategoryDescription}>
                              {item.категорія}
                            </td>
                          </span>

                          <span className={styles.basketListItemName} >
                            <td className={styles.basketListItemNameDescription}>
                              {item.назва}
                            </td>
                          </span>

                        <span className={styles.basketListItemIngredients}>
                          <td className={styles.basketListItemIngredientsDescription}>

                          </td>
                        </span>

                        </div>








                      <div className={styles.basketListItemManagement}>
                          {/* <span className={styles.basketListItemPrice}>
                            {item.ціна}
                          </span> */}

                          
                          <span className={styles.basketListItemCounter}>
                           <span className={styles.basketListItemDecreaseBox}>
                          
                           <button className={styles.basketListItemDecrease} onClick={() => decreaseQuantity(item.id)}>
                           <img src={MinusIcon} alt="Minus" />
                            </button>
                           </span>
                            <span  className={styles.basketListItemCounterInfo}>
                            <span className={styles.basketListItemQuantity}>
                              {item.quantity}
                            </span>
                            <span className={styles.basketListItemPrice}>
                              {item.ціна}
                            </span>
                            </span>
                          
                           <span className={styles.basketListItemIncreaseBox}>
                           <button className={styles.basketListItemIncrease} onClick={() => increaseQuantity(item.id)}>
                           <img src={PlusIcon} alt="Plus" />
                            </button>
                           </span>
                          </span>
                          
                         
                      </div>

                    </li>

                  ))}

                    <div className={styles.basketOrderInfo}>

                      <ul className={styles.basketQuantityBox}>


                        
                          <li className={styles.basketQuantityTitle}>
                            <h3>Кількість</h3>
                            <h3>позицій: </h3>
                          </li>

                          <li className={styles.basketTotalQuantity}>
                            {totalItems}
                          </li>
                        


                      </ul>

                      <ul className={styles.basketQuantityBox}>

                          <li className={styles.basketPriceTitle}>
                            <h3>Загальна</h3>
                            <h3>сума:</h3>
                          </li>

                          <li className={styles.basketTotalPrice}>
                            {totalPrice}
                          </li>

                      </ul>

                    </div>

              </ul>

              

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

                   

               </div> 
              <div className={styles.buttonMakeOrderBox}>
              <button 
                        className={`${styles.buttonMakeOrder} ${!isOrderButtonActive() ? styles.disabled : styles.active}`}
                        onClick={handleSubmitOrder}
                        disabled={!isOrderButtonActive()}
                        >
                        <h3 className={styles.buttonMakeOrderDescription}>Замовити</h3>
                    </button>
              </div>
            </div>
          )}
        </div>
        )}
      </div>
    </div>
  );
};

export default Basket;

