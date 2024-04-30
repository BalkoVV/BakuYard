// ClockIcon.jsx

import React from 'react';
import clockIcon from 'images/clockIcon.svg';
import styles from 'components/Logo/Logo.module.css';


export const ClockIcon = () => {
 return <img className={styles.clockIcon} src={clockIcon} alt="clockIcon"  />;
};

export default ClockIcon;