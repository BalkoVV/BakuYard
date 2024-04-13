// // MenuPage.jsx
import React, { useEffect } from "react";
import { NavLink, Route, Switch, useLocation } from "react-router-dom"; 

import { CartProvider } from "components/CartProvider/CartProvider";
import { ReactComponent as BasketIcon } from 'images/deliveryDining.svg';

import Basket from "components/Basket/Basket";
import Pizza from "components/MenuComponents/Pizza/Pizza";
import BarbequeMenu from "components/MenuComponents/BarbequeMenu/BarbequeMenu";
import Salads from "components/MenuComponents/Salads/Salads";
import Beer from "components/MenuComponents/Beer";
// import Wine from "components/MenuComponents/Wine/Wine";



import styles from 'pages/MenuPage/MenuPage.module.css';


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
          

  <li className={`${styles.fadeIn} ${styles.dishCard} ${styles.dishCardPizza}`}>
    <span classname={styles.dishCardBox}> 
    <NavLink to="/menu/pizza" className={styles.dishCardLink}>
     <h1>Піцца</h1>
    </NavLink>
    </span>
  </li>

  <li className={`${styles.fadeIn} ${styles.dishCard} ${styles.dishCardSalads}`}>
    
    <span classname={styles.dishCardBox}> 
    <NavLink to="/menu/salads" className={styles.dishCardLink}>
     <h1>Салати</h1>
    </NavLink>
    </span>
  </li>

  <li className={`${styles.fadeIn} ${styles.dishCard} ${styles.dishCardBarbeque}`}>
    <span classname={styles.dishCardBox}> 
    <NavLink to="/menu/barbeque" className={styles.dishCardLink}>
     <h1>Барбекю</h1>
    </NavLink>
    </span>
  </li>

  <li className={`${styles.fadeIn} ${styles.dishCard} ${styles.dishCardWine}`}>
    <span classname={styles.dishCardBox}> 
    <NavLink to="/menu/wine" className={styles.dishCardLink}>
     <h1>Вино</h1>
    </NavLink>
    </span>
  </li>  

  <li className={`${styles.fadeIn} ${styles.dishCard} ${styles.dishCardBeer}`}>
    <span classname={styles.dishCardBox}> 
    <NavLink to="/menu/beer" className={styles.dishCardLink}>
     <h1>Пиво</h1>
    </NavLink>
    </span>
  </li>

  <li className={`${styles.fadeIn} ${styles.dishCard} ${styles.dishCardBarbeque}`}>
    <span classname={styles.dishCardBox}> 
    <NavLink to="/menu/barbeque" className={styles.dishCardLink}>
     <h1>Барбекю</h1>
    </NavLink>
    </span>
  </li>

  <li className={`${styles.fadeIn} ${styles.dishCard} ${styles.dishCardWine}`}>
    <span classname={styles.dishCardBox}> 
    <NavLink to="/menu/wine" className={styles.dishCardLink}>
     <h1>Wine</h1>
    </NavLink>
    </span>
  </li>  

  <li className={`${styles.fadeIn} ${styles.dishCard} ${styles.dishCardPizza}`}>
    <span classname={styles.dishCardBox}> 
    <NavLink to="/menu/pizza" className={styles.dishCardLink}>
     <h1>Pizza</h1>
    </NavLink>
    </span>
  </li>

  <li className={`${styles.fadeIn} ${styles.dishCard} ${styles.dishCardBarbeque}`}>
    <span classname={styles.dishCardBox}> 
    <NavLink to="/menu/barbeque" className={styles.dishCardLink}>
     <h1>Барбекю</h1>
    </NavLink>
    </span>
  </li>

  <li className={`${styles.fadeIn} ${styles.dishCard} ${styles.dishCardWine}`}>
    <span classname={styles.dishCardBox}> 
    <NavLink to="/menu/wine" className={styles.dishCardLink}>
     <h1>Wine</h1>
    </NavLink>
    </span>
  </li>  

  <li className={`${styles.fadeIn} ${styles.dishCard} ${styles.dishCardBarbeque}`}>
    <span classname={styles.dishCardBox}> 
    <NavLink to="/menu/barbeque" className={styles.dishCardLink}>
     <h1>Барбекю</h1>
    </NavLink>
    </span>
  </li>
            </ul>  
             </section>
            
            </CartProvider>
        </Route>
       

        <Route path="/menu/pizza" component={Pizza} /> 
        <Route path="/menu/barbeque" component={BarbequeMenu} /> 
        <Route path="/menu/salads" component={Salads} /> 
        <Route path="/menu/beer" component={Beer} /> 
        {/* <Route path="/menu/wine" component={Wine} />  */}
        <Route path="/menu/basket" component={Basket} /> 
      </Switch>
      </div>
     </div>
   </div>
  );
};

export default MenuPage;



