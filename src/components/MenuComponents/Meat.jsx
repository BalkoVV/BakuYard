// Meet.jsx

import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
import ToMenuButton from "components/ToMenuButton/ToMenuButton";

import { CartContext } from "components/CartProvider/CartProvider";

import { ReactComponent as BasketIcon } from 'images/delivery.svg';


import menuData from "services/dataMeat/meat.json";
import styles from 'components/MenuComponents/menuStyle.module.css';

export const Meat = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(menuData);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутити сторінку до верхньої частини
  }, []);

  useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.fades}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '.9'; 
      }, 10 * index); 
    });
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
      <div className={styles.dishPageContainer}>
       <h1 className={styles.dishTitle}>Барбекю</h1> 

          <span className={styles.toBasketLinkBox}>
            <NavLink to="/menu/basket" className={styles.toBasketLink}>
              <BasketIcon className={`${styles.basketIcon} ${cartItems.length > 0 ? styles.nonEmpty : ''}`}/>
              {cartItems.length > 0 && <span className={styles.basketBadge}>✓</span>}
            </NavLink>
          </span>
          
          <ToMenuButton/>
         
      
        <div className={styles.dishPageBox}>

          <table className={styles.dishTableList}>
            <thead>
              <tr>
                {/* <h3>BBQ</h3> */}
                {/* <th>ID</th> */}
                {/* <th>Назва</th> */}
                {/* <th>Об'єм</th> */}
                {/* <th>Ціна</th> */}
              </tr>
            </thead>
            <tbody>
              {menuItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  {/* <td>{item.id}</td> */}
                  <td className={styles.dishTableName}>{item.назва}</td>
                  <td className={styles.dishTableIngredients}>{item.інгредієнти}</td>
                  <td className={styles.dishTableWeigth}>{item.вага}</td>
                  <td className={styles.dishTablePrice}>{item.ціна}</td>
                  <td className={styles.dishTableButtonAdd}>
                    <AddButton
                      onClick={() => addToCart(item)}
                      alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
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

export default Meat;





