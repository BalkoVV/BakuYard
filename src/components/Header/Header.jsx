
import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom'; 

import { Logo } from 'components/Logo/Logo';
import { BurgerLinesIcon } from 'components/Icons/BurgerLinesIcon/BurgerLinesIcon';

import { ReactComponent as TimeIcon } from 'images/dot.svg';
import { ReactComponent as MapIcon } from 'images/dot.svg';

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
              {/* <span className={styles.bottomLineLogo}></span> */}
           </li>

            <li> 
             <span className={styles.burgerLinesIcon} onClick={toggleMenu}>
               <BurgerLinesIcon />
             </span>
            </li>
          
        <BurgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

         <nav className={styles.headerNav}>
            <NavLink exact to="/" activeClassName={styles.activeLink}>
              <h4>Головна</h4>
            </NavLink>

            <NavLink to="/menu" activeClassName={styles.activeLink}>
             <h4>Меню</h4>
            </NavLink>

            <NavLink to="/contacts" activeClassName={styles.activeLink}>
             <h4>Контакти</h4>
            </NavLink>

         </nav>
            <ul className={styles.headerInfo}>
              <li>
              <MapIcon className={`${styles.headerInfoIcon} ${styles.headerInfoIconLocation}`}/>
               <h3> м.Бровари, Героїв України, 22</h3>
                </li>
              <li>
                <TimeIcon className={styles.headerInfoIcon}/>
                <h3>Ми працюємо з 11:00 до 23:00</h3>
                </li>
            </ul>
         </ul>
       </div>
      </div>
    </div>
  );
};

export default Header;


