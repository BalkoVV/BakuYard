// BurgerLinesIcon.jsx

import React from 'react';
import burgerLinesIcon from 'images/mobileSwitch.svg';
import styles from 'components/Logo/Logo.module.css';


export const BurgerLinesIcon = () => {
 return <img className={styles.burgerLinesIcon} src={burgerLinesIcon} alt="burgerLinesIcon"  />;
};

export default BurgerLinesIcon;