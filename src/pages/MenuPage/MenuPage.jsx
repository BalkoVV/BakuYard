// MenuPage.jsx

import React from "react";

// import { useEffect }  from 'react';
import { NavLink, Route, Switch } from "react-router-dom";
import Pipizza from 'components/MenuComponents/Pipizza/Pipizza';
import Pizza from "components/MenuComponents/Pizza/Pizza";

import styles from '../MenuPage/MenuPage.module.css';


// import PizzaImage from 'images/pizza.png';



const MenuPage = () => {

  // useEffect(() => {
  //   const contentElements = document.querySelectorAll(`.${styles.mainContent}`);
  //   contentElements.forEach((element, index) => {
  //     setTimeout(() => {
  //       element.style.opacity = '1'; 
  //     }, 80 * index); // Додаємо затримку в залежності від індексу компонента
  //   });
  // }, []);

  return (
   <div>
     <Switch>
      {/* ПОСИЛАННЯ */}
        <Route path="/menu" exact> 

        {/* <div className={`${styles.mainPageListItem} ${styles.mainContent}`}>
          <p>
            Бакінський Двір
            – місце де традиції сходяться з сучаснiстю, 
            тут аромати кухні розповідають власну історію. 
            У нас кожен стіл – це святковий захід, 
            а кожна страва – це шедевр майстра.
            Затишні зали, приватні бесідки та сонячна тераса чекають,  
            щоб стати свідками вашого найважливішого свята.
          </p>
        </div>   */}
          
           <ul  className={` ${styles.list} `}>
           <li  className={`${styles.mainPageListItem} ${styles.mainContent}`}>
              <div className={styles.featuresItem}>
                <NavLink to="/menu/pizza">Pizza</NavLink>
              </div>
            </li>

            <li  className={`${styles.mainPageListItem} ${styles.mainContent}`}>
              <div className={styles.featuresItem}>
            {/* <img src={PizzaImage} alt="Pipizza" height={70} width={70}/> */}
                <NavLink to="/menu/pipizza">Pipizza</NavLink>
              </div>
            </li>
            <li  className={`${styles.mainPageListItem} ${styles.mainContent}`}>
              <div className={styles.featuresItem}>
            {/* <img src={PizzaImage} alt="Pipizza" height={70} width={70}/> */}
                <NavLink to="/menu/pipizza">Pipizza</NavLink>
              </div>
            </li>
            <li  className={`${styles.mainPageListItem} ${styles.mainContent}`}>
              <div className={styles.featuresItem}>
            {/* <img src={PizzaImage} alt="Pipizza" height={70} width={70}/> */}
                <NavLink to="/menu/pipizza">Pipizza</NavLink>
              </div>
            </li>
            <li  className={`${styles.mainPageListItem} ${styles.mainContent}`}>
              <div className={styles.featuresItem}>
            {/* <img src={PizzaImage} alt="Pipizza" height={70} width={70}/> */}
                <NavLink to="/menu/pipizza">Pipizza</NavLink>
              </div>
            </li>
            <li  className={`${styles.mainPageListItem} ${styles.mainContent}`}>
              <div className={styles.featuresItem}>
            {/* <img src={PizzaImage} alt="Pipizza" height={70} width={70}/> */}
                <NavLink to="/menu/pipizza">Pipizza</NavLink>
              </div>
            </li>
            <li  className={`${styles.mainPageListItem} ${styles.mainContent}`}>
              <div className={styles.featuresItem}>
            {/* <img src={PizzaImage} alt="Pipizza" height={70} width={70}/> */}
                <NavLink to="/menu/pipizza">Pipizza</NavLink>
              </div>
            </li>
            <li  className={`${styles.mainPageListItem} ${styles.mainContent}`}>
              <div className={styles.featuresItem}>
            {/* <img src={PizzaImage} alt="Pipizza" height={70} width={70}/> */}
                <NavLink to="/menu/pipizza">Pipizza</NavLink>
              </div>
            </li>
            <li  className={`${styles.mainPageListItem} ${styles.mainContent}`}>
              <div className={styles.featuresItem}>
            {/* <img src={PizzaImage} alt="Pipizza" height={70} width={70}/> */}
                <NavLink to="/menu/pipizza">Pipizza</NavLink>
              </div>
            </li>
            <li  className={`${styles.mainPageListItem} ${styles.mainContent}`}>
              <div className={styles.featuresItem}>
            {/* <img src={PizzaImage} alt="Pipizza" height={70} width={70}/> */}
                <NavLink to="/menu/pipizza">Pipizza</NavLink>
              </div>
            </li>
           </ul>
           

        </Route>

      {/* МАРШРУТИ */}
        <Route path="/menu/pipizza" component={Pipizza} /> 
        <Route path="/menu/pizza" component={Pizza} /> 
       
      </Switch>
   </div>
  );
};

export default MenuPage;

