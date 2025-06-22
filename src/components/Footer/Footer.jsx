// Footer.jsx

import React from 'react';

import { LogoUncolored } from 'components/LogoUncolored/LogoUncolored';
import { InstagramIconFooter } from 'components/Icons/InstagramIconFooter/InstagramIconFooter';
import { FacebookIconFooter } from 'components/Icons/FacebookIconFooter/FacebookIconFooter';
import { MailIconFooter } from 'components/Icons/MailIconFooter/MailIconFooter';
import styles from '../Footer/Footer.module.css';



export const Footer = ({ customLinks }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div  className={styles.footerBox}>
       
          <li className={styles.footerLogo}>
              <LogoUncolored/>
           </li>
           
        {customLinks ? (

          <ul className={styles.footerSocialCustom}>
            <h3>сайт створено</h3> 

            {customLinks}
          </ul>
        ) : (
          <ul className={styles.footerSocial}>
            <li>
              
              <a href="https://www.instagram.com/dvorbakinskii/" target="_blank" rel="noreferrer">
                <InstagramIconFooter className={styles.instaFooter} />
              </a>

            </li>
            <li>
             
              <a href="https://www.facebook.com/profile.php?id=100025507986999" target="_blank" rel="noreferrer">
                <FacebookIconFooter />
              </a>

            </li>
            <li>
              
              <a href="mailto:bakinskiydvor2021@gmail.com" target="_blank" rel="noreferrer">
                <MailIconFooter />
              </a>

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
