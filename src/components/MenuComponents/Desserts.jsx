import React, { useEffect, useState, useContext } from "react";
// import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
import CartContext from "components/CartProvider/CartProvider";

// import { ReactComponent as BasketIcon } from 'images/delivery.svg';
import ToMenuButton from "components/ToMenuButton/ToMenuButton";


import menuDessertsData from "services/dataDesserts/desserts.json";

import styles from 'components/MenuComponents/menuStyle.module.css';

export const Desserts = () => {
  const { addToCart, cartItems } = useContext(CartContext);

  const [dessertsItems, setDessertsItems] = useState([]);


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
   setDessertsItems(menuDessertsData);
  }, []);



 

  const updateDessertsButtonState = (itemId) => {
   setDessertsItems(dessertsItems.map(item => {
      if (item.id === itemId) {
        return { ...item, alreadyAdded: false };
      }
      return item;
    }));
  };

  return (
    <div className={styles.dishPage}>
     <div className={styles.discriptionBox}>
          <h1 className={styles.dishTitle}>Десерти</h1> 
          <ToMenuButton className={styles.buttonToMenu}/>
      </div>
     <div className={styles.dishPageContainer}>
     

      <div className={styles.dishPageBox}>
      
          <table className={styles.dishTableList}>
            <thead>
              <tr>
              
              {/* <th>ID</th>
                <th>Назва</th>
                <th>Об'єм</th>
                <th>Ціна</th> */}
              </tr>
            </thead>
            <tbody>
              {dessertsItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  {/* <td  className={styles.dishTableСategory}>{item.категорія}</td> */}
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  <td  className={styles.dishTableIngredients}>{item.інгредієнти}</td>
                  <td  className={styles.dishTableWeigth}>{item.вага}</td>
                  <td  className={styles.dishTablePrice}>{item.ціна}</td>
                  <td className={styles.dishTableButtonAdd}>
                    <AddButton
                      onClick={() => addToCart(item)}
                      alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                      updateButtonState={() => updateDessertsButtonState(item.id)}
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

export default Desserts;
