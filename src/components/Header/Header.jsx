
import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom'; 

import { Logo } from 'components/Logo/Logo';
import { ReactComponent as MenuIcon } from 'images/mobileSwitch.svg';

import BurgerMenu from 'components/BurgerMenu/BurgerMenu';
import styles from './Header.module.css';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const history = useHistory(); 

  useEffect(() => {
    return history.listen(() => {
      setIsMenuOpen(false);
    });
  }, [history]);

  const toggleMenu = () => {
    setIsMenuOpen(prevIsMenuOpen => !prevIsMenuOpen);
  };

  return (
    <div className={styles.headerComponent}>

      <div className={styles.headerContainer}>

        <div className={styles.headerBox}>
        
          <ul className={styles.headerList}>

            <li>
              <span className={styles.headerLogo}>
               <Logo />
              </span>
           </li>

            <li> 
             <span className={styles.burgeLinesIcon} onClick={toggleMenu}>
               <MenuIcon />
             </span>
            </li>
          
        <BurgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

         <nav className={styles.headerNav}>
            <NavLink exact to="/" activeClassName={styles.activeLink}>
              Головна
            </NavLink>

            <NavLink to="/menu" activeClassName={styles.activeLink}>
              Меню
            </NavLink>

            <NavLink to="/contacts" activeClassName={styles.activeLink}>
              Контакти
            </NavLink>

         </nav>
            <ul className={styles.headerInfo}>
              <li>м.Бровари, Героїв України 22</li>
              <li>Ми працюємо з 9:00 до 23:00</li>
            </ul>
         </ul>
       </div>
      </div>
    </div>
  );
};

export default Header;


