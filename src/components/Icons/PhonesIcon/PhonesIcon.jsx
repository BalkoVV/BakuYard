// PhonesIcon.jsx

import React from 'react';
import phonesIcon from 'images/phonesIcon.svg';
import styles from 'components/Logo/Logo.module.css';


export const PhonesIcon = () => {
 return <img className={styles.phonesIcon} src={phonesIcon} alt="phonesIcon"  />;
};

export default PhonesIcon;