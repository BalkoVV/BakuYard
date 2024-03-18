// Header.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

import { Logo } from 'components/Logo/Logo';
import styles from '../Header/Header.module.css';
import 'index.css'; 

export const Header = () => {
  return (
    <div className={styles.header}>
    
      
     {/* <ul className={styles.headerList}> */}

         <nav className={styles.headerList}>
          <ul>
          <li className={styles.headerLink}>
            <NavLink to="/">
              <span>
                Головна
              </span>
            </NavLink>
          </li>
          <li className={styles.headerLogo}>
            <Logo />
          </li>

          <li className={styles.headerLink}>
            <NavLink to="/about">
              <span>
                Про нас
              </span>
            </NavLink>
          </li>
          </ul>
          {/* <NavLink to="/" end>
            Home
          </NavLink> */}
          {/* <NavLink to="/about">About</NavLink> */}
         </nav>
          {/* <li className={styles.headerLink}>
            <NavLink to="/">
              <span>
                Головна
              </span>
            </NavLink>
          </li>
          
          <li className={styles.headerLink}>
            <NavLink to="/about">
              <span>
                Про нас
              </span>
            </NavLink>
          </li> */}

          {/* <li className={styles.headerLogo}>
            <Logo />
          </li> */}

          {/* <li className={styles.headerLink}>
            <NavLink to="/dish">
              <span>
                Меню
              </span>
            </NavLink>
          </li>

          <li className={styles.headerLink}>
            <NavLink to="/contacts">
              <span>
                Контакти
              </span>
            </NavLink>
          </li> */}

        {/* </ul>   */}
    
    
    </div>
  );
};

export default Header;

