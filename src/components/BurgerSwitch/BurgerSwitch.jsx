// BurgerSwitch.jsx

import React from 'react';
import logo from 'images/burgerSwitch.svg';
import styles from 'components/BurgerSwitch/BurgerSwitch.module.css';


export const BurgerSwitch = () => {
 return <img className={styles.burgerSwitch} src={logo} alt="burgerSwitch"  />;
};

export default BurgerSwitch;