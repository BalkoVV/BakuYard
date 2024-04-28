// LogoBen.jsx

import React from 'react';
// import logoben from 'images/t1.svg';
import logoben from 'images/t7.svg';
import styles from 'components/LogoBen/LogoBen.module.css';


export const LogoBen = () => {
 return <img className={styles.logoben} src={logoben} alt="Logo"  />;
};

export default LogoBen;