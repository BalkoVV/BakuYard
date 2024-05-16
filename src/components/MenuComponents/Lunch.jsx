// SetMeals.jsx


import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
// import ToMenuButton from "components/ToMenuButton/ToMenuButton";
import { ReactComponent as ToMenuIcon } from 'images/toMenuIcon.svg';
import CartContext from "components/CartProvider/CartProvider";

import lunchData from "services/dataComboSets/setMeals.json";


// import pizzaMenu1 from 'images/pizzaMenu1.png';
// import pizzaMenu2 from 'images/pizzaMenu2.png';
// import pizzaMenu3 from 'images/pizzaMenu3.png';

// import { ReactComponent as BasketIcon } from 'images/delivery.svg';
import styles from 'components/MenuComponents/menuStyle.module.css';

import lunchMenu1 from 'images/lunchCardMenu.svg';
import lunchMenu2 from 'images/lunchCardMenu.svg';

export const Lunch = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [lunchItems, setLunchItems] = useState([]);

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
    window.scrollTo(0, 0); // Прокрутити сторінку до верхньої частини
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
       
          <table className={styles.dishTableList}>
          
            <thead>
              <tr>
                {/* <h3 className={styles.dishTableListTitle}>Піца</h3> */}
                {/* <th>ID</th>
                <th>Назва</th>
                <th>Об'єм</th>
                <th>Ціна</th> */}
              </tr>
            </thead>
            <tbody  className={styles.dishTableSetMeals}>
              {lunchItems.map((item) => (
                <tr key={item.id}  className={styles.dishTableSetMealsItem}>
                  {/* <td>{item.id}</td> */}
            <td className={styles.dishTableDay}>{item.назва}</td>
            <td className={styles.dishTablePriceDay}>{item.ціна}</td>
            <td className={styles.dishTableSetButtonAdd}>
              <AddButton
                onClick={() => addToCart(item)}
                alreadyAdded={cartItems.some(cartItem => cartItem.назва === item.назва)}
                updateButtonState={() => updateButtonState(item.назва)}
              />
            </td>

            <td className={styles.dishTableNameFirst}>{item.назва_перше}</td>
            <td className={styles.dishTableWeigthFirst}>{item.вага_перше}</td>

            <td className={styles.dishTableNameSecond}>{item.назва_друге}</td>
            <td className={styles.dishTableWeigthSecond}>{item.вага_друге}</td>

            <td className={styles.dishTableNameSalad}>{item.назва_салат}</td>
            <td className={styles.dishTableWeigthSalad}>{item.вага_салат}</td>
            <td className={styles.dishTableOptionsSalad}>{item.опції_салат}</td>

            <td className={styles.dishTableNameDrink}>{item.назва_напій}</td>
            <td className={styles.dishTableWeigthDrink}>{item.вага_напій}</td>
            
            <td className={styles.dishTableBread}>{item.назва_хліб}</td>
            <td className={styles.dishTableBread}>{item.вага_хліб}</td>
            
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





