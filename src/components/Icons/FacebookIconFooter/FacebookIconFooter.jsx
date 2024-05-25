// FacebookIconFooter.jsx

import React from 'react';
import facebookIconFooter from 'images/forFacebookFooter.svg';
import styles from 'components/Logo/Logo.module.css';


export const FacebookIconFooter = () => {
 return <img className={styles.facebookIconFooter} src={facebookIconFooter} alt="facebookIconFooter"  />;
};

export default FacebookIconFooter;