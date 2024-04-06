// Pipizza.jsx

import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
import CartContext from "components/CartProvider/CartProvider";

import { ReactComponent as ToMenuIcon } from 'images/toMenu.svg';

import menuData from "services/pipizza.json";
import styles from 'components/MenuComponents/menuStyle.module.css';

const Pipizza = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(menuData);
  }, []);

  useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.fades}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1'; 
      }, 50 * index); 
    });
  }, []);

  return (
    <div>
      <div className={styles.dishPageContainer}>
      <h1 className={`${styles.dishTitle} ${styles.fades}`}>Pipizza</h1>
      <NavLink to="/menu" className={styles.toMenuButton}>
        <ToMenuIcon  className={styles.fades}/>
      </NavLink>
      <table className={styles.fades}>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            {/* <th>Назва</th> */}
            {/* <th>Об'єм</th> */}
            {/* <th>Ціна</th> */}
            {/* <th>Дія</th> */}
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id} className={styles.dishTableLine}>
              {/* <td>{item.id}</td> */}
              <td >{item.назва}</td>
              <td >{item.обєм}</td>
              <td >{item.ціна}</td>
              <td>
                <AddButton
                  onClick={() => addToCart(item)}
                  alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Pipizza;
