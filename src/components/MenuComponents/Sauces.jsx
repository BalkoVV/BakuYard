import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
import CartContext from "components/CartProvider/CartProvider";

// import { ReactComponent as BasketIcon } from 'images/delivery.svg';
// import ToMenuButton from "components/ToMenuButton/ToMenuButton";
import { ReactComponent as ToMenuIcon } from 'images/toMenuIcon.svg';

import menuSaucesData from "services/dataSauces/sauces.json";

import styles from 'components/MenuComponents/menuStyle.module.css';

import saucesMenu1 from 'images/saucesCardMenu.svg';
import saucesMenu2 from 'images/saucesCardMenu.svg';

export const Sauces = () => {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);

  const [saucesItems, setSaucesItems] = useState([]);


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
   setSaucesItems(menuSaucesData);
  }, []);



 

  const updateButtonState = (itemId) => {
   setSaucesItems(saucesItems.map(item => {
      if (item.id === itemId) {
        return { ...item, alreadyAdded: false };
      }
      return item;
    }));
  };

  return (
    <div className={styles.dishPage}>
      <div className={styles.discriptionBox}>
          <h1 className={styles.dishTitle}>Соуси</h1> 
          <div className={styles.toMenuButton}>
        <NavLink to="/menu" className={styles.toMenuLink}>
          <ToMenuIcon className={styles.toMenuIcon}/>
          <h1 className={styles.toMenuDescription}>до Меню</h1>
        </NavLink>
      </div>
            </div>
     <div className={styles.dishPageContainer}>
      

      <div className={styles.dishPageBox}>
      

      <img
        // className={styles.menuCardImage}
         src={saucesMenu1}
        alt=""
        style={{
          position: 'fixed',
          top: '70px',
          left: '-100px',
          width: '500px',
          height: '500px',
          zIndex: '0',
          rotate: '10deg',
          opacity: '.4'
        }}
      />


       <img
       className={styles.menuCardImage}
         src={saucesMenu2}
        alt=""
        style={{
          position: 'fixed',
          bottom: '10px',
          right: '-50px',
          width: '500px',
          height: '500px',
          zIndex: '0',
          rotate: '-10deg',
          transform: 'scaleX(-1)',
          opacity: '.4',
          // backgroundColor: 'white',
        }}
      />

      <table className={styles.dishList}>
          
          <tbody>
            {saucesItems.map((item) => (
            <tr key={item.id} className={styles.dishListItem}>
              
              <div className={styles.dishListItemInfo}>

                  <span className={styles.dishListItemCategory}>
                    <td className={styles.dishListItemCategoryDescription}></td>
                  </span>
                
                   <span className={styles.dishListItemName} >
                      <td className={styles.dishListItemNameDescription}>{item.назва}</td>
                    </span>

                  <span className={styles.dishListItemIngredients}>
                    <td className={styles.dishListItemIngredientsDescription}>{item.інгредієнти}</td>
                  </span>
                  

               </div>

                 <div className={styles.dishListItemManagement}>

                    <span className={styles.dishListWeightPriceBox}>
                        <span className={styles.dishListItemWeigth}>
                          <td>{item.вага}</td>
                        </span>

                        <span className={styles.dishListItemPrice}>
                          <td>{item.ціна}</td>
                        </span>
                    </span>

                    <span className={styles.dishListButtonAddBox}>
                        <td className={styles.dishListButtonAdd}>
                        <AddButton
                          onAdd={() => addToCart(item)}
                          onRemove={() => {
                            removeFromCart(item.id);
                            updateButtonState(item.id);
                          }}
                          alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                        />
                        </td>
                    </span>

                 </div>
               {/* <div className={styles.dishListItemManagement}>

                  <span className={styles.dishListItemWeigth}>
                    <td>{item.вага}</td>
                  </span>

                  <span className={styles.dishTablePrice}>
                    <td>{item.ціна}</td>
                  </span>

                  <span className={styles.dishListButtonAddBox}>
                      <td className={styles.dishListButtonAdd}>
                      <AddButton
                          onAdd={() => addToCart(item)}
                          onRemove={() => {
                            removeFromCart(item.id);
                            updateButtonState(item.id);
                          }}
                          alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                        />

                      </td>
                  </span>

               </div> */}

              </tr>
            ))}
          </tbody>
        </table>

        </div>
      </div>
    </div>
  );
};

export default Sauces;
