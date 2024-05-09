import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
import CartContext from "components/CartProvider/CartProvider";

// import { ReactComponent as BasketIcon } from 'images/delivery.svg';
// import ToMenuButton from "components/ToMenuButton/ToMenuButton";
import { ReactComponent as ToMenuIcon } from 'images/left.svg';


import menuHotApetizerData from "services/dataApetizers/hotApetizers.json";

import styles from 'components/MenuComponents/menuStyle.module.css';

export const HotApetizers = () => {
  const { addToCart, cartItems } = useContext(CartContext);

  const [hotApetizerItems, setHotApetizerItems] = useState([]);


  useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.fades}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1'; 
      }, 10 * index); 
    });
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутити сторінку до верхньої частини
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
     <div className={styles.discriptionBox}>
          <h1 className={styles.dishTitle}>Гарячі закуски</h1> 
          <div className={styles.toMenuButton}>
        <NavLink to="/menu" className={styles.toMenuLink}>
          <ToMenuIcon className={styles.toMenuIcon}/>
          <h1 className={styles.toMenuDescription}>до Менюс</h1>
        </NavLink>
      </div>
            </div>
     <div className={styles.dishPageContainer}>


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
