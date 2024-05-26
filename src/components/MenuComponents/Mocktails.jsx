import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
import CartContext from "components/CartProvider/CartProvider";

// import { ReactComponent as BasketIcon } from 'images/delivery.svg';
// import ToMenuButton from "components/ToMenuButton/ToMenuButton";
import { ReactComponent as ToMenuIcon } from 'images/toMenuIcon.svg';

import menuMocktailsData from "services/dataCocktails/mocktails.json";

import styles from 'components/MenuComponents/menuStyle.module.css';

import mocktailsMenu1 from 'images/mocktailsCardMenu.svg';
import mocktailsMenu2 from 'images/mocktailsCardMenu.svg';

export const Mocktails = () => {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);

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
          <h1 className={styles.toMenuDescription}>до Меню</h1>
        </NavLink>
      </div>
            </div>
     <div className={styles.dishPageContainer}>
      
      <div className={styles.dishPageBox}>
      

      <img
         src={mocktailsMenu1}
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
         src={mocktailsMenu2}
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

        

<table className={styles.dishList}>
            {/* <h3 className={styles.dishListTitle}>Безалкогольні коктейлі</h3> */}
            <tbody>
              {mocktailsItems.map((item) => (
              <tr key={item.id} className={styles.dishListItem}>
                
                <div className={styles.dishListItemInfo}>

                  <span className={styles.dishListItemCategory}>
                    <td className={styles.dishListItemCategoryDescription}>{item.категорія}</td>
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

                        <span className={styles.dishTablePrice}>
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

export default Mocktails;
