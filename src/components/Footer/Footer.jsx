// Footer.jsx

import React from 'react';

import { Logo } from 'components/Logo/Logo';
import styles from '../Footer/Footer.module.css';

export const Footer = () => {
  return (
    <div  className={styles.footer}>
      <div className={styles.footerContainer}>
      <span className={styles.logoFooter}>
      <Logo />
      </span>
      </div>
        
    </div>
  );
};

export default Footer;