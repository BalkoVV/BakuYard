// MainDish.jsx


import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
// import ToMenuButton from "components/ToMenuButton/ToMenuButton";
import { ReactComponent as ToMenuIcon } from 'images/toMenuIcon.svg';
import CartContext from "components/CartProvider/CartProvider";

import mainDishData from "services/dataComboSets/mainDish.json";


// import pizzaMenu1 from 'images/pizzaMenu1.png';
// import pizzaMenu2 from 'images/pizzaMenu2.png';
// import pizzaMenu3 from 'images/pizzaMenu3.png';


// import { ReactComponent as BasketIcon } from 'images/delivery.svg';
import styles from 'components/MenuComponents/menuStyle.module.css';

import mainDishMenu1 from 'images/mainDishCardMenu.svg';
import mainDishMenu2 from 'images/mainDishCardMenu.svg';

export const MainDish = () => {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const [mainDishItems, setMainDishItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутити сторінку до верхньої частини
  }, []);

   useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.fades}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1'; 
      }, 10 * index); 
    });
  }, []);


  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  useEffect(() => {
    setMainDishItems(mainDishData);
  }, []);

  const updateButtonState = (itemId) => {
    setMainDishItems(mainDishItems.map(item => {
      if (item.id === itemId) {
        return { ...item, alreadyAdded: false };
      }
      return item;
    }));
  };

  return (
    <div className={styles.dishPage}>

    <div className={styles.discriptionBox}>
            <h1 className={styles.dishTitle}>Основні страви</h1> 

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

src={mainDishMenu1}
alt=""
style={{
 position: 'fixed',
 top: '20px',
 left: '-20px',
 width: '500px',
 height: '500px',
 zIndex: '0',
 rotate: '10deg',
 
 opacity: '.4'
}}
/>


<img
className={styles.menuCardImage}
src={mainDishMenu2}
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
       
          
       <div className={styles.dishListBox}>
<table className={styles.dishList}>
          
            
              <tbody>
              {mainDishItems.map((item) => (
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
                        <span className={styles.dishListRazdelitel}></span>
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
    </div>
  );
};

export default MainDish;





