// Footer.jsx

import React from 'react';

import { Logo } from 'components/Logo/Logo';
import styles from '../Footer/Footer.module.css';

import { ReactComponent as FacebookIcon } from 'images/facebookIcon.svg';
import { ReactComponent as GmailIcon } from 'images/mailIcon.svg';
import { ReactComponent as InstagramIcon } from 'images/instagramIcon.svg';

export const Footer = ({ customLinks }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.borderDecorative}></div>
      <div className={styles.footerContainer}>
        <span className={styles.logoFooter}>
          <Logo className={styles.footerLogo}/>
        </span>
       
        {customLinks ? (
          <ul className={styles.footerSocial}>
            {customLinks}
          </ul>
        ) : (
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
        )}
       
        <h5 className={styles.footerAllRights}>@Всі права захищені</h5>
      </div>
    </div>
  );
};

export default Footer;
