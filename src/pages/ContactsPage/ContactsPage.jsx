// ContactPage.jsx

import React from "react";
import MapImage from "components/MapImage/MapImage";

import styles from 'pages/ContactsPage/ContactsPage.module.css';

export const ContactsPage = () => {
  return (
    <div  className={styles.contactsPage}>
      <div  className={styles.contactsPageContainer}>
      <h1>Contacts</h1>
      <span className={styles.mapGoogleSpan} >
      <MapImage />
      </span>
      <h1>вул. Героїв України, 22, Бровари, Київська область.</h1>
      <h1>тел: +380 93 442 3028</h1>
      <h1>тел: +380 68 239 3837</h1>
      <h1>Facebook</h1>
      <h1>Instagram</h1>
      <h1>bakinskiydvor2021@gmail.com</h1>
      <h1>Ми працюємо з 11 до 23  години щодня</h1>
      </div>
    </div>
  );
};

export default ContactsPage;
