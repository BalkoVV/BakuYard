// InstagramIcon.jsx

import React from 'react';
import instagramIcon from 'images/instagram4.svg';
import styles from 'components/Logo/Logo.module.css';


export const InstagramIcon = () => {
 return <img className={styles.instagramIcon} src={instagramIcon} alt="instagramIcon"  />;
};

export default InstagramIcon;