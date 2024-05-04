// Banquete.jsx


import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

// import AddButton from 'components/MenuComponents/AddButton/AddButton';
import ToMenuButton from "components/ToMenuButton/ToMenuButton";

import CartContext from "components/CartProvider/CartProvider";

import banqueteHotData from "services/dataBanquete/banqueteHot.json";
import banqueteColdData from "services/dataBanquete/banqueteCold.json"

// import pizzaMenu1 from 'images/pizzaMenu1.png';
// import pizzaMenu2 from 'images/pizzaMenu2.png';
// import pizzaMenu3 from 'images/pizzaMenu3.png';

import { ReactComponent as BasketIcon } from 'images/delivery.svg';
import styles from 'components/MenuComponents/menuStyle.module.css';

export const Banquete = () => {
//   const { addToCart, cartItems } = useContext(CartContext);
const { cartItems } = useContext(CartContext);

  const [banqueteHotItems, setBanqueteHotItems] = useState([]);
  const [banqueteColdItems, setBanqueteColdItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

   useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.fades}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '.9'; 
      }, 30 * index); 
    });
  }, []);

  useEffect(() => {
    setBanqueteHotItems(banqueteHotData);
  }, []);

  useEffect(() => {
   setBanqueteColdItems(banqueteColdData);
 }, []);

//   const updateButtonState = (itemId) => {
//     setMenuItems(menuItems.map(item => {
//       if (item.id === itemId) {
//         return { ...item, alreadyAdded: false };
//       }
//       return item;
//     }));
//   };

  return (
    <div className={styles.dishPage}>
      <div className={styles.dishPageContainer}>

        <h1 className={styles.dishTitle}>Банкетне меню</h1> 

        <span className={styles.toBasketLinkBox}>
          <NavLink to="/menu/basket" className={styles.toBasketLink}>
            <BasketIcon className={`${styles.basketIcon} ${cartItems.length > 0 ? styles.nonEmpty : ''}`}/>
            {cartItems.length > 0 && <span className={styles.basketBadge}>✓</span>}
          </NavLink>
        </span>

        <ToMenuButton />
      

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
      />
       <img
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
                <h3 className={styles.dishTableListTitle}>Гарячі страви</h3>
               
              </tr>
            </thead>
            <tbody>
              {banqueteHotItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  {/* <td>{item.id}</td> */}
                  <td className={styles.dishTableName}>{item.назва}</td>
                  <td className={styles.dishTableIngredients}>{item.інгредієнти}</td>
                  {/* <td className={styles.dishTableType}>{item.тип}</td> */}
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

          <table className={styles.dishTableList}>
            <thead>
              <tr>
                <h3 className={styles.dishTableListTitle}>Холодні страви</h3>
               
              </tr>
            </thead>
            <tbody>
              {banqueteColdItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                 
                  <td className={styles.dishTableName}>{item.назва}</td>
                  <td className={styles.dishTableIngredients}>{item.інгредієнти}</td>
                  <td className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  <td className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                  
                  {/* <td className={styles.dishTableButtonAdd}>
                    <AddButton
                      onClick={() => addToCart(item)}
                      alreadyAdded={cartItems.some((cartItem) => cartItem.id === item.id)}
                      updateButtonState={() => updateButtonState(item.id)}
                    />
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

export default Banquete;





