import React, { useEffect } from 'react';

import { ReactComponent as TimeIcon } from 'images/time.svg';
// import MapComponent from 'components/MapImage/MapImage';
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
        <div className={styles.mapBox}></div>
       <ul className={styles.contactsList}>
            <li className={`${styles.contactsListItem} ${styles.fadeOut}`}>
              <span><MapIcon/></span>
            <h3>Бровари, </h3>
            <h3>Героїв України, 22</h3>
            </li>
            <li className={`${styles.contactsListItem} ${styles.fadeOut}`}>
              <span><TimeIcon/></span>
              <h3>Ми працюємо з 9 до 23</h3>
           
            </li>

            <li className={`${styles.contactsListItem} ${styles.fadeOut}`}>
              <span><PhoneIcon/></span>
              <h3> +38 093 442 30 28</h3>
           
            </li>
           
            <li className={`${styles.contactsListItem} ${styles.fadeOut}`}>
              <span><PhoneIcon/></span>
              <h3> +38 045 945 33 69</h3>
           
            </li>

            

            <li className={`${styles.contactsListItem} ${styles.fadeOut}`}>
              <span><InstagramIcon/></span>
              <h3>Instagram</h3>
            
            </li>
            
            <li className={`${styles.contactsListItem} ${styles.fadeOut}`}>
              <span><MailIcon/></span>
              <h3>Gmail</h3>
            
            </li>
            <li className={`${styles.contactsListItem} ${styles.fadeOut}`}>
              <span><FacebookIcon/></span>
              <h3>Facebook</h3>
            
            </li>
        </ul>
         </div>
      
    </div>
    </div>
   )
};

export default ContactsPage;