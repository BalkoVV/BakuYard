// MenuPage.jsx

import React, { useContext, useEffect } from "react";
import { NavLink, Route, Switch, useLocation } from "react-router-dom"; 

import { CartProvider, CartContext } from "components/CartProvider/CartProvider";
import { ReactComponent as BasketIcon } from 'images/delivery.svg';

import Basket from "components/Basket/Basket";

import Pizza from "components/MenuComponents/Pizza";
import HotDrinks from "components/MenuComponents/HotDrinks";
import ColdApetizers from "components/MenuComponents/ColdApetizers";
import HotApetizers from "components/MenuComponents/HotApetizers";
import Beverages from "components/MenuComponents/Beverages";
import AlcoholicCocktails from "components/MenuComponents/AlcoholicCocktails";
import Desserts from "components/MenuComponents/Desserts";
import Mocktails from "components/MenuComponents/Mocktails";
import Barbeque from "components/MenuComponents/Barbeque";
import Wines from "components/MenuComponents/Wines";
import Beer from "components/MenuComponents/Beer";
import Salads from "components/MenuComponents/Salads";
import styles from 'pages/MenuPage/MenuPage.module.css';


export const MenuPage = () => {
  const location = useLocation();
  const { cartItems } = useContext(CartContext); 



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

              <span className={styles.toBasketLinkBox}>
                <NavLink to="/menu/basket" className={styles.toBasketLink}>
                  <BasketIcon className={`${styles.basketIcon} ${cartItems.length > 0 ? styles.nonEmpty : ''}`}/>
                  {cartItems.length > 0 && <span className={styles.basketBadge}>✓</span>}
                </NavLink>
              </span>
            
            <CartProvider>
             <section className={styles.menuSection}>
             <div className={styles.menuBasketList}>
              
             </div>

            <ul className={styles.dishList}>

              {/* <li className={`${styles.dishCard} ${styles.dishCardBarbeque}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/barbeque" className={styles.dishCardLink}>
                    <h1>Барбекю</h1>
                  </NavLink>
                </span>
              </li> */}
              <li className={`${styles.dishCard} ${styles.dishCardBarbeque}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/barbeque" className={styles.dishCardLink}>
                    <h1>Барбекю</h1>
                  </NavLink>
                </span>
              </li>
          
              <li className={`${styles.dishCard} ${styles.dishCardBeer}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/beer" className={styles.dishCardLink}>
                    <h1>Пиво</h1>
                  </NavLink>
                </span>
              </li>

              <li className={`${styles.dishCard} ${styles.dishCardPizza}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/pizza" className={styles.dishCardLink}>
                    <h1>Піца</h1>
                  </NavLink>
                </span>
              </li>

              <li className={`${styles.dishCard} ${styles.dishCardWines}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/wines" className={styles.dishCardLink}>
                    <h1>Вино</h1>
                  </NavLink>
                </span>
              </li>
             
              <li className={`${styles.dishCard} ${styles.dishCardHotDrinks}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/hot-drinks" className={styles.dishCardLink}>
                    <h1>Гарячі напої</h1>
                  </NavLink>
                </span>
              </li>

              <li className={`${styles.dishCard} ${styles.dishCardSalads}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/salads" className={styles.dishCardLink}>
                    <h1>Салати</h1>
                  </NavLink>
                </span>
              </li>

              <li className={`${styles.dishCard} ${styles.dishCardSalads}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/cold-apetizers" className={styles.dishCardLink}>
                    <h1>Холодні закуски</h1>
                  </NavLink>
                </span>
              </li>

               <li className={`${styles.dishCard} ${styles.dishCardSalads}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/hot-apetizers" className={styles.dishCardLink}>
                    <h1>Гарячі закуски</h1>
                  </NavLink>
                </span>
              </li>

              <li className={`${styles.dishCard} ${styles.dishCardSalads}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/beverages" className={styles.dishCardLink}>
                    <h1>Безалкогольні напої</h1>
                  </NavLink>
                </span>
              </li>

              <li className={`${styles.dishCard} ${styles.dishCardSalads}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/alcoholic-cocktails" className={styles.dishCardLink}>
                    <h1>Алкогольні коктейлі</h1>
                  </NavLink>
                </span>
              </li>

              <li className={`${styles.dishCard} ${styles.dishCardSalads}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/mocktails" className={styles.dishCardLink}>
                    <h1>Безалкогольні коктейлі</h1>
                  </NavLink>
                </span>
              </li>

              <li className={`${styles.dishCard} ${styles.dishCardSalads}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/desserts" className={styles.dishCardLink}>
                    <h1>Десерти</h1>
                  </NavLink>
                </span>
              </li>

            </ul>  
          </section>
        </CartProvider>
      </Route>

      <Route path="/menu/basket" component={Basket} /> 
      <Route path="/menu/barbeque" component={Barbeque} />
      <Route path="/menu/cold-apetizers" component={ColdApetizers} />
      <Route path="/menu/hot-apetizers" component={HotApetizers} />
      <Route path="/menu/desserts" component={Desserts} />
      <Route path="/menu/alcoholic-cocktails" component={AlcoholicCocktails} />
      <Route path="/menu/mocktails" component={Mocktails} />
      <Route path="/menu/beverages" component={Beverages} />

      <Route path="/menu/beer" component={Beer} /> 
      <Route path="/menu/pizza" component={Pizza} /> 
      <Route path="/menu/salads" component={Salads} /> 
      <Route path="/menu/wines" component={Wines} /> 
      <Route path="/menu/hot-drinks" component={HotDrinks} />  
        
        

      </Switch>
      </div>
     </div>
   </div>
  );
};

export default MenuPage; 

