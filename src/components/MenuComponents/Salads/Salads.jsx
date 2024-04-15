// Salads.jsx

import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
import CartContext from "components/CartProvider/CartProvider";

import { ReactComponent as ToMenuIcon } from 'images/undo.svg';

import menuData from "services/dataSalads/salads.json";
import styles from 'components/MenuComponents/menuStyle.module.css';

export const Salads = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(menuData);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутити сторінку до верхньої частини
  }, []);

  useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.fades}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '.9'; 
      }, 50 * index); 
    });
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
      <h1 className={styles.dishTitle}>Салати</h1>  
      
      <div className={styles.dishPageContainer}>

        <div className={styles.dishPageBox}>

          <NavLink to="/menu" className={styles.toMenuLink}>
            <ToMenuIcon/>
          </NavLink>

          <table className={styles.fades}>

            <thead>
              <tr>
                {/* <th>ID</th>
                <th>Назва</th>
                <th>Об'єм</th>
                <th>Ціна</th> */}
              </tr>
            </thead>

            <tbody  className={styles.dishTable}>
              {menuItems.map((item) => (
                <tr className={styles.dishTableItem} key={item.id}>
                  {/* <td>{item.id}</td> */}
                  <td>{item.назва}</td>
                  <td>{item.обєм}</td>
                  <td>{item.ціна}</td>
                  <td>
                    <AddButton
                      onClick={() => addToCart(item)}
                      alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                      updateButtonState={() => updateButtonState(item.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>
      </div>
    </div>
  );
};

export default Salads;





