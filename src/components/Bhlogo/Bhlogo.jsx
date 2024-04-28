import React from 'react';
import bhlogo from 'images/BH2.svg';
import styles from 'components/Bhlogo/Bhlogo.module.css';


export const Bhlogo = () => {
 return <img className={styles.bhlogo} src={bhlogo} alt="bhlogo"  />;
};

export default Bhlogo;