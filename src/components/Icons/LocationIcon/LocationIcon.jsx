// LocationIcon.jsx

import React from 'react';
import locationIcon from 'images/inmap.svg';
import styles from 'components/Logo/Logo.module.css';


export const LocationIcon = () => {
 return <img className={styles.locationIcon} src={locationIcon} alt="locationIcon"  />;
};

export default LocationIcon;