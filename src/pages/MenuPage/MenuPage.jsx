// MenuPage.jsx

import React, { useContext, useEffect } from "react";
import { NavLink, Route, Switch, useLocation } from "react-router-dom"; 

import { CartProvider, CartContext } from "components/CartProvider/CartProvider";
import { ReactComponent as BasketIcon } from 'images/delivery.svg';

import Basket from "components/Basket/Basket";

import Pizza from "components/MenuComponents/Pizza";

import HotDrinks from "components/MenuComponents/HotDrinks";
import hotDrinkCardImage from 'images/hotDrinkCard.svg';

import ColdApetizers from "components/MenuComponents/ColdApetizers";
import HotApetizers from "components/MenuComponents/HotApetizers";

import Beverages from "components/MenuComponents/Beverages";
import beveragesCardImage from 'images/beveragesCard.svg';

import AlcoholicCocktails from "components/MenuComponents/AlcoholicCocktails";
import CocktailsCardImage from 'images/cocktailsCard.svg';

import Desserts from "components/MenuComponents/Desserts";
import dessertCardImage from 'images/dessertCard.svg';
 
import Mocktails from "components/MenuComponents/Mocktails";
import mocktailsCardImage from 'images/mocktailsCard.svg';

import Meat from "components/MenuComponents/Meat";
import meatCardImage from 'images/meatCard.svg';
import Sauces from "components/MenuComponents/Sauces";
import saucesCardImage from 'images/saucesCard.svg';

import HardAlcohol from "components/MenuComponents/HardAlkohol";
import alcoholCardImage from 'images/alcoholCard.svg';

import Wines from "components/MenuComponents/Wines";
import wineCardImage from 'images/wineCard.svg';

import Beer from "components/MenuComponents/Beer";
import beerCardImage from 'images/beerCard.svg';

import Salads from "components/MenuComponents/Salads";
import saladCardImage from 'images/saladCard.svg';
import Banquete from "components/MenuComponents/AddButton/Banquete";
import Fish from "components/MenuComponents/Fish";
import fishCardImage from 'images/fishCard.svg';

import MainDish from "components/MenuComponents/MainDish";

import SideDish from "components/MenuComponents/SideDish";
// import sideDishCardImage from 'images/sideDishCard.svg';


import Soup from "components/MenuComponents/Soup";
import soupCardImage from 'images/soupCard.svg';

import Lunch from "components/MenuComponents/Lunch";
import lunchCardImage from 'images/lunchCard.svg';
import styles from 'pages/MenuPage/MenuPage.module.css';





export const MenuPage = () => {
  const location = useLocation();
  const { cartItems } = useContext(CartContext); 



  useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.fadeIn}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1'; 
      }, 1 * index); 
    });
  }, [location.pathname]);
  
  
  return (
   <div className={styles.menuPage}>
     
     <div className={styles.menuPageContainer}>
      <div className={styles.menuPageBox}>
     <Switch>
     
        <Route path="/menu" exact> 
            <h1 className={styles.menuTitle}>Меню</h1>
            
              <div className={styles.toBasketButton}>
                <NavLink to="/menu/basket" className={styles.toBasketLink}>
                  <BasketIcon className={`${styles.basketIcon} ${cartItems.length > 0 ? styles.nonEmpty : ''}`}/>
                  {cartItems.length > 0 && <span className={styles.basketBadge}>✓</span>}
                  <h3 className={styles.toBasketDescription}>Доставка</h3>
                </NavLink>
              </div>

            <CartProvider>
             <section className={styles.menuSection}>
             <div className={styles.menuBasketList}>
              
             </div>

            <ul className={styles.dishList}>

              <li className={styles.dishCard}>
                  <NavLink to="/menu/meat" className={styles.dishCardLink}>
                  
                    <span className={styles.dishCardImg}>
                    <img
                        className={styles.dishCardImage}
                        src={meatCardImage} 
                        alt="М'ясо"
                        // width="125"
                        // height="125"
                      />
                    </span>
                      <h3 className={styles.dishCardDescription}>
                        М'ясо
                      </h3>
                  
                  </NavLink>
                </li>
               
              <li className={styles.dishCard}>
                  <NavLink to="/menu/fish" className={styles.dishCardLink}>
                  
                    <span className={styles.dishCardImg}>
                    <img
                        className={styles.dishCardImage}
                        src={fishCardImage} 
                        alt="Риба"
                        // width="125"
                        // height="125"
                      />
                    </span>
                      <h3 className={styles.dishCardDescription}>
                        Риба
                      </h3>
                  
                  </NavLink>
                </li>
               
               
               <li className={styles.dishCard}>
                  <NavLink to="/menu/main-dish" className={styles.dishCardLink}>
                  
                    <span className={styles.dishCardImg}>
                    <img
                        className={styles.dishCardImage}
                        src={lunchCardImage} 
                        alt="Основні страви"
                        // width="125"
                        // height="125"
                      />
                    </span>
                      <h3 className={styles.dishCardDescription}>
                      Основні страви
                      </h3>
                  
                  </NavLink>
                </li>

               <li className={styles.dishCard}>
                  <NavLink to="/menu/side-dish" className={styles.dishCardLink}>
                  
                    <span className={styles.dishCardImg}>
                    <img
                        className={styles.dishCardImage}
                        src={saladCardImage} 
                        alt="Гарнір"
                        // width="125"
                        // height="125"
                      />
                    </span>
                      <h3 className={styles.dishCardDescription}>
                      Гарніри
                      </h3>
                  
                  </NavLink>
                </li>

               <li className={styles.dishCard}>
                  <NavLink to="/menu/hot-apetizers" className={styles.dishCardLink}>
                  
                    <span className={styles.dishCardImg}>
                    <img
                        className={styles.dishCardImage}
                        src={lunchCardImage} 
                        alt="Гарячі закуски"
                        // width="125"
                        // height="125"
                      />
                    </span>
                      <h3 className={styles.dishCardDescription}>
                      Гарячі закуски
                      </h3>
                  
                  </NavLink>
                </li>
              <li className={styles.dishCard}>
                  <NavLink to="/menu/cold-apetizers" className={styles.dishCardLink}>
                  
                    <span className={styles.dishCardImg}>
                    <img
                        className={styles.dishCardImage}
                        src={lunchCardImage} 
                        alt="Холодні закуски"
                        // width="125"
                        // height="125"
                      />
                    </span>
                      <h3 className={styles.dishCardDescription}>
                      Холодні закуски
                      </h3>
                  
                  </NavLink>
                </li>

              <li className={styles.dishCard}>
                  <NavLink to="/menu/salads" className={styles.dishCardLink}>
                  
                    <span className={styles.dishCardImg}>
                    <img
                        className={styles.dishCardImage}
                        src={saladCardImage} 
                        alt="Салати"
                        // width="125"
                        // height="125"
                      />
                    </span>
                      <h3 className={styles.dishCardDescription}>
                      Салати
                      </h3>
                  
                  </NavLink>
                </li>

              <li className={styles.dishCard}>
                <NavLink to="/menu/sauces" className={styles.dishCardLink}>
                
                   <span className={styles.dishCardImg}>
                   <img
                      className={styles.dishCardImage}
                      src={saucesCardImage} 
                      alt="Соуси"
                      // width="125"
                      // height="125"
                    
                    />
                   </span>
                    <h3 className={styles.dishCardDescription}>
                      Соуси
                    </h3>
                 
                </NavLink>
              </li>
              <li className={styles.dishCard}>
                <NavLink to="/menu/pizza" className={styles.dishCardLink}>
                
                   <span className={styles.dishCardImg}>
                   <img
                      className={styles.dishCardImage}
                      src={lunchCardImage} 
                      alt="Випічка"
                      // width="125"
                      // height="125"
                    />
                   </span>
                    <h3 className={styles.dishCardDescription}>
                      Випічка
                    </h3>
                 
                </NavLink>
              </li>
          
              <li className={styles.dishCard}>
                  <NavLink to="/menu/soup" className={styles.dishCardLink}>
                  
                    <span className={styles.dishCardImg}>
                    <img
                        className={styles.dishCardImage}
                        src={soupCardImage} 
                        alt="Суп"
                        // width="125"
                        // height="135"
                      />
                    </span>
                      <h3 className={styles.dishCardDescription}>
                      Супи
                      </h3>
                  
                  </NavLink>
                </li>
            
                <li className={styles.dishCard}>
                <NavLink to="/menu/lunch" className={styles.dishCardLink}>
                
                   <span className={styles.dishCardImg}>
                   <img
                      className={styles.dishCardImage}
                      src={lunchCardImage} 
                      alt="Соуси"
                      // width="125"
                      // height="125"
                    />
                   </span>
                    <h3 className={styles.dishCardDescription}>
                      Бізнес ланчі
                    </h3>
                 
                </NavLink>
              </li>

               <li className={styles.dishCard}>
                <div className={styles.dishCardBox}>
                <NavLink to="/menu/banquete" className={styles.dishCardLink}>
                
                <span className={styles.dishCardImg}>
                  <img
                    className={styles.dishCardImage}
                    src={alcoholCardImage} 
                    alt="Банкетне меню"
                    // width="125"
                    // height="125"
                  />
                </span>

                <h3 className={styles.dishCardDescription}>
                Банкетне меню
                </h3>
              
                </NavLink>
                </div>
              </li>

              <li className={styles.dishCard}>
                <NavLink to="/menu/beverages" className={styles.dishCardLink}>
                
                   <span className={styles.dishCardImg}>
                   <img
                      className={styles.dishCardImage}
                      src={beveragesCardImage} 
                      alt="Безалкогольні напої"
                      // width="125"
                      // height="125"
                    />
                   </span>
                    <h3 className={styles.dishCardDescription}>
                    Безалкогольні напої
                    </h3>
                 
                </NavLink>
              </li>

               <li className={styles.dishCard}>
                <NavLink to="/menu/mocktails" className={styles.dishCardLink}>
                
                   <span className={styles.dishCardImg}>
                   <img
                      className={styles.dishCardImage}
                      src={mocktailsCardImage} 
                      alt="Безалкогольні коктейлі"
                      // width="125"
                      // height="125"
                    />
                   </span>
                    <h3 className={styles.dishCardDescription}>
                    Безалкогольні коктейлі
                    </h3>
                 
                </NavLink>
              </li>

              <li className={styles.dishCard}>
                <NavLink to="/menu/hot-drinks" className={styles.dishCardLink}>
                
                   <span className={styles.dishCardImg}>
                   <img
                      className={styles.dishCardImage}
                      src={hotDrinkCardImage} 
                      alt="Гарячі напої"
                      // width="145"
                      // height="145"
                    />
                   </span>
                    <h3 className={styles.dishCardDescription}>
                    Гарячі напої
                    </h3>
                 
                </NavLink>
              </li>

              <li className={styles.dishCard}>
                <NavLink to="/menu/desserts" className={styles.dishCardLink}>
                
                   <span className={styles.dishCardImg}>
                   <img
                      className={styles.dishCardImage}
                      src={dessertCardImage} 
                      alt="Десерт"
                      // width="155"
                      // height="155"
                    />
                   </span>
                    <h3 className={styles.dishCardDescription}>
                      Десерти
                    </h3>
                 
                </NavLink>
              </li>

              <li className={styles.dishCard}>
                <div className={styles.dishCardBox}>
                <NavLink to="/menu/hard-alcohol" className={styles.dishCardLink}>
                
                <span className={styles.dishCardImg}>
                  <img
                    className={styles.dishCardImage}
                    src={alcoholCardImage} 
                    alt="Соуси"
                    // width="125"
                    // height="125"
                  />
                </span>

                <h3 className={styles.dishCardDescription}>
                  Міцний алкоголь
                </h3>
              
                </NavLink>
                </div>
              </li>

           

                <li className={styles.dishCard}>
                <div className={styles.dishCardBox}>
                <NavLink to="/menu/alcoholic-cocktails" className={styles.dishCardLink}>
                
                <span className={styles.dishCardImg}>
                  <img
                    className={styles.dishCardImage}
                    src={CocktailsCardImage} 
                    alt="Алкогольні коктейлі"
                    // width="125"
                    // height="125"
                  />
                </span>

                <h3 className={styles.dishCardDescription}>
                Алкогольні коктейлі
                </h3>
              
                </NavLink>
                </div>
              </li>
            
              <li className={styles.dishCard}>
                <NavLink to="/menu/wines" className={styles.dishCardLink}>
                
                   <span className={styles.dishCardImg}>
                   <img
                      className={styles.dishCardImage}
                      src={wineCardImage} 
                      alt="Вино"
                      // width="125"
                      // height="125"
                    />
                   </span>
                    <h3 className={styles.dishCardDescription}>
                    Вино
                    </h3>
                 
                </NavLink>
              </li>

              <li className={styles.dishCard}>
                <NavLink to="/menu/beer" className={styles.dishCardLink}>
                
                   <span className={styles.dishCardImg}>
                   <img
                      className={styles.dishCardImage}
                      src={beerCardImage} 
                      alt="Пиво"
                      // width="125"
                      // height="125"
                    />
                   </span>
                    <h3 className={styles.dishCardDescription}>
                      Пиво
                    </h3>
                 
                </NavLink>
              </li>

            </ul>  
          </section>
        </CartProvider>
      </Route>

      <Route path="/menu/basket" component={Basket} /> 
      <Route path="/menu/meat" component={Meat} />
      <Route path="/menu/sauces" component={Sauces} />
      <Route path="/menu/cold-apetizers" component={ColdApetizers} />
      <Route path="/menu/hot-apetizers" component={HotApetizers} />
      <Route path="/menu/desserts" component={Desserts} />
      <Route path="/menu/alcoholic-cocktails" component={AlcoholicCocktails} />
      <Route path="/menu/mocktails" component={Mocktails} />
      <Route path="/menu/beverages" component={Beverages} />
      <Route path="/menu/hard-alcohol" component={HardAlcohol} />
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
      <Route path="/menu/lunch" component={Lunch} /> 
      </Switch>
      </div>
     </div>
   </div>
  );
};

export default MenuPage; 

