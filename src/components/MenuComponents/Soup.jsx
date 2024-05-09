// Soup.jsx


import React, { useEffect, useState, useContext } from "react";
// import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
import ToMenuButton from "components/ToMenuButton/ToMenuButton";

import CartContext from "components/CartProvider/CartProvider";

import soupData from "services/dataComboSets/soup.json";


// import pizzaMenu1 from 'images/pizzaMenu1.png';
// import pizzaMenu2 from 'images/pizzaMenu2.png';
// import pizzaMenu3 from 'images/pizzaMenu3.png';

// import { ReactComponent as BasketIcon } from 'images/delivery.svg';
import styles from 'components/MenuComponents/menuStyle.module.css';

export const Soup = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [soupItems, setSoupItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутити сторінку до верхньої частини
  }, []);

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
    setSoupItems(soupData);
  }, []);

  const updateButtonState = (itemId) => {
    setSoupItems(soupItems.map(item => {
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

        <h1 className={styles.dishTitle}>Супи</h1> 

        {/* <div className={styles.toBasketButton}>
                <NavLink to="/menu/basket" className={styles.toBasketLink}>
                  <BasketIcon className={`${styles.basketIcon} ${cartItems.length > 0 ? styles.nonEmpty : ''}`}/>
                  {cartItems.length > 0 && <span className={styles.basketBadge}>✓</span>}
                  <h3 className={styles.toBasketDescription}>Доставка</h3>
                </NavLink>
              </div> */}

        {/* <ToMenuButton /> */}
    

        <div>

        {/* <img
         src={pizzaMenu1}
        alt=""
        style={{
          position: 'fixed',
          top: '100px',
          left: '-40px',
          width: '400px',
          height: '600px',
        }}
      /> */}
       {/* <img
         src={pizzaMenu2}
        alt=""
        style={{
          position: 'fixed',
          top: '220px',
          right: '-40px',
          width: '400px',
          height: '600px',
        }}
      /> */}
       
          <table className={styles.dishTableList}>
          
            <thead>
              <tr>
                {/* <h3 className={styles.dishTableListTitle}>Піца</h3> */}
                {/* <th>ID</th>
                <th>Назва</th>
                <th>Об'єм</th>
                <th>Ціна</th> */}
              </tr>
            </thead>
            <tbody>
              {soupItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  {/* <td>{item.id}</td> */}
                  <td className={styles.dishTableName}>{item.назва}</td>
                  <td className={styles.dishTableIngredients}>{item.інгредієнти}</td>
                  {/* <td className={styles.dishTableType}>{item.тип}</td> */}
                  <td className={styles.dishTableWeigth}>{item.вага}</td>
                  <td className={styles.dishTablePrice}>{item.ціна}</td>
                  <td className={styles.dishTableButtonAdd}>
                    <AddButton
                      // className={styles.dishAddButton}
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

export default Soup;





