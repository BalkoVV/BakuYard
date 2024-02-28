// MainPage.jsx
import React from "react";

import Hero from 'components/Hero/Hero';
import HeroBottom from 'components/HeroBottom/HeroBottom';
import DetailsButton from 'components/DetailsButton/DetailsButton';
import MainDescriptionsTop from 'components/MainDescriptionsTop/MainDescriptionsTop';
import MainDescriptionsBottom from 'components/MainDescriptionsBottom/MainDescriptionsBottom';

import styles from 'pages/MainPage/MainPage.module.css';

export const MainPage = () => {
  return (
    <div className={styles.mainPage}>
     <div className={styles.mainPageContainer}>
     <Hero />
       <ul className={styles.mainPageList}>
        <li className={styles.mainPageListItem}>
          <span className={styles.mainPageListItemDescription}>
            <MainDescriptionsTop />
          </span>
         
        </li>
        <li>
            <span className={styles.mainPageListItemImage}>
            <HeroBottom />
          </span>
        </li>
        <li className={styles.mainPageListItem}> 
          <span className={styles.mainPageListItemDescription}>
            <MainDescriptionsBottom />
          </span>
          {/* <HeroBottom /> */}
        </li>
        <li className={styles.mainPageListItem}>
          <DetailsButton />
        </li>
       </ul>
     </div>
    </div>
  );
};

export default MainPage;
