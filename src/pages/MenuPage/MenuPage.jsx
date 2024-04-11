// // MenuPage.jsx
import React, { useEffect } from "react";
import { NavLink, Route, Switch, useLocation } from "react-router-dom"; 

import { CartProvider } from "components/CartProvider/CartProvider";

import Basket from "components/Basket/Basket";
import Pizza from "components/MenuComponents/Pizza/Pizza";

import { ReactComponent as BasketIcon } from 'images/deliveryDining.svg';

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
              <span className={styles.menuBasketLink}>
                <NavLink to="/menu/basket">
                  <BasketIcon className={styles.basketIcon}/>
                </NavLink>
              </span>
             </div>

            <ul className={styles.dishList}>
            
            {/* <li className={`${styles.fadeIn} ${styles.dishItem}`}>
              <div className={styles.dishCard}>
              <NavLink to="/menu/pizza" className={styles.dishCardLink}>
                <p>Pizza</p>
              </NavLink>
             
              </div>

            </li> */}

  <li className={`${styles.fadeIn} ${styles.dishCard}`}>
    <span classname={styles.dishCardBox}> 
    <NavLink to="/menu/pizza" className={styles.dishCardLink}>
     <h1>Pizza</h1>
    </NavLink>
    </span>
  </li>

  <li className={`${styles.fadeIn} ${styles.dishCard}`}>
    <span classname={styles.dishCardBox}> 
    <NavLink to="/menu/pizza" className={styles.dishCardLink}>
     <h1>Pizza</h1>
    </NavLink>
    </span>
  </li>

  <li className={`${styles.fadeIn} ${styles.dishCard}`}>
    <span classname={styles.dishCardBox}> 
    <NavLink to="/menu/pizza" className={styles.dishCardLink}>
     <h1>Pizza</h1>
    </NavLink>
    </span>
  </li>

  <li className={`${styles.fadeIn} ${styles.dishCard}`}>
    <span classname={styles.dishCardBox}> 
    <NavLink to="/menu/pizza" className={styles.dishCardLink}>
     <h1>Pizza</h1>
    </NavLink>
    </span>
  </li>

  <li className={`${styles.fadeIn} ${styles.dishCard}`}>
    <span classname={styles.dishCardBox}> 
    <NavLink to="/menu/pizza" className={styles.dishCardLink}>
     <h1>Pizza</h1>
    </NavLink>
    </span>
  </li>

  <li className={`${styles.fadeIn} ${styles.dishCard}`}>
    <span classname={styles.dishCardBox}> 
    <NavLink to="/menu/pizza" className={styles.dishCardLink}>
     <h1>Pizza</h1>
    </NavLink>
    </span>
  </li>

  <li className={`${styles.fadeIn} ${styles.dishCard}`}>
    <span classname={styles.dishCardBox}> 
    <NavLink to="/menu/pizza" className={styles.dishCardLink}>
     <h1>Pizza</h1>
    </NavLink>
    </span>
  </li>

  <li className={`${styles.fadeIn} ${styles.dishCard}`}>
    <span classname={styles.dishCardBox}> 
    <NavLink to="/menu/pizza" className={styles.dishCardLink}>
     <h1>Pizza</h1>
    </NavLink>
    </span>
  </li>


              {/* <li className={`${styles.fadeIn} ${styles.dishItem}`}>
                  <div className={styles.pizzaNavLink}>
                   <span className={styles.dishNavLinkCover}>
                    <NavLink to="/menu/pizza" className={styles.dishNavLink}>
                     <h1>Pizza</h1>
                    </NavLink>
                   </span>
                  </div>
              </li>

              <li className={`${styles.fadeIn} ${styles.dishItem}`}>
                <span className={styles.pizzaForImg}>
                  <NavLink to="/menu/pizza">
                  <h1>Pizza</h1>
                  </NavLink>
                </span>
              </li>
              <li className={`${styles.fadeIn} ${styles.dishItem}`}>
                <span className={styles.pizzaForImg}>
                  <NavLink to="/menu/pizza">
                  <h1>Pizza</h1>
                  </NavLink>
                </span>
              </li>
              <li className={`${styles.fadeIn} ${styles.dishItem}`}>
                <span className={styles.pizzaForImg}>
                  <NavLink to="/menu/pizza">
                  <h1>Pizza</h1>
                  </NavLink>
                </span>
              </li>
              <li className={`${styles.fadeIn} ${styles.dishItem}`}>
                <span className={styles.pizzaForImg}>
                  <NavLink to="/menu/pizza">
                  <h1>Pizza</h1>
                  </NavLink>
                </span>
              </li>
              <li className={`${styles.fadeIn} ${styles.dishItem}`}>
                <span className={styles.pizzaForImg}>
                  <NavLink to="/menu/pizza">
                  <h1>Pizza</h1>
                  </NavLink>
                </span>
              </li>
              <li className={`${styles.fadeIn} ${styles.dishItem}`}>
                <span className={styles.pizzaForImg}>
                  <NavLink to="/menu/pizza">
                  <h1>Pizza</h1>
                  </NavLink>
                </span>
              </li>
              <li className={`${styles.fadeIn} ${styles.dishItem}`}>
                <span className={styles.pizzaForImg}>
                  <NavLink to="/menu/pizza">
                  <h1>Pizza</h1>
                  </NavLink>
                </span>
              </li> */}
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




