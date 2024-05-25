// MailIconFooter.jsx

import React from 'react';
import mailIconFooter from 'images/forMailFooter.svg';
import styles from 'components/Logo/Logo.module.css';


export const MailIconFooter = () => {
 return <img className={styles.mailIconFooter} src={mailIconFooter} alt="mailIconFooter"  />;
};

export default MailIconFooter;