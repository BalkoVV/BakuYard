// SetMeals.jsx


import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
// import ToMenuButton from "components/ToMenuButton/ToMenuButton";
import { ReactComponent as ToMenuIcon } from 'images/toMenuIcon.svg';
import CartContext from "components/CartProvider/CartProvider";

import lunchData from "services/dataComboSets/setMeals.json";

// import { ReactComponent as BasketIcon } from 'images/delivery.svg';
import styles from 'components/MenuComponents/menuStyle.module.css';

import lunchMenu1 from 'images/lunchCardMenu.svg';
import lunchMenu2 from 'images/lunchCardMenu.svg';


export const Lunch = () => {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const [lunchItems, setLunchItems] = useState([]);

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
    setLunchItems(lunchData);
  }, []);

  const updateButtonState = (itemId) => {
    setLunchItems(lunchItems.map(item => {
      if (item.id === itemId) {
        return { ...item, alreadyAdded: false };
      }
      return item;
    }));
  };

  return (
    <div className={styles.dishPage}>
         <div className={styles.discriptionBox}>
          <h1 className={styles.dishTitle}>Бізнес ланчі</h1> 
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
        src={lunchMenu1}
        alt=""
        style={{
        position: 'fixed',
        top: '70px',
        left: '-100px',
        width: '500px',
        height: '500px',
        zIndex: '0',
        rotate: '10deg',
        transform: 'scaleX(-1)',
        opacity: '.4'
        }}
      />


      <img
        className={styles.menuCardImage}
        src={lunchMenu2}
        alt=""
        style={{
        position: 'fixed',
        bottom: '10px',
        right: '-50px',
        width: '500px',
        height: '500px',
        zIndex: '0',
        rotate: '-10deg',
        opacity: '.4',
        }}
      />

     

       
          <table >

            <tbody >
              {lunchItems.map((item) => (
                <tr key={item.id}  className={styles.dishLunchList}>
                  <span className={styles.dishListItemLunchAddBox}>
                  <td className={styles.dishListItemLunchDay}>{item.назва}</td>
                  <span className={styles.dishListLunchButtonAddBox}>
                        <td className={styles.dishListLunchButtonAdd}>
                        

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
                  </span>
                  <ul className={styles.dishListItemLunch}>
                 
                  <li  className={styles.dishListItemLunchFirst}>
                    <td className={styles.dishListItemLunchNameFirst}>{item.назва_перше}</td>
                    <td className={styles.dishListItemLunchWeigthFirst}>{item.вага_перше}</td>
                  </li>
                  <li className={styles.dishListItemLunchSecond}>
                    <td className={styles.dishListItemLunchNameSecond}>{item.назва_друге}</td>
                    <td className={styles.dishListItemLunchWeigthSecond}>{item.вага_друге}</td>
                  </li>
                 
                  <li className={styles.dishListItemLunchSalad}>
                    <td className={styles.dishListItemLunchNameSalad}>{item.назва_салат}</td>
                    {/* <td className={styles.dishListItemLunchOptionsSalad}>{item.опції_салат}</td> */}
                    <td className={styles.dishListItemLunchWeigthSalad}>{item.вага_салат}</td>
                    
                  </li>
                  
                  <li className={styles.dishListItemLunchDrink}>
                    <td className={styles.dishListItemLunchNameDrink}>{item.назва_напій}</td>
                    <td className={styles.dishListItemLunchWeigthDrink}>{item.вага_напій}</td>
                  </li>
                  <li className={styles.dishListItemLunchBread}> 
                    <td className={styles.dishListItemLunchNameBread}>{item.назва_хліб}</td>
                    <td className={styles.dishListItemLunchWeigthBread}>{item.вага_хліб}</td>
                  </li>
                  <li className={styles.dishListItemLunchManagement}>
                    
                   
                    <td className={styles.dishListItemLunchInfo}>
                       <h4>
                          * замовлення з 12:00 до 15:00
                       </h4>
                     </td>
                    
                     <td className={styles.dishListItemLunchPrice}>
                       {item.ціна}
                     </td>
                   
 
                    
                     
                   </li>
                  </ul>
                </tr>
              ))}
            </tbody>


          </table>

          

        </div>
      </div>
    </div>
  );
};

export default Lunch;





