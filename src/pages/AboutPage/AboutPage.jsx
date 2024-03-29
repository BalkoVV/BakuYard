// AboutPage.jsx
import React from "react";
import { NavLink, Route } from "react-router-dom";
import Basket from "components/Basket/Basket";
import { CartProvider } from "components/CartProvider/CartProvider";
import Pizza from 'components/MenuComponents/Pizza/Pizza';
import Pipizza from 'components/MenuComponents/Pipizza/Pipizza';
import styles from '../AboutPage/AboutPage.module.css';


const AboutPage = () => {
  return (
    <CartProvider>
      <div>
        <ul className={styles.dishList}>
          <li>
            <NavLink to="/about/pizza">Pizza</NavLink>
          </li>
          <li>
            <NavLink to="/about/pipizza">Pipizza</NavLink>
          </li>
          <li>
            <NavLink to="/about/basket">Basket</NavLink>
          </li>
        </ul>

        
        <Route path="/about/basket" component={Basket} />
        <Route path="/about/pizza" component={Pizza} />
        <Route path="/about/pipizza" component={Pipizza} />
       
      </div>
    </CartProvider>
  );
};

export default AboutPage;
