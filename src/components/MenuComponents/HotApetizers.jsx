import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
import CartContext from "components/CartProvider/CartProvider";

import { ReactComponent as BasketIcon } from 'images/delivery.svg';
import ToMenuButton from "components/ToMenuButton/ToMenuButton";


import menuHotApetizerData from "services/dataApetizers/hotApetizers.json";

import styles from 'components/MenuComponents/menuStyle.module.css';

export const HotApetizers = () => {
  const { addToCart, cartItems } = useContext(CartContext);

  const [hotApetizerItems, setHotApetizerItems] = useState([]);


  useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.fades}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '.9'; 
      }, 10 * index); 
    });
  }, []);
  

 

  useEffect(() => {
   setHotApetizerItems(menuHotApetizerData);
  }, []);



 

  const updateHotApetizerButtonState = (itemId) => {
   setHotApetizerItems(hotApetizerItems.map(item => {
      if (item.id === itemId) {
        return { ...item, alreadyAdded: false };
      }
      return item;
    }));
  };

  return (
    <div className={styles.dishPage}>
     <div className={styles.dishPageContainer}>
       <h1 className={styles.dishTitle}>Гарячі закуски</h1>  

       <div className={styles.toBasketButton}>
                <NavLink to="/menu/basket" className={styles.toBasketLink}>
                  <BasketIcon className={`${styles.basketIcon} ${cartItems.length > 0 ? styles.nonEmpty : ''}`}/>
                  {cartItems.length > 0 && <span className={styles.basketBadge}>✓</span>}
                  <h3 className={styles.toBasketDescription}>Доставка</h3>
                </NavLink>
              </div>
      
      <ToMenuButton/>

      <div className={styles.dishPageBox}>
      
          <table className={styles.dishTableList}>
            <thead>
              <tr>
              {/* <h3>Гарячі закуски</h3> */}
              {/* <th>ID</th>
                <th>Назва</th>
                <th>Об'єм</th>
                <th>Ціна</th> */}
              </tr>
            </thead>
            <tbody>
              {hotApetizerItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  {/* <td  className={styles.dishTableСategory}>{item.категорія}</td> */}
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  {/* <td  className={styles.dishTableIngredients}>{item.інгредієнти}</td> */}
                  <td  className={styles.dishTableWeigth}>{item.вага}</td>
                  <td  className={styles.dishTablePrice}>{item.ціна}</td>
                  <td className={styles.dishTableButtonAdd}>
                    <AddButton
                      onClick={() => addToCart(item)}
                      alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                      updateButtonState={() => updateHotApetizerButtonState(item.id)}
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

export default HotApetizers;
