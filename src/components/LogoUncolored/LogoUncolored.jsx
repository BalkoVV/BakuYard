// LogoUncolored.jsx

import React from 'react';

import logoUncolored from 'images/MainLogoBY2Uncolored.svg';
import styles from 'components/LogoUncolored/LogoUncolored.module.css';


export const LogoUncolored = () => {
 return <img className={styles.logoUncolored} src={logoUncolored} alt="LogoUncolored"  />;
};

export default LogoUncolored;