// RetroPhonesIcon.jsx

import React from 'react';
import retroPhonesIcon from 'images/retroPhone.svg';
import styles from 'components/Logo/Logo.module.css';


export const RetroPhonesIcon = () => {
 return <img className={styles.retroPhonesIcon} src={retroPhonesIcon} alt="retroPhonesIcon"  />;
};

export default RetroPhonesIcon;