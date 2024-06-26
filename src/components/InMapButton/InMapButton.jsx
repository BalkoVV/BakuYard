import React from "react";

import styles from 'components/InMapButton/InMapButton.module.css';
import { ReactComponent as InMapIcon } from 'images/userInMap.svg';

export const InMapButton = () => {
   return (
      <div className={styles.inMapButton}>
         
            <InMapIcon className={styles.inMapIcon}/>
         <a
            href="https://www.google.com/maps/place/%D0%91%D0%B0%D0%BA%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9+%D0%94%D0%B2%D1%96%D1%80/@50.5091001,30.7917803,18.16z/data=!4m14!1m7!3m6!1s0x40d4d964534977a3:0x85bce3f2aa0b7a83!2z0JHQsNC60LjQvdGB0YzQutC40Lkg0JTQstGW0YA!8m2!3d50.5090529!4d30.7929779!16s%2Fg%2F11b76tsmxr!3m5!1s0x40d4d964534977a3:0x85bce3f2aa0b7a83!8m2!3d50.5090529!4d30.7929779!16s%2Fg%2F11b76tsmxr?entry=ttu"
            
            target="_blank"
            rel="noreferrer"
            className={styles.inMapLink}
         >
           
            <h3 className={styles.inMapDescription}>Ми на карті</h3>
         </a>
          
      </div>
   );
};

export default InMapButton;
