import React from "react";
import { NavLink, Route } from "react-router-dom";

import styles from '../AboutPage/AboutPage.module.css';

import BarbequeMenu from "components/MenuComponents/BarbequeMenu/BarbequeMenu";
import Salads from "components/MenuComponents/Salads/Salads";
import CoffeeMenu from "components/MenuComponents/CoffeeMenu/CoffeeMenu";
import Mocktails from "components/MenuComponents/Mocktails/Mocktails";
import HotApetizers from "components/MenuComponents/HotApetizers/HotApetizers";
import OrderReceipt from "components/MenuComponents/OrderReceipt/OrderReceipt";

export const AboutPage = () => {
  return (
    <div>
      <ul className={styles.dishList}>
      <li>
          <NavLink to="/about/order">Order</NavLink>
        </li>
      <li>
          <NavLink to="/about/barbeque">Barbeque</NavLink>
        </li>
        
        <li>
          <NavLink to="/about/salads">Salads</NavLink>
        </li>
        <li>
          <NavLink to="/about/coffee">Coffee</NavLink>
        </li>
        <li>
          <NavLink to="/about/mocktails">Mocktails</NavLink>
        </li>
        <li>
          <NavLink to="/about/hot-apetizers">HotApetizers</NavLink>
        </li>
        
        <li>
          <NavLink to="/about/barbeque">Barbeque</NavLink>
        </li>
        <li>
          <NavLink to="/about/salads">Salads</NavLink>
        </li>
        
      </ul>

      <Route path="/about/order" component={OrderReceipt} />
      <Route path="/about/barbeque" component={BarbequeMenu} />
      <Route path="/about/salads" component={Salads} />
      <Route path="/about/coffee" component={CoffeeMenu} />
      <Route path="/about/mocktails" component={Mocktails} />
      <Route path="/about/hot-apetizers" component={HotApetizers} />

      
    </div>
  );
};

export default AboutPage;
