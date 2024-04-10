// // MenuPage.jsx
import React, { useEffect } from "react";
import { NavLink, Route, Switch, useLocation } from "react-router-dom"; 

import { CartProvider } from "components/CartProvider/CartProvider";

import Basket from "components/Basket/Basket";
import Pizza from "components/MenuComponents/Pizza/Pizza";

import { ReactComponent as BasketIcon } from 'images/delivery.svg';

import styles from 'pages/MenuPage/MenuPage.module.css';
// import Basket from "components/Basket/Basket";

export const MenuPage = () => {
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
   <div className={styles.menuPage}>
     
     <div className={styles.menuPageContainer}>
      <div className={styles.menuPageBox}>
     <Switch>
     
        <Route path="/menu" exact> 
            <h1 className={styles.menuTitle}>Меню</h1>
            <CartProvider>
             <section className={styles.menuSection}>
             <div className={styles.menuBasketList}>
              <span>
                <NavLink to="/menu/basket">
                  <BasketIcon className={styles.basketIcon}/>
                </NavLink>
              </span>
             </div>

            <ul className={styles.menuDishList}>
            
              <li className={styles.fadeIn}>
                <NavLink to="/menu/pizza">
                  Pizza
                </NavLink>
              </li>
              <li className={styles.fadeIn}>
                <NavLink to="/menu/pizza">
                  Pizza
                </NavLink>
              </li>
              <li className={styles.fadeIn}>
                <NavLink to="/menu/pizza">
                  Pizza
                </NavLink>
              </li>
              <li className={styles.fadeIn}>
                <NavLink to="/menu/pizza">
                  Pizza
                </NavLink>
              </li>
              <li className={styles.fadeIn}>
                <NavLink to="/menu/pizza">
                  Pizza
                </NavLink>
              </li>
              <li className={styles.fadeIn}>
                <NavLink to="/menu/pizza">
                  Pizza
                </NavLink>
              </li>
              <li className={styles.fadeIn}>
                <NavLink to="/menu/pizza">
                  Pizza
                </NavLink>
              </li>
              
              <li className={styles.fadeIn}>
                <NavLink to="/menu/pizza">
                  Pizza
                </NavLink>
              </li>
            </ul>  
             </section>
            
            </CartProvider>
        </Route>
       

        <Route path="/menu/pizza" component={Pizza} /> 
        <Route path="/menu/basket" component={Basket} /> 
      </Switch>
      </div>
     </div>
   </div>
  );
};

export default MenuPage;




