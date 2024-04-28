import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as ToMenuIcon } from 'images/deliveryMoto.svg';

import styles from 'components/ToMenuButton/ToMenuButton.module.css';

export const ToMenuButton = () => {
   return (
      <div className={styles.toMenuButton}>
       <NavLink to="/menu" className={styles.toMenuLink}>
       <ToMenuIcon className={styles.toMenuIcon}/>
         <h1 className={styles.toMenuDescription}>до Меню</h1>
       </NavLink>
   </div>
      )
   
}

export default ToMenuButton;