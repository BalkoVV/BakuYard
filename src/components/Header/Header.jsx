// Header.jsx
import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom'; 

import { Logo } from 'components/Logo/Logo';
import { ReactComponent as MenuIcon } from 'images/mobileSwitch.svg';
import { ReactComponent as DeviveryIcon } from 'images/delivery.svg';

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
    <header className={styles.header}>
      <div className={styles.headerBox}>
        <Logo />
        {/* < DeviveryIcon/> */}
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <MenuIcon />
        </div>
        <div className={styles.deliveryIcon}>
  <NavLink to="/delivery">
    <DeviveryIcon/>
  </NavLink>
</div>

        <BurgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
         <nav className={styles.headerNav}>
          <NavLink exact to="/" activeClassName={styles.activeLink}>Головна</NavLink>
          <NavLink to="/menu" activeClassName={styles.activeLink}>Меню</NavLink>
          {/* <NavLink to="/delivery" activeClassName={styles.activeLink}>Доставка</NavLink> */}
          <NavLink to="/contacts" activeClassName={styles.activeLink}>Контакти</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;