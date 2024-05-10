// SideDish.jsx


import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
// import ToMenuButton from "components/ToMenuButton/ToMenuButton";
import { ReactComponent as ToMenuIcon } from 'images/left.svg';

import CartContext from "components/CartProvider/CartProvider";

import sideDishData from "services/dataComboSets/sideDish.json";


// import pizzaMenu1 from 'images/pizzaMenu1.png';
// import pizzaMenu2 from 'images/pizzaMenu2.png';
// import pizzaMenu3 from 'images/pizzaMenu3.png';

import styles from 'components/MenuComponents/menuStyle.module.css';

export const SideDish = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [sideDishItems, setSideDishItems] = useState([]);

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

   useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setSideDishItems(sideDishData);
  }, []);

  const updateButtonState = (itemId) => {
    setSideDishItems(sideDishItems.map(item => {
      if (item.id === itemId) {
        return { ...item, alreadyAdded: false };
      }
      return item;
    }));
  };

  return (
    <div className={styles.dishPage}>
      <div className={styles.discriptionBox}>
          <h1 className={styles.dishTitle}>Гарніри</h1> 
          <div className={styles.toMenuButton}>
        <NavLink to="/menu" className={styles.toMenuLink}>
          <ToMenuIcon className={styles.toMenuIcon}/>
          <h1 className={styles.toMenuDescription}>до Менюс</h1>
        </NavLink>
      </div>
            </div>
      <div className={styles.dishPageContainer}>

      <div className={styles.dishPageBox}>

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
       
       <table className={styles.dishList}>
          
          <tbody>
            {sideDishItems.map((item) => (
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

export default SideDish;





