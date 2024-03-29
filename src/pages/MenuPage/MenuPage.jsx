// MenuPage.jsx

import React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import Pipizza from 'components/MenuComponents/Pipizza/Pipizza';
import Pizza from "components/MenuComponents/Pizza/Pizza";
import Basket from 'components/Basket/Basket';

import PizzaImage from 'images/pizza.png';



const MenuPage = () => {
  return (
   <div>
     <Switch>
      {/* ПОСИЛАННЯ */}
        <Route path="/menu" exact> 
          <ul>
              <li>
                <NavLink to="/menu/pipizza">
                <img src={PizzaImage} alt="Pipizza" height={150}/>
                 <h3>Pipizzza</h3>
                  </NavLink>
              </li> 
              <li>
                <NavLink to="/menu/pizza">Pizza</NavLink>
              </li> 
              <li>
                <NavLink to="/menu/basket">Basket</NavLink>
              </li> 
          </ul>
        </Route>

      {/* МАРШРУТИ */}
        <Route path="/menu/pipizza" component={Pipizza} /> 
        <Route path="/menu/pizza" component={Pizza} /> 
        <Route path="/menu/basket" component={Basket} /> 
      </Switch>
   </div>
  );
};

export default MenuPage;

