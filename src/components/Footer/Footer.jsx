// Footer.jsx

import React from 'react';

import { Logo } from 'components/Logo/Logo';
import { InstagramIcon } from 'components/Icons/InstagramIcon/InstagramIcon';
import { FacebookIcon } from 'components/Icons/FacebookIcon/FacebookIcon';
import { MailIcon } from 'components/Icons/MailIcon/MailIcon';
import styles from '../Footer/Footer.module.css';

// import { ReactComponent as FacebookIcon } from 'images/facebookIcon.svg';
// import { ReactComponent as GmailIcon } from 'images/mailIcon.svg';


export const Footer = ({ customLinks }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div  className={styles.footerBox}>
        {/* <span className={styles.logoFooter}>
          
          <span className={styles.bottomLineLogo}></span>
        </span> */}
       
          <li className={styles.footerLogo}>
              <Logo/>
              {/* <span className={styles.bottomLineLogo}></span> */}
           </li>
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
              <MailIcon />
            </li>
          </ul>
        )}
       
        <h5 className={styles.footerAllRights}>@Всі права захищені</h5>
        </div>
      </div>
    </div>
  );
};

export default Footer;
