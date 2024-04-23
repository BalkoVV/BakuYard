// FacebookIcon.jsx

import React from 'react';
import facebookIcon from 'images/facebook.svg';
import styles from 'components/Logo/Logo.module.css';


export const FacebookIcon = () => {
 return <img className={styles.facebookIcon} src={facebookIcon} alt="facebookIcon"  />;
};

export default FacebookIcon;