// Footer.jsx

import React from 'react';

import { Logo } from 'components/Logo/Logo';
import styles from '../Footer/Footer.module.css';

import { ReactComponent as FacebookIcon } from 'images/facebook.svg';
import { ReactComponent as GmailIcon } from 'images/gmail.svg';
import { ReactComponent as InstagramIcon } from 'images/instagram.svg';

export const Footer = () => {
  return (
    <div  className={styles.footer}>
      <div className={styles.footerContainer}>
      <span className={styles.logoFooter}>
      <Logo />
      </span>
       
       <ul className={styles.footerSocial}>
       <li>
          <InstagramIcon />
        </li>
        <li>
          <FacebookIcon />
        </li>
        <li>
          <GmailIcon />
        </li>
        
       </ul>
       <h5  className={styles.footerRights}>@Всі права захищені</h5>
      </div>
        
    </div>
  );
};

export default Footer;