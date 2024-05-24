import React from "react";

import { ReactComponent as MainLogo } from 'images/MainLogoBY.svg';
// import MenuQrLogo from 'images/MenuBusinessCard.png';
import styles from 'pages/BusinessCardPage/BusinessCardPage.module.css'

const BusinessCard = () => {
  return (
    <div className={styles.businessCardPage}>
      <div className={styles.cardHolder}>
      <div className={styles.businessCardTop}>
      <MainLogo className={styles.mainLogoTop}/>
      <span className={styles.lineTop}></span>
      <ul className={styles.infoTop}>
        <li>
         <h5 className={styles.infoTopDescription}> Бровари, Героїв України 22</h5>
          </li>
        <li>
         <h5 className={styles.infoTopDescription}> Працюємо з 11:00 до 23:00</h5>
          </li>
          <li>
          <h5 className={styles.infoTopDescription}>bakinskiydvir@gmail.com</h5>
          </li>
        <li>
          <h5 className={styles.infoTopDescription}>+38 068 239 38 37</h5>
          </li>
        <li>
          <h5 className={styles.infoTopDescription}>+38 093 442 30 28</h5>
          </li>
        <li>
          <h5 className={styles.infoTopDescription}>+38 045 945 33 69</h5>
          </li>
        
      </ul>

      </div>

      <div className={styles.businessCardBack}>
      <span className={styles.menuQrBack}></span>
      <span className={styles.lineBack}></span>
      <ul className={styles.infoBack}>
        <li>
         <span className={styles.facebookQrBack}></span>
          </li>
        <li>
        <span className={styles.instagramQrBack}></span>
          </li>
          
        
      </ul>

      </div>
      </div>
    </div>

  );
};


export default BusinessCard;
