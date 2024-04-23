// MailIcon.jsx

import React from 'react';
import mailIcon from 'images/mail4.svg';
import styles from 'components/Logo/Logo.module.css';


export const MailIcon = () => {
 return <img className={styles.mailIcon} src={mailIcon} alt="mailIcon"  />;
};

export default MailIcon;