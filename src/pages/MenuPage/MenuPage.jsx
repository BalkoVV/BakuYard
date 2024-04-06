// // MenuPage.jsx

import React, { useEffect } from "react";
import { NavLink, Route, Switch, useLocation } from "react-router-dom"; 


import Pipizza from 'components/MenuComponents/Pipizza/Pipizza';
import Pizza from "components/MenuComponents/Pizza/Pizza";

import styles from 'pages/MenuPage/MenuPage.module.css';

const MenuPage = () => {
  const location = useLocation();

  useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.fadeIn}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1'; 
      }, 10 * index); 
    });
  }, [location.pathname]);
  
  
  return (
   <div>
     <div className={styles.menuContainer}>
     <Switch>
        <Route path="/menu" exact> 
            <h1 className={`${styles.menuTitle} ${styles.fadeIn}`}>Меню</h1>
            <ul className={styles.list}>
              <li className={styles.fadeIn}>
                <NavLink to="/menu/pizza">
                  Pizza
                </NavLink>
              </li>
              <li className={styles.fadeIn}>
                <NavLink to="/menu/pipizza">
                  Pipizza
                </NavLink>
              </li>
              <li className={styles.fadeIn}>
                <NavLink to="/menu/pizza">
                  Pizza
                </NavLink>
              </li>
              <li className={styles.fadeIn}>
                <NavLink to="/menu/pipizza">
                  Pipizza
                </NavLink>
              </li>
              <li className={styles.fadeIn}>
                <NavLink to="/menu/pizza">
                  Pizza
                </NavLink>
              </li>
              <li className={styles.fadeIn}>
                <NavLink to="/menu/pipizza">
                  Pipizza
                </NavLink> 
              </li>
              <li className={styles.fadeIn}>
                <NavLink to="/menu/pizza">
                  Pizza
                </NavLink>
              </li>
              <li className={styles.fadeIn}>
                <NavLink to="/menu/pipizza">
                  Pipizza
                </NavLink> 
              </li>
              <li className={styles.fadeIn}>
                <NavLink to="/menu/pizza">
                  Pizza
                </NavLink>
              </li>
              <li className={styles.fadeIn}>
                <NavLink to="/menu/pipizza">
                  Pipizza
                </NavLink>
              </li>
              <li className={styles.fadeIn}>
                <NavLink to="/menu/pizza">
                  Pizza
                </NavLink>
              </li>
              <li className={styles.fadeIn}>
                <NavLink to="/menu/pipizza">
                  Pipizza
                </NavLink>
              </li>
            </ul>  
        </Route>

       
        <Route path="/menu/pipizza" component={Pipizza} /> 
        <Route path="/menu/pizza" component={Pizza} /> 
      </Switch>
     </div>
   </div>
  );
};

export default MenuPage;




