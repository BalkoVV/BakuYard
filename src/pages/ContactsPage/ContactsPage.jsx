import React, { useEffect } from 'react';

import InMapButton from 'components/InMapButton/InMapButton';
import InstagramIcon from 'components/Icons/InstagramIcon/InstagramIcon';
import FacebookIcon from 'components/Icons/FacebookIcon/FacebookIcon';
import MailIcon from 'components/Icons/MailIcon/MailIcon';
import LocationIcon from 'components/Icons/LocationIcon/LocationIcon';
import ClockIcon from 'components/Icons/ClockIcon/ClockIcon';
import BlackberryPhoneIcon from 'components/Icons/BlackberryPhoneIcon/BlackberryPhoneIcon';
import RetroPhonesIcon from 'components/Icons/RetroPhonesIcon/RetroPhonesIcon';

import styles from 'pages/ContactsPage/ContactsPage.module.css';

export const ContactsPage = () => {

   useEffect(() => {
      const contentElements = document.querySelectorAll(`.${styles.fadeOut}`);
      contentElements.forEach((element, index) => {
        setTimeout(() => {
          element.style.opacity = '1'; 
        }, 1 * index); 
      });
    }, []); 

 return (
   <div className={`${styles.contactsPage} ${styles.fadeOut}`}>

      <div className={styles.mapBox}>
        <InMapButton className={styles.inMap}/>
        
      </div>

        <div className={styles.contactsPageContainer}>

         <div className={styles.contactsPageBox }>
    
            <div className={styles.contactsListBox}>

            <ul className={styles.contactsList}>

                  <li className={styles.contactsListItem}>
                    <LocationIcon className={styles.contactsListItemImg}/>
                    <h3 className={styles.contactsListItemDiscriptions}>Бровари, Героїв України, 22 </h3>
                  </li>

                  <li className={styles.contactsListItem}>
                    <ClockIcon className={styles.contactsListItemImg}/>
                    <h3 className={styles.contactsListItemDiscriptions}>Ми працюємо з 11:00 до 23:00</h3>
                  </li>
                  <li className={styles.contactsListItem}>
                    <RetroPhonesIcon className={styles.phoneIconContact}/>
                    <h3 className={styles.contactsListItemDiscriptions}>Доставка з 11:00 до 21:00</h3>
                  </li>
                  <li className={`${styles.contactsListItem} ${styles.contactsListItemActive}`}>
                    <MailIcon className={styles.contactsListItemImg}/>
                    <a href="mailto:bakinskiydvor2021@gmail.com" target="_blank" rel="noreferrer" className={styles.contactsListItemDiscriptions}>Надішліть нам eMail</a>
                  </li>

                  <li className={`${styles.contactsListItem} ${styles.contactsListItemActive}`}>
                    <BlackberryPhoneIcon className={styles.phoneIconContact}/>
                    <a href="tel:+380682393837" target="_blank" rel="noreferrer" className={styles.contactsListItemDiscriptions}> +38 068 239 38 37</a>
                  </li>

                   <li className={`${styles.contactsListItem} ${styles.contactsListItemActive}`}>
                    <BlackberryPhoneIcon className={styles.phoneIconContact}/>
                    <a href="tel:+380934423028" target="_blank" rel="noreferrer" className={styles.contactsListItemDiscriptions}> +38 093 442 30 28</a>
                  </li>          

                  

                  
                   <li className={`${styles.contactsListItem} ${styles.contactsListItemActive}`}>
                    <InstagramIcon className={styles.contactsListItemImg}/>
                    <a href="https://www.instagram.com/dvorbakinskii/" target="_blank" rel="noreferrer" className={styles.contactsListItemDiscriptions}>Ми в Instagram</a>
                  </li>

                   <li className={`${styles.contactsListItem} ${styles.contactsListItemActive}`}>
                    <FacebookIcon className={styles.contactsListItemImg}/>
                    <a href="https://www.facebook.com/profile.php?id=100025507986999" target="_blank" rel="noreferrer" className={styles.contactsListItemDiscriptions}>Ми у Facebook</a>
                  </li>

              </ul>
        </div>
      </div>
    </div>
 </div>
   )
};

export default ContactsPage;