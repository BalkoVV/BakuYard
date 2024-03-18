// MasterContainer.jsx

import React from "react";
import styles from '../MasterContainer/MasterContainer.module.css';
import 'index.css';

export const MasterContainer = ({children}) => {
  return (
    <div className={styles.masterContainer}>
      {children}
    </div>
   )
};

export default MasterContainer;