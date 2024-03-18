// MainPage.jsx
import React from "react";

import Hero from 'components/Hero/Hero';
import HeroBottom from 'components/HeroBottom/HeroBottom';
import DetailsButton from 'components/DetailsButton/DetailsButton';
import MainDescriptionsTop from 'components/MainDescriptionsTop/MainDescriptionsTop';
import MainDescriptionsBottom from 'components/MainDescriptionsBottom/MainDescriptionsBottom';

// import styles from 'pages/MainPage/MainPage.module.css';

export const MainPage = () => {
  return (
    <div>
     <Hero />
       <ul>
        <li>
          <span>
            <MainDescriptionsTop />
          </span>
         
        </li>
        <li>
            <span>
            <HeroBottom />
          </span>
        </li>
        <li> 
          <span>
            <MainDescriptionsBottom />
          </span>
          <HeroBottom />
        </li>
        <li>
          <DetailsButton />
        </li>
        <li> 
          <span>
            <MainDescriptionsBottom />
          </span>
          <HeroBottom />
        </li>
        <li> 
          <span>
            <MainDescriptionsBottom />
          </span>
          <HeroBottom />
        </li>
        <li> 
          <span>
            <MainDescriptionsBottom />
          </span>
          <HeroBottom />
        </li>
        <li> 
          <span>
            <MainDescriptionsBottom />
          </span>
          <HeroBottom />
        </li>
       </ul>
    </div>
  );
};

export default MainPage;
