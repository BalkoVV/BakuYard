// Beer.jsx

import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
import CartContext from "components/CartProvider/CartProvider";

import { ReactComponent as ToMenuIcon } from 'images/toMenuIcon.svg';// import { ReactComponent as BasketIcon } from 'images/delivery.svg';

// import ToMenuButton from "components/ToMenuButton/ToMenuButton";


import menuData from "services/dataBeer/beer.json";
import beerSnacksData from "services/dataBeer/beerSnacks.json";

import styles from 'components/MenuComponents/menuStyle.module.css';

import beerMenu1 from 'images/beerCardMenu.svg';

import beerMenu2 from 'images/beerCardMenu.svg';

export const Beer = () => {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.fades}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '.9'; 
      }, 50 * index); 
    });
  }, []);

  

  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутити сторінку до верхньої частини
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
            <h1 className={styles.dishTitle}>Пиво</h1> 
            <div className={styles.toMenuButton}>
        <NavLink to="/menu" className={styles.toMenuLink}>
          <ToMenuIcon className={styles.toMenuIcon}/>
          <h1 className={styles.toMenuDescription}>до Меню</h1>
        </NavLink>
      </div>          </div>
      
      <div className={styles.dishPageContainer}>
      

        <div className={styles.dishPageBox}>

        <img
         src={beerMenu1}
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
         src={beerMenu2}
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
         
        }}
      />
          {/* <table className={styles.dishTableList}>

            <thead>
             
            </thead>

            <tbody  className={`${styles.fadeIn}`}>
              {menuItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
              
                <td className={styles.dishTableName}>{item.назва}</td>
                <td className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                <td className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
               
              </tr>
              ))}
            </tbody>

          </table> */}

<table className={styles.dishList}>
          <h3 className={styles.dishListTitle}>Пиво</h3>
 
          <tbody>
            {menuItems.map((item) => (
            <tr key={item.id} className={styles.dishListItem}>
              
               <div className={styles.dishListItemInfo}>

                  {/* <span className={styles.dishListItemCategory}>
                    <td>{item.категорія}</td>
                  </span> */}
                
                <span className={styles.dishListItemName} >
                      <td className={styles.dishListItemNameDescription}>{item.назва}</td>
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

               </div>
              </tr>
            ))}
          </tbody>
        </table>

{/* beerSnacks */}
{/* <table className={styles.dishTableList}>
          <thead>
            <tr>
              <h3>до Пива</h3>
             
            </tr>
          </thead>
          <tbody>
            {beerSnacksData.map((item) => (
              <tr key={item.id} className={styles.dishTable}>
               
                <td className={styles.dishTableName}>{item.назва}</td>
                <td className={styles.dishTableIngredients}>{item.інгредієнти}</td>
                <td className={styles.dishTableWeigth}>{item.вага}</td>
                <td className={styles.dishTablePrice}>{item.ціна}</td>
                
                <td className={styles.dishTableButtonAdd}>
                  <AddButton
                    onClick={() => addToCart(item)}
                    alreadyAdded={cartItems.some((cartItem) => cartItem.id === item.id)}
                    updateButtonState={() => updateButtonState(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}

<table className={styles.dishList}>
            <h3 className={styles.dishListTitle}>до Пива</h3>
            <tbody>
              {beerSnacksData.map((item) => (
              <tr key={item.id} className={styles.dishListItem}>
                
                 <div className={styles.dishListItemInfo}>

                    {/* <span className={styles.dishListItemCategory}>
                      <td>{item.категорія}</td>
                    </span> */}
                  
                  <span className={styles.dishListItemName} >
                      <td className={styles.dishListItemNameDescription}>{item.назва}</td>
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

                </tr>
              ))}
            </tbody>
          </table>


        </div>
      </div>
    </div>
  );
};

export default Beer;






