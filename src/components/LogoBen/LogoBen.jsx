// LogoBen.jsx

import React from 'react';
import logoben from 'images/bhLogo.svg';
import styles from 'components/LogoBen/LogoBen.module.css';


export const LogoBen = () => {
 return <img className={styles.logoben} src={logoben} alt="Logo"  />;
};

export default LogoBen;