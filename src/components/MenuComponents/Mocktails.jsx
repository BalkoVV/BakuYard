import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
import CartContext from "components/CartProvider/CartProvider";

// import { ReactComponent as BasketIcon } from 'images/delivery.svg';
// import ToMenuButton from "components/ToMenuButton/ToMenuButton";
import { ReactComponent as ToMenuIcon } from 'images/toMenuIcon.svg';

import menuMocktailsData from "services/dataCocktails/mocktails.json";

import styles from 'components/MenuComponents/menuStyle.module.css';

export const Mocktails = () => {
  const { addToCart, cartItems } = useContext(CartContext);

  const [mocktailsItems, setMocktailsItems] = useState([]);


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
   setMocktailsItems(menuMocktailsData);
  }, []);



 

  const updateButtonState = (itemId) => {
   setMocktailsItems(mocktailsItems.map(item => {
      if (item.id === itemId) {
        return { ...item, alreadyAdded: false };
      }
      return item;
    }));
  };

  return (
    <div className={styles.dishPage}>
      <div className={styles.discriptionBox}>
          <h1 className={styles.dishTitle}>Безалкогольні коктейлі</h1> 

          <div className={styles.toMenuButton}>
        <NavLink to="/menu" className={styles.toMenuLink}>
          <ToMenuIcon className={styles.toMenuIcon}/>
          <h1 className={styles.toMenuDescription}>до Менюс</h1>
        </NavLink>
      </div>
            </div>
     <div className={styles.dishPageContainer}>
      
      <div className={styles.dishPageBox}>
      
          {/* <table className={styles.dishTableList}>
            <thead>
              <tr>
            
              </tr>
            </thead>
            <tbody>
              {mocktailsItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  <td  className={styles.dishTableIngredients}>{item.інгредієнти}</td>
                  <td  className={styles.dishTableWeigth}>{item.вага}</td>
                  <td  className={styles.dishTablePrice}>{item.ціна}</td>
                  <td className={styles.dishTableButtonAdd}>
                    <AddButton
                      onClick={() => addToCart(item)}
                      alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                      updateButtonState={() => updateMocktailsButtonState(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}

<table className={styles.dishList}>
            <h3 className={styles.dishListTitle}>Безалкогольні коктейлі</h3>
            <tbody>
              {mocktailsItems.map((item) => (
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

export default Mocktails;
