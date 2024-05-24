// Logo.jsx

import React from 'react';
// import logo from 'images/yardBakuLogo.svg';
import logo from 'images/SideLogoBY.svg';
import styles from 'components/Logo/Logo.module.css';


export const Logo = () => {
 return <img className={styles.logo} src={logo} alt="Logo"  />;
};

export default Logo;