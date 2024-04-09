import React, { useEffect } from 'react';

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
         <p className={`${styles.mainTopParagraph} ${styles.fadeOut}`}>
         Бровари
        </p>
        <p className={`${styles.mainTopParagraph} ${styles.fadeOut}`}>
         Героїв України, 22
        </p>
        <p className={`${styles.mainTopParagraph} ${styles.fadeOut}`}>
        +380 4594 53369
        </p>
        <p className={`${styles.mainTopParagraph} ${styles.fadeOut}`}>
         Instagram
        </p>
        <p className={`${styles.mainTopParagraph} ${styles.fadeOut}`}>
         Facebook
        </p>
        <p className={`${styles.mainTopParagraph} ${styles.fadeOut}`}>
         Gmail
        </p>
         </div>
      
    </div>
    </div>
   )
};

export default ContactsPage;