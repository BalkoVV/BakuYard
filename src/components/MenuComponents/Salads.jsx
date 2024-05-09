// Salads.jsx

import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
import ToMenuButton from "components/ToMenuButton/ToMenuButton";

import { CartContext } from "components/CartProvider/CartProvider";

import { ReactComponent as BasketIcon } from 'images/delivery.svg';


import menuData from "services/dataSalads/salads.json";
import styles from 'components/MenuComponents/menuStyle.module.css';
import saladMenu1 from 'images/saladMenu1.png';
import saladMenu2 from 'images/saladMenu2.png';
// import saladMenu3 from 'images/saladMenu3.png';

export const Salads = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(menuData);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); 
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
      <ToMenuButton/>
      <div className={styles.dishPageContainer}>
       <h1 className={styles.dishTitle}>Салати</h1> 

       <div className={styles.toBasketButton}>
                <NavLink to="/menu/basket" className={styles.toBasketLink}>
                  <BasketIcon className={`${styles.basketIcon} ${cartItems.length > 0 ? styles.nonEmpty : ''}`}/>
                  {cartItems.length > 0 && <span className={styles.basketBadge}>✓</span>}
                  <h3 className={styles.toBasketDescription}>Доставка</h3>
                </NavLink>
              </div>
          
          {/* <ToMenuButton/> */}
         
      
        <div className={styles.dishPageBox}>

        <img
         src={saladMenu1}
        alt="saladMenu1"
        style={{
          position: 'fixed',
          top: '20px',
          left: '-90px',
          width: '450px',
          height: '650px',
          opacity: '1',
        }}
      />
       <img
         src={saladMenu2}
        alt="saladMenu2"
        style={{
          position: 'fixed',
          top: '270px',
          right: '-90px',
          width: '450px',
          height: '600px',
          opacity: '0.9',
        }}
      />
       {/* <img
         src={saladMenu3}
        alt="First Image"
        style={{
          position: 'absolute',
          top: '350px',
          left: '50px',
          width: '200px',
          height: '200px',
        }}
      /> */}
        

          <table className={styles.dishTableList}>
            <thead>
              <tr>
                {/* <h3>Salads</h3> */}
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

export default Salads;





