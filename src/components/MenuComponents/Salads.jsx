// Salads.jsx

import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
// import ToMenuButton from "components/ToMenuButton/ToMenuButton";
import { ReactComponent as ToMenuIcon } from 'images/left.svg';

import { CartContext } from "components/CartProvider/CartProvider";

// import { ReactComponent as BasketIcon } from 'images/delivery.svg';


import menuData from "services/dataSalads/salads.json";
import styles from 'components/MenuComponents/menuStyle.module.css';
// import saladMenu1 from 'images/saladMenu1.png';
// import saladMenu2 from 'images/saladMenu2.png';
// import saladMenu3 from 'images/saladMenu3.png';

export const Salads = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.fades}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '.9'; 
      }, 10 * index); 
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); 
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
      <div className={styles.discriptionBox}>
          <h1 className={styles.dishTitle}>Салати</h1> 
          <div className={styles.toMenuButton}>
        <NavLink to="/menu" className={styles.toMenuLink}>
          <ToMenuIcon className={styles.toMenuIcon}/>
          <h1 className={styles.toMenuDescription}>до Меню</h1>
        </NavLink>
      </div>
            </div>
      <div className={styles.dishPageContainer}>
       

      
         
      
        <div className={styles.dishPageBox}>

        {/* <img
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
      /> */}
       {/* <img
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
      /> */}
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
        

        <table className={styles.dishList}>
          
          <tbody>
            {menuItems.map((item) => (
            <tr key={item.id} className={styles.dishListItem}>
              
               <div className={styles.dishListItemInfo}>

                  <span className={styles.dishListItemCategory}>
                    <td>{item.категорія}</td>
                  </span>
                
                  <span className={styles.dishListItemName} >
                    <td>{item.назва}</td>
                  </span>

                  <span className={styles.dishListItemIngredients}>
                    <td>{item.інгредієнти}</td>
                  </span>

               </div>

                
               <div className={styles.dishListItemManagement}>

                  <span className={styles.dishListItemWeigth}>
                    <td>{item.вага}</td>
                  </span>

                  <span className={styles.dishTablePrice}>
                    <td>{item.ціна}</td>
                  </span>

                  <span className={styles.dishListButtonAddBox}>
                      <td className={styles.dishListButtonAdd}>
                        <AddButton
                          
                          onClick={() => addToCart(item)}
                          alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                          updateButtonState={() => updateButtonState(item.id)}
                        />
                      </td>
                  </span>

               </div>

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





