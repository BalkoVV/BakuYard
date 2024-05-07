import React, { useEffect } from 'react';

import InMapButton from 'components/InMapButton/InMapButton';

import InstagramIcon from 'components/Icons/InstagramIcon/InstagramIcon';
import FacebookIcon from 'components/Icons/FacebookIcon/FacebookIcon';
import MailIcon from 'components/Icons/MailIcon/MailIcon';
import LocationIcon from 'components/Icons/LocationIcon/LocationIcon';
import ClockIcon from 'components/Icons/ClockIcon/ClockIcon';
import PhonesIcon from 'components/Icons/PhonesIcon/PhonesIcon';

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
   <div className={styles.contactsPage}>

      <div className={`${styles.mapBox} ${styles.fadeOut}`}>
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
                  <PhonesIcon  className={styles.phoneIconContact}/>
                  <h3 className={styles.contactsListItemDiscriptions}> +38 068 239 38 37</h3>
                </li>
              

                <li className={styles.contactsListItem}>
                 <PhonesIcon className={styles.phoneIconContact}/>
                  <h3 className={styles.contactsListItemDiscriptions}> +38 093 442 30 28</h3>
                </li>

                <li className={styles.contactsListItem}>
                  <PhonesIcon className={styles.phoneIconContact}/>
                  <h3 className={styles.contactsListItemDiscriptions}> +38 045 945 33 69</h3>
                </li>
              {/* </ul>

              <ul className={styles.contactsList}> */}
              <li className={styles.contactsListItem}>
                  <ClockIcon className={styles.contactsListItemImg}/>
                  <h3 className={styles.contactsListItemDiscriptions}>Ми працюємо з 11:00 до 23:00</h3>
                </li>
                
              <li className={styles.contactsListItem}>
                  <MailIcon className={styles.contactsListItemImg}/>
                  <h3 className={styles.contactsListItemDiscriptions}>Надішліть нам eMail</h3>
                </li>


                <li className={styles.contactsListItem}>
                  <InstagramIcon className={styles.contactsListItemImg}/>
                  <h3 className={styles.contactsListItemDiscriptions}>Ми в Instagram</h3>
                </li>

                <li className={styles.contactsListItem}>
                  <FacebookIcon className={styles.contactsListItemImg}/>
                  <h3 className={styles.contactsListItemDiscriptions}>Ми у Facebook</h3>
                </li>
              </ul>
        </div>
      </div>
    </div>
 </div>
   )
};

export default ContactsPage;