// MenuPage.jsx

import React, { useContext, useEffect } from "react";
import { NavLink, Route, Switch, useLocation } from "react-router-dom"; 

import { CartProvider, CartContext } from "components/CartProvider/CartProvider";
import { ReactComponent as BasketIcon } from 'images/closhe.svg';

import Basket from "components/Basket/Basket";

import Pizza from "components/MenuComponents/Pizza";
import pizzaCardImage from 'images/pizzaCard.svg';

import HotDrinks from "components/MenuComponents/HotDrinks";
import hotDrinkCardImage from 'images/hotDrinkCard.svg';

import ColdApetizers from "components/MenuComponents/ColdApetizers";
import coldAppetizerCardImage from 'images/coldAppetizerCard.svg';

import HotApetizers from "components/MenuComponents/HotApetizers";
import hotAppetizerCardImage from 'images/hotAppetizerCard.svg';

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

import Banquete from "components/MenuComponents/Banquete";
import banqueteCardImage from 'images/banqueteCard.svg';

import Fish from "components/MenuComponents/Fish";
import fishCardImage from 'images/fishCard.svg';

import MainDish from "components/MenuComponents/MainDish";
import mainDishCardImage from 'images/mainDishCard.svg';

import SideDish from "components/MenuComponents/SideDish";
import sideDishCardImage from 'images/sideDishCard.svg';


import Soup from "components/MenuComponents/Soup";
import soupCardImage from 'images/soupCard.svg';

import Lunch from "components/MenuComponents/Lunch";
import lunchCardImage from 'images/lunchCard.svg';

import styles from 'pages/MenuPage/MenuPage.module.css';


export const MenuPage = () => {
  const location = useLocation();
  const { cartItems } = useContext(CartContext); 

  useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.fadeOut}`);
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
                      
                      />
                    </span>
                    <span className={styles.dishCardDescriptionBox}>
                   <h3 className={styles.dishCardDescriptionTop}>
                      Барбекю
                    </h3>
                   
                   </span>
                  
                  </NavLink>
                </li>
               
              <li className={styles.dishCard}>
                  <NavLink to="/menu/fish" className={styles.dishCardLink}>
                  
                    <span className={styles.dishCardImg}>
                    <img
                        className={styles.dishCardImage}
                        src={fishCardImage} 
                        alt="Риба"
                       
                      />
                    </span>
                    <span className={styles.dishCardDescriptionBox}>
                   <h3 className={styles.dishCardDescriptionTop}>
                      Риба
                    </h3>
                   
                   </span>
                  
                  </NavLink>
                </li>
               
               
               <li className={styles.dishCard}>
                  <NavLink to="/menu/main-dish" className={styles.dishCardLink}>
                  
                    <span className={styles.dishCardImg}>
                    <img
                        className={styles.dishCardImage}
                        src={mainDishCardImage} 
                        alt="Основні страви"
                      
                      />
                    </span>
                    <span className={styles.dishCardDescriptionBox}>
                   <h3 className={styles.dishCardDescriptionTop}>
                      Основні 
                    </h3>
                    <h3 className={styles.dishCardDescriptionBottom}>
                       страви
                    </h3>
                   </span>
                  
                  </NavLink>
                </li>

               <li className={styles.dishCard}>
                  <NavLink to="/menu/side-dish" className={styles.dishCardLink}>
                  
                    <span className={styles.dishCardImg}>
                    <img
                        className={styles.dishCardImage}
                        src={sideDishCardImage} 
                        alt="Гарнір"
                      
                      />
                    </span>
                    <span className={styles.dishCardDescriptionBox}>
                   <h3 className={styles.dishCardDescriptionTop}>
                      Гарніри 
                    </h3>
                   </span>
                  
                  </NavLink>
                </li>

               <li className={styles.dishCard}>
                  <NavLink to="/menu/hot-apetizers" className={styles.dishCardLink}>
                  
                    <span className={styles.dishCardImg}>
                    <img
                        className={styles.dishCardImage}
                        src={hotAppetizerCardImage} 
                        alt="Гарячі закуски"
                     
                      />
                    </span>
                    <span className={styles.dishCardDescriptionBox}>
                   <h3 className={styles.dishCardDescriptionTop}>
                      Гарячі 
                    </h3>
                    <h3 className={styles.dishCardDescriptionBottom}>
                       закуски
                    </h3>
                   </span>
                  
                  </NavLink>
                </li>
              <li className={styles.dishCard}>
                  <NavLink to="/menu/cold-apetizers" className={styles.dishCardLink}>
                  
                    <span className={styles.dishCardImg}>
                    <img
                        className={styles.dishCardImage}
                        src={coldAppetizerCardImage} 
                        alt="Холодні закуски"
                       
                      />
                    </span>
                    <span className={styles.dishCardDescriptionBox}>
                   <h3 className={styles.dishCardDescriptionTop}>
                      Холодні 
                    </h3>
                    <h3 className={styles.dishCardDescriptionBottom}>
                       закуски
                    </h3>
                   </span>
                  
                  </NavLink>
                </li>

              <li className={styles.dishCard}>
                  <NavLink to="/menu/salads" className={styles.dishCardLink}>
                  
                    <span className={styles.dishCardImg}>
                    <img
                        className={styles.dishCardImage}
                        src={saladCardImage} 
                        alt="Салати"
                       
                      />
                    </span>
                    <span className={styles.dishCardDescriptionBox}>
                   <h3 className={styles.dishCardDescriptionTop}>
                      Салати 
                    </h3>
                    
                   </span>
                  
                  </NavLink>
                </li>

              <li className={styles.dishCard}>
                <NavLink to="/menu/sauces" className={styles.dishCardLink}>
                
                   <span className={styles.dishCardImg}>
                   <img
                      className={styles.dishCardImage}
                      src={saucesCardImage} 
                      alt="Соуси"
                    
                    
                    />
                   </span>
                   <span className={styles.dishCardDescriptionBox}>
                   <h3 className={styles.dishCardDescriptionTop}>
                      Соуси 
                    </h3>
                    
                   </span>
                 
                </NavLink>
              </li>
              <li className={styles.dishCard}>
                <NavLink to="/menu/pizza" className={styles.dishCardLink}>
                
                   <span className={styles.dishCardImg}>
                   <img
                      className={styles.dishCardImage}
                      src={pizzaCardImage} 
                      alt="Випічка"
                    
                    />
                   </span>
             
                   <span className={styles.dishCardDescriptionBox}>
                   <h3 className={styles.dishCardDescriptionTop}>
                      з Печі
                    </h3>
                   
                   </span>
                    
                  
                 
                </NavLink>
              </li>
          
              <li className={styles.dishCard}>
                  <NavLink to="/menu/soup" className={styles.dishCardLink}>
                  
                    <span className={styles.dishCardImg}>
                    <img
                        className={styles.dishCardImage}
                        src={soupCardImage} 
                        alt="Суп"
                      
                      />
                    </span>
                    <span className={styles.dishCardDescriptionBox}>
                   <h3 className={styles.dishCardDescriptionTop}>
                      Супи 
                    </h3>
                   
                   </span>
                  
                  </NavLink>
                </li>
            
                <li className={styles.dishCard}>
                <NavLink to="/menu/lunch" className={styles.dishCardLink}>
                
                   <span className={styles.dishCardImg}>
                   <img
                      className={styles.dishCardImage}
                      src={lunchCardImage} 
                      alt="Соуси"
                   
                    />
                   </span>

                  
                   <span className={styles.dishCardDescriptionBox}>
                   <h3 className={styles.dishCardDescriptionTop}>
                       Бізнес
                    </h3>
                    <h3 className={styles.dishCardDescriptionBottom}>
                      ланчі
                    </h3>
                   </span>
                   
                 
                </NavLink>
              </li>

               <li className={styles.dishCard}>
                <NavLink to="/menu/banquete" className={styles.dishCardLink}>
                
                <span className={styles.dishCardImg}>
                  <img
                    className={styles.dishCardImage}
                    src={banqueteCardImage} 
                    alt="Банкетне меню"
                  
                  />
                </span>
               

                <span className={styles.dishCardDescriptionBox}>
                   <h3 className={styles.dishCardDescriptionTop}>
                       Банкетне
                    </h3>
                    <h3 className={styles.dishCardDescriptionBottom}>
                      меню
                    </h3>
                   </span>
              
                </NavLink>
             
              </li>

              <li className={styles.dishCard}>
                <NavLink to="/menu/beverages" className={styles.dishCardLink}>
                
                   <span className={styles.dishCardImg}>
                   <img
                      className={styles.dishCardImage}
                      src={beveragesCardImage} 
                      alt="Безалкогольні напої"
                    
                    />
                   </span>
                   <span className={styles.dishCardDescriptionBox}>
                   <h3 className={styles.dishCardDescriptionTop}>
                       Безалкогольні
                    </h3>
                    <h3 className={styles.dishCardDescriptionBottom}>
                      напої
                    </h3>
                   </span>
                 
                </NavLink>
              </li>

               <li className={styles.dishCard}>
                <NavLink to="/menu/mocktails" className={styles.dishCardLink}>
                
                   <span className={styles.dishCardImg}>
                   <img
                      className={styles.dishCardImage}
                      src={mocktailsCardImage} 
                      alt="Безалкогольні коктейлі"
                     
                    />
                   </span>
                   <span className={styles.dishCardDescriptionBox}>
                   <h3 className={styles.dishCardDescriptionTop}>
                       Безалкогольні
                    </h3>
                    <h3 className={styles.dishCardDescriptionBottom}>
                      коктейлі
                    </h3>
                   </span>
                 
                </NavLink>
              </li>

              <li className={styles.dishCard}>
                <NavLink to="/menu/hot-drinks" className={styles.dishCardLink}>
                
                   <span className={styles.dishCardImg}>
                   <img
                      className={styles.dishCardImage}
                      src={hotDrinkCardImage} 
                      alt="Гарячі напої"
                      
                    />
                   </span>
                   <span className={styles.dishCardDescriptionBox}>
                   <h3 className={styles.dishCardDescriptionTop}>
                       Гарячі
                    </h3>
                    <h3 className={styles.dishCardDescriptionBottom}>
                      напої
                    </h3>
                   </span>
                 
                </NavLink>
              </li>

              <li className={styles.dishCard}>
                <NavLink to="/menu/desserts" className={styles.dishCardLink}>
                
                   <span className={styles.dishCardImg}>
                   <img
                      className={styles.dishCardImage}
                      src={dessertCardImage} 
                      alt="Десерт"
                
                    />
                   </span>
                   <span className={styles.dishCardDescriptionBox}>
                   <h3 className={styles.dishCardDescriptionTop}>
                       Десерти
                    </h3>
                    
                   </span>
                 
                </NavLink>
              </li>

              <li className={styles.dishCard}>
                <NavLink to="/menu/hard-alcohol" className={styles.dishCardLink}>
                
                <span className={styles.dishCardImg}>
                  <img
                    className={styles.dishCardImage}
                    src={alcoholCardImage} 
                    alt="Соуси"
                  
                  />
                </span>

                <span className={styles.dishCardDescriptionBox}>
                   <h3 className={styles.dishCardDescriptionTop}>
                       Міцний
                    </h3>
                    <h3 className={styles.dishCardDescriptionBottom}>
                      алкоголь
                    </h3>
                   </span>
              
                </NavLink>
               
              </li>

           

                <li className={styles.dishCard}>
                <NavLink to="/menu/alcoholic-cocktails" 
                        className={styles.dishCardLink}>
                
                <span className={styles.dishCardImg}>
                  <img
                    className={styles.dishCardImage}
                    src={CocktailsCardImage} 
                    alt="Алкогольні коктейлі"
                  />
                </span>

                <span className={styles.dishCardDescriptionBox}>
                   <h3 className={styles.dishCardDescriptionTop}>
                       Алкогольні
                    </h3>
                    <h3 className={styles.dishCardDescriptionBottom}>
                      коктейлі
                    </h3>
                   </span>
              
                </NavLink>
                
              </li>
            
              <li className={styles.dishCard}>
                <NavLink to="/menu/wines" className={styles.dishCardLink}>
                
                   <span className={styles.dishCardImg}>
                   <img
                      className={styles.dishCardImage}
                      src={wineCardImage} 
                      alt="Вино"
                    />
                   </span>
                   <span className={styles.dishCardDescriptionBox}>
                   <h3 className={styles.dishCardDescriptionTop}>
                       Вино
                    </h3>
                   
                   </span>
                 
                </NavLink>
              </li>

              <li className={styles.dishCard}>
                <NavLink to="/menu/beer" className={styles.dishCardLink}>
                
                   <span className={styles.dishCardImg}>
                   <img
                      className={styles.dishCardImage}
                      src={beerCardImage} 
                      alt="Пиво"
                     
                    />
                   </span>
                   <span className={styles.dishCardDescriptionBox}>
                   <h3 className={styles.dishCardDescriptionTop}>
                       Пиво
                    </h3>
                  
                   </span>
                 
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

