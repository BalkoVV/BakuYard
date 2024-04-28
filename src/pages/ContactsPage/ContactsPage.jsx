import React, { useEffect } from 'react';

import InMapButton from 'components/InMapButton/InMapButton';

import { ReactComponent as TimeIcon } from 'images/time.svg';
import { ReactComponent as MapIcon } from 'images/mapIcon.svg';
import { ReactComponent as PhoneIcon } from 'images/phoneIcon.svg';
import { ReactComponent as FacebookIcon } from 'images/facebook.svg';
import { ReactComponent as MailIcon } from 'images/mail4.svg';
import { ReactComponent as InstagramIcon } from 'images/instagram4.svg';

import styles from 'pages/ContactsPage/ContactsPage.module.css';




export const ContactsPage = () => {

   useEffect(() => {
      const contentElements = document.querySelectorAll(`.${styles.fadeOut}`);
      contentElements.forEach((element, index) => {
        setTimeout(() => {
          element.style.opacity = '1'; 
        }, 30 * index); 
      });
    }, []); 

 return (
   <div className={styles.contactsPage}>
      {/* <h1 className={styles.contactsPageTitle}>Контакти</h1> */}

      <div className={`${styles.mapBox} ${styles.fadeOut}`}>
        <InMapButton className={styles.inMap}/>
      </div>

        <div className={styles.contactsPageContainer}>

         <div className={styles.contactsPageBox }>
    
            <div className={styles.contactsListBox}>

            <ul className={styles.contactsList}>

                <li className={styles.contactsListItem}>
                  <span><MapIcon/></span>
                  <h3>Бровари, Героїв України, 22 </h3>
                </li>

             <li className={styles.contactsListItem}>
                  <span className={styles.phoneIconContact}><PhoneIcon/></span>
                  <h3> +38 068 239 38 37</h3>
                </li>
              

                <li className={styles.contactsListItem}>
                  <span><PhoneIcon/></span>
                  <h3> +38 093 442 30 28</h3>
                </li>

                <li className={styles.contactsListItem}>
                  <span><PhoneIcon/></span>
                  <h3> +38 045 945 33 69</h3>
                </li>
              </ul>

              <ul className={styles.contactsList}>
              <li className={styles.contactsListItem}>
                  <span><TimeIcon/></span>
                  <h3>Ми працюємо з 11:00 до 23:00</h3>
                </li>
                
              <li className={styles.contactsListItem}>
                  <span><MailIcon/></span>
                  <h3>Надішліть нам eMail</h3>
                </li>

                <li className={styles.contactsListItem}>
                  <span><InstagramIcon/></span>
                  <h3>Ми в Instagram</h3>
                </li>

                <li className={styles.contactsListItem}>
                  <span><FacebookIcon/></span>
                  <h3>Ми у Facebook</h3>
                </li>
              </ul>
        </div>
      </div>
    </div>
 </div>
   )
};

export default ContactsPage;