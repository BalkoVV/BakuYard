// Header.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';
import styles from '../Header/Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
     <div className={styles.headerContainer}>
        <ul className={styles.headerList}>
            <li className={styles.headerListItem}>
              <NavLink to="/">Головна</NavLink>
            </li>
            {/* <li className={styles.headerListItem}>
              <NavLink to="/about">Про нас</NavLink>
            </li> */}
            <li className={styles.headerListItem}>
              <span><Logo /></span>
            </li>
            <li className={styles.headerListItem}>
              <NavLink to="/menu">Меню</NavLink>
            </li>
           
            <li className={styles.headerListItem}>
              <NavLink to="/contacts">Контакти</NavLink>
            </li>
        </ul>   
     </div>
    </div>
  );
};

export default Header;