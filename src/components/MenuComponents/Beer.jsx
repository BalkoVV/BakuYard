// Beer.jsx

import React, { useEffect, useState, useContext } from "react";
// import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
import CartContext from "components/CartProvider/CartProvider";

// import { ReactComponent as ToMenuIcon } from 'images/undo.svg';
// import { ReactComponent as BasketIcon } from 'images/delivery.svg';

import ToMenuButton from "components/ToMenuButton/ToMenuButton";


import menuData from "services/dataBeer/beer.json";
import beerSnacksData from "services/dataBeer/beerSnacks.json";

import styles from 'components/MenuComponents/menuStyle.module.css';

export const Beer = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.fades}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '.9'; 
      }, 50 * index); 
    });
  }, []);

  

  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутити сторінку до верхньої частини
  }, []);

  useEffect(() => {
    setMenuItems(menuData);
  }, []);

  const updateButtonState = (itemId) => {
    setMenuItems(menuItems.map(item => {
      if (item.id === itemId) {
        return { ...item, alreadyAdded: false };
      }
      return item;
    }));
  };


  return (
    <div className={styles.dishPage}>
      <ToMenuButton/>
      
      <div className={styles.dishPageContainer}>
      <h1 className={styles.dishTitle}>Пиво</h1>  

             {/* <div className={styles.toBasketButton}>
                <NavLink to="/menu/basket" className={styles.toBasketLink}>
                  <BasketIcon className={`${styles.basketIcon} ${cartItems.length > 0 ? styles.nonEmpty : ''}`}/>
                  {cartItems.length > 0 && <span className={styles.basketBadge}>✓</span>}
                  <h3 className={styles.toBasketDescription}>Доставка</h3>
                </NavLink>
              </div> */}
        
        {/* <ToMenuButton/> */}


        <div className={styles.dishPageBox}>

          <table className={styles.dishTableList}>

            <thead>
              <h3>Пиво</h3>
              {/* <tr>
                <th>ID</th>
                <th>Назва</th>
                <th>Об'єм</th>
                <th>Ціна</th>
              </tr> */}
            </thead>

            <tbody  className={`${styles.fadeIn}`}>
              {menuItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                {/* <td>{item.id}</td> */}
                <td className={styles.dishTableName}>{item.назва}</td>
                <td className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                <td className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                {/* <td className={styles.dishTableButtonAdd}>
                  <AddButton
                    
                    onClick={() => addToCart(item)}
                    alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                    updateButtonState={() => updateButtonState(item.id)}
                  />
                </td> */}
              </tr>
              ))}
            </tbody>

          </table>

{/* beerSnacks */}
<table className={styles.dishTableList}>
          <thead>
            <tr>
              <h3>до Пива</h3>
              {/* <th>ID</th>
              <th>Назва</th>
              <th>Вага</th>
              <th>Ціна</th>
              <th>Склад</th> */}
            </tr>
          </thead>
          <tbody>
            {beerSnacksData.map((item) => (
              <tr key={item.id} className={styles.dishTable}>
                {/* <td>{item.id}</td> */}
                <td className={styles.dishTableName}>{item.назва}</td>
                <td className={styles.dishTableIngredients}>{item.інгредієнти}</td>
                <td className={styles.dishTableWeigth}>{item.вага}</td>
                <td className={styles.dishTablePrice}>{item.ціна}</td>
                
                <td className={styles.dishTableButtonAdd}>
                  <AddButton
                    onClick={() => addToCart(item)}
                    alreadyAdded={cartItems.some((cartItem) => cartItem.id === item.id)}
                    updateButtonState={() => updateButtonState(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>


        </div>
      </div>
    </div>
  );
};

export default Beer;






