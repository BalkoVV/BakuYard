import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// import AddButton from 'components/MenuComponents/AddButton/AddButton';
// import CartContext from "components/CartProvider/CartProvider";

// import { ReactComponent as BasketIcon } from 'images/delivery.svg';
// import ToMenuButton from "components/ToMenuButton/ToMenuButton";
import { ReactComponent as ToMenuIcon } from 'images/left.svg';


import menuAlcoholicCocktailsData from "services/dataCocktails/alcoholicCocktails.json";

import styles from 'components/MenuComponents/menuStyle.module.css';

export const AlcoholicCocktails = () => {
  // const { addToCart, cartItems } = useContext(CartContext);
  // const { cartItems } = useContext(CartContext);


  const [alcoholicCocktailsItems, setAlcoholicCocktailsItems] = useState([]);


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
   setAlcoholicCocktailsItems(menuAlcoholicCocktailsData);
  }, []);



 

  // const updateAlcoholicCocktailsButtonState = (itemId) => {
  //  setAlcoholicCocktailsItems(alcoholicCocktailsItems.map(item => {
  //     if (item.id === itemId) {
  //       return { ...item, alreadyAdded: false };
  //     }
  //     return item;
  //   }));
  // };

  return (
    <div className={styles.dishPage}>
 
      <div className={styles.discriptionBox}>
        <h1 className={styles.dishTitle}>Алкогольні коктейлі</h1> 

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
              {alcoholicCocktailsItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  <td  className={styles.dishTableIngredients}>{item.інгредієнти}</td>
                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                 
                </tr>
              ))}
            </tbody>
          </table> */}

<table className={styles.dishList}>
          <h3 className={styles.dishListTitle}>Алкогольні коктейлі</h3>
 
          <tbody>
            {alcoholicCocktailsItems.map((item) => (
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

        </div>
      </div>
    </div>
  );
};

export default AlcoholicCocktails;
