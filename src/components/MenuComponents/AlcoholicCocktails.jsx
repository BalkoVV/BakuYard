import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

// import AddButton from 'components/MenuComponents/AddButton/AddButton';
// import CartContext from "components/CartProvider/CartProvider";

// import { ReactComponent as BasketIcon } from 'images/delivery.svg';
import ToMenuButton from "components/ToMenuButton/ToMenuButton";


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
      {/* <ToMenuButton/> */}
     <div className={styles.dishPageContainer}>
       {/* <h1 className={styles.dishTitle}>Алкогольні коктейлі</h1>   */}

          <div className={styles.discriptionBox}>
            <h1 className={styles.dishTitle}>Алкогольні коктейлі</h1> 
            <ToMenuButton className={styles.buttonToMenu}/>
          </div>
      
      

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
              {alcoholicCocktailsItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  {/* <td  className={styles.dishTableСategory}>{item.категорія}</td> */}
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  <td  className={styles.dishTableIngredients}>{item.інгредієнти}</td>
                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                  {/* <td className={styles.dishTableButtonAdd}>
                    <AddButton
                      onClick={() => addToCart(item)}
                      alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                      updateButtonState={() => updateAlcoholicCocktailsButtonState(item.id)}
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

export default AlcoholicCocktails;
