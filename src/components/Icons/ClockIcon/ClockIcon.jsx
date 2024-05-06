// ClockIcon.jsx

import React from 'react';
import clockIcon from 'images/clock.svg';
import styles from 'components/Logo/Logo.module.css';


export const ClockIcon = () => {
 return <img className={styles.clockIcon} src={clockIcon} alt="clockIcon"  />;
};

export default ClockIcon;