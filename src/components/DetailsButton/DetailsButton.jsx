// DetailsButton.jsx 

import React from "react";
import { NavLink } from 'react-router-dom';
// import styles from 'components/DetailsButton/DetailsButton.module.css';

export const DetailsButton = () => {
  return (
  
   <div>
     <NavLink to="/about">Детальніше</NavLink>
   </div>
)
};

export default DetailsButton;