import React, { useEffect } from 'react';

import { ReactComponent as MapIcon } from 'images/mapIcon.svg';
import { ReactComponent as PhoneIcon } from 'images/phoneIcon.svg';
import { ReactComponent as FacebookIcon } from 'images/facebookIcon.svg';
import { ReactComponent as MailIcon } from 'images/mailIcon.svg';
import { ReactComponent as InstagramIcon } from 'images/instagramIcon.svg';

import styles from 'pages/ContactsPage/ContactsPage.module.css';




export const ContactsPage = () => {

   useEffect(() => {
      const contentElements = document.querySelectorAll(`.${styles.fadeOut}`);
      contentElements.forEach((element, index) => {
        setTimeout(() => {
          element.style.opacity = '1'; 
        }, 50 * index); 
      });
    }, []); 

 return (
   <div className={styles.contactsPage}>
      <h1 className={styles.contactsPageTitle}>Контакти</h1>
      <div className={styles.contactsPageContainer}>
         <div className={styles.contactsPageBox }>
        
       <ul className={styles.contactsList}>
            <li className={`${styles.mainTopParagraph} ${styles.fadeOut}`}>
              <MapIcon/>
            <h3>Бровари, Героїв України, 22</h3>
            </li>
            <li className={`${styles.mainTopParagraph} ${styles.fadeOut}`}>
              <PhoneIcon/>
              <h3> +380 4594 53369</h3>
           
            </li>
            <li className={`${styles.mainTopParagraph} ${styles.fadeOut}`}>
              <InstagramIcon/>
              <h3>Instagram</h3>
            
            </li>
            <li className={`${styles.mainTopParagraph} ${styles.fadeOut}`}>
              <FacebookIcon/>
              <h3>Facebook</h3>
            
            </li>
            <li className={`${styles.mainTopParagraph} ${styles.fadeOut}`}>
              <MailIcon/>
              <h3>Gmail</h3>
            
            </li>
        </ul>
         </div>
      
    </div>
    </div>
   )
};

export default ContactsPage;