import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
import CartContext from "components/CartProvider/CartProvider";

// import { ReactComponent as BasketIcon } from 'images/delivery.svg';
// import ToMenuButton from "components/ToMenuButton/ToMenuButton";
import { ReactComponent as ToMenuIcon } from 'images/toMenuIcon.svg';
import menuColdApetizerData from "services/dataApetizers/coldApetizers.json";


import styles from 'components/MenuComponents/menuStyle.module.css';

import coldAppetizerMenu1 from 'images/coldAppetizerCardMenu.svg';
import coldAppetizerMenu2 from 'images/coldAppetizerCardMenu.svg';

export const ColdApetizers = () => {
  const { addToCart, cartItems } = useContext(CartContext);

  const [coldApetizerItems, setColdApetizerItems] = useState([]);
  


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
   setColdApetizerItems(menuColdApetizerData);
  }, []);





  const updateButtonState = (itemId) => {
   setColdApetizerItems(coldApetizerItems.map(item => {
      if (item.id === itemId) {
        return { ...item, alreadyAdded: false };
      }
      return item;
    }));
  };



  return (
    <div className={styles.dishPage}>
     <div className={styles.discriptionBox}>
          <h1 className={styles.dishTitle}>Холодні закуски</h1> 
          <div className={styles.toMenuButton}>
        <NavLink to="/menu" className={styles.toMenuLink}>
          <ToMenuIcon className={styles.toMenuIcon}/>
          <h1 className={styles.toMenuDescription}>до Меню</h1>
        </NavLink>
      </div>      </div>
     <div className={styles.dishPageContainer}>
     

      <div className={styles.dishPageBox}>

      <img

src={coldAppetizerMenu1}
alt=""
style={{
 position: 'fixed',
 top: '70px',
 left: '-100px',
 width: '500px',
 height: '500px',
 zIndex: '0',
 rotate: '17deg',
 transform: 'scaleX(-1)',
 opacity: '.4'
}}
/>


<img
className={styles.menuCardImage}
src={coldAppetizerMenu2}
alt=""
style={{
 position: 'fixed',
 bottom: '10px',
 right: '-50px',
 width: '500px',
 height: '500px',
 zIndex: '0',
 rotate: '-17deg',
 
 opacity: '.4',

}}
/>
      
      {/* <table className={styles.dishTableList}>
    
            <thead>
              <tr>
             
              </tr>
            </thead>
            <tbody>
              {coldApetizerItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  <td  className={styles.dishTableIngredients}>{item.інгредієнти}</td>
                  <td  className={styles.dishTableWeigth}>{item.вага}</td>
                  <td  className={styles.dishTablePrice}>{item.ціна}</td>
                  <td className={styles.dishTableButtonAdd}>
                    <AddButton
                      onClick={() => addToCart(item)}
                      alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                      updateButtonState={() => updateColdApetizerButtonState(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
          <table className={styles.dishList}>
          
          <tbody>
            {coldApetizerItems.map((item) => (
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

export default ColdApetizers;
