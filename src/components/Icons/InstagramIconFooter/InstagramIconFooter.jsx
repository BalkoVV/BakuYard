// InstagramIconFooter.jsx

import React from 'react';
import instagramIconFooter from 'images/forFacebookFooter.svg';
import styles from 'components/Logo/Logo.module.css';


export const InstagramIconFooter = () => {
 return <img className={styles.instagramIconFooter} src={instagramIconFooter} alt="instagramIconFooter"  />;
};

export default InstagramIconFooter;