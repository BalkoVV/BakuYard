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
import Sauces from "components/MenuComponents/Sauces";
import HardAlkohol from "components/MenuComponents/HardAlkohol";
import Wines from "components/MenuComponents/Wines";
import Beer from "components/MenuComponents/Beer";
import Salads from "components/MenuComponents/Salads";
import Banquete from "components/MenuComponents/AddButton/Banquete";
import Fish from "components/MenuComponents/Fish";
import MainDish from "components/MenuComponents/MainDish";
import SideDish from "components/MenuComponents/SideDish";
import Soup from "components/MenuComponents/Soup";
import SetMeals from "components/MenuComponents/SetMeals";
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
                <h3>Доставка</h3>
                  <BasketIcon className={`${styles.basketIcon} ${cartItems.length > 0 ? styles.nonEmpty : ''}`}/>
                  {cartItems.length > 0 && <span className={styles.basketBadge}>✓</span>}
                </NavLink>
              </span>
            
            <CartProvider>
             <section className={styles.menuSection}>
             <div className={styles.menuBasketList}>
              
             </div>

            <ul className={styles.dishList}>
            <li className={`${styles.dishCard} ${styles.dishCardBarbeque}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/set-meals" className={styles.dishCardLink}>
                    <h1>Комплексні обіди</h1>
                  </NavLink>
                </span>
              </li>

              <li className={`${styles.dishCard} ${styles.dishCardHardAlkohol}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/hard-alkohol" className={styles.dishCardLink}>
                    <h1>Міцний алкоголь</h1>
                  </NavLink>
                </span>
              </li>
              <li className={`${styles.dishCard} ${styles.dishCardBarbeque}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/barbeque" className={styles.dishCardLink}>
                    <h1 className={styles.dishCardLinkTitle}>Барбекю</h1>
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

              <li className={`${styles.dishCard} ${styles.dishCardSauces}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/sauces" className={styles.dishCardLink}>
                    <h1>Соуси</h1>
                  </NavLink>
                </span>
              </li>

              <li className={`${styles.dishCard} ${styles.dishCardPizza}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/pizza" className={styles.dishCardLink}>
                    <h1>З Печі</h1>
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

              <li className={`${styles.dishCard} ${styles.dishCardSalads}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/banquete" className={styles.dishCardLink}>
                    <h1>Банкетне меню</h1>
                  </NavLink>
                </span>
              </li>

              <li className={`${styles.dishCard} ${styles.dishCardSalads}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/fish" className={styles.dishCardLink}>
                    <h1>Риба</h1>
                  </NavLink>
                </span>
              </li>

              <li className={`${styles.dishCard} ${styles.dishCardSalads}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/main-dish" className={styles.dishCardLink}>
                    <h1>Основні страви</h1>
                  </NavLink>
                </span>
              </li>


              <li className={`${styles.dishCard} ${styles.dishCardSalads}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/side-dish" className={styles.dishCardLink}>
                    <h1>Гарнір</h1>
                  </NavLink>
                </span>
              </li>

              <li className={`${styles.dishCard} ${styles.dishCardSoups}`}>
                <span classame={styles.dishCardBox}> 
                  <NavLink to="/menu/soup" className={styles.dishCardLink}>
                    <h1>Супи</h1>
                  </NavLink>
                </span>
              </li>

            </ul>  
          </section>
        </CartProvider>
      </Route>

      <Route path="/menu/basket" component={Basket} /> 
      <Route path="/menu/barbeque" component={Barbeque} />
      <Route path="/menu/sauces" component={Sauces} />
      <Route path="/menu/cold-apetizers" component={ColdApetizers} />
      <Route path="/menu/hot-apetizers" component={HotApetizers} />
      <Route path="/menu/desserts" component={Desserts} />
      <Route path="/menu/alcoholic-cocktails" component={AlcoholicCocktails} />
      <Route path="/menu/mocktails" component={Mocktails} />
      <Route path="/menu/beverages" component={Beverages} />
      <Route path="/menu/hard-alkohol" component={HardAlkohol} />
      <Route path="/menu/banquete" component={Banquete} />
      <Route path="/menu/beer" component={Beer} /> 
      <Route path="/menu/pizza" component={Pizza} /> 
      <Route path="/menu/salads" component={Salads} /> 
      <Route path="/menu/wines" component={Wines} /> 
      <Route path="/menu/fish" component={Fish} /> 
      <Route path="/menu/hot-drinks" component={HotDrinks} />  
      <Route path="/menu/main-dish" component={MainDish} /> 
      <Route path="/menu/side-dish" component={SideDish} /> 
      <Route path="/menu/soup" component={Soup} /> 
      <Route path="/menu/set-meals" component={SetMeals} /> 
      </Switch>
      </div>
     </div>
   </div>
  );
};

export default MenuPage; 

