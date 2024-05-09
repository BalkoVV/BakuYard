// SetMeals.jsx


import React, { useEffect, useState, useContext } from "react";
// import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
import ToMenuButton from "components/ToMenuButton/ToMenuButton";

import CartContext from "components/CartProvider/CartProvider";

import lunchData from "services/dataComboSets/setMeals.json";


// import pizzaMenu1 from 'images/pizzaMenu1.png';
// import pizzaMenu2 from 'images/pizzaMenu2.png';
// import pizzaMenu3 from 'images/pizzaMenu3.png';

// import { ReactComponent as BasketIcon } from 'images/delivery.svg';
import styles from 'components/MenuComponents/menuStyle.module.css';

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
        element.style.opacity = '.9'; 
      }, 10 * index); 
    });
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
      <ToMenuButton/>
      <div className={styles.dishPageContainer}>

        <h1 className={styles.dishTitle}>Бізнес ланчі</h1> 

        {/* <div className={styles.toBasketButton}>
                <NavLink to="/menu/basket" className={styles.toBasketLink}>
                  <BasketIcon className={`${styles.basketIcon} ${cartItems.length > 0 ? styles.nonEmpty : ''}`}/>
                  {cartItems.length > 0 && <span className={styles.basketBadge}>✓</span>}
                  <h3 className={styles.toBasketDescription}>Доставка</h3>
                </NavLink>
              </div> */}

        {/* <ToMenuButton /> */}
    

        <div>

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




