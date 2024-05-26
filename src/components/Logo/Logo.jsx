// Logo.jsx

import React from 'react';

import logo from 'images/MainLogoBY22.svg';
import styles from 'components/Logo/Logo.module.css';


export const Logo = () => {
 return <img className={styles.logo} src={logo} alt="Logo"  />;
};

export default Logo;