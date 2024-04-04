// MenuPage.jsx

import React, { useEffect } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import Pipizza from 'components/MenuComponents/Pipizza/Pipizza';
import Pizza from "components/MenuComponents/Pizza/Pizza";

import styles from '../MenuPage/MenuPage.module.css';

// import PizzaImage from 'images/pizza.png';
const MenuPage = () => {

  useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.mainContent}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1'; 
      }, 80 * index); // Додаємо затримку в залежності від індексу компонента
    });
  }, []);

  return (
   <div>
     <Switch>
        <Route path="/menu" exact> 
          <ul  className={` ${styles.list} `}>
           <li  className={`${styles.mainPageListItem} ${styles.mainContent}`}>
              <div className={styles.featuresItem}>
                <NavLink to="/menu/pizza">Pizza</NavLink>
              </div>
            </li>
            <li  className={`${styles.mainPageListItem} ${styles.mainContent}`}>
              <div className={styles.featuresItem}>
          
                <NavLink to="/menu/pipizza">Pipizza</NavLink>
              </div>
            </li>
          </ul>  
        </Route>

        <Route path="/menu/pipizza" component={Pipizza} /> 
        <Route path="/menu/pizza" component={Pizza} /> 
      </Switch>
   </div>
  );
};

export default MenuPage;

