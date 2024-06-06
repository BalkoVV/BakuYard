// RetroPhonesIcon.jsx

import React from 'react';
import retroPhonesIcon from 'images/delivery.svg';
import styles from 'components/Logo/Logo.module.css';


export const RetroPhonesIcon = () => {
 return <img className={styles.retroPhonesIcon} src={retroPhonesIcon} alt="retroPhonesIcon"  />;
};

export default RetroPhonesIcon;