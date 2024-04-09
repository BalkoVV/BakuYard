// BurgerMenu.jsx


import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './BurgerMenu.module.css';

const BurgerMenu = ({ isOpen, onClose }) => {

  const menuRef = useRef(null);

  useEffect(() => {
    const handleTouchMove = (event) => {
      if (isOpen && !menuRef.current.contains(event.target)) {
        event.preventDefault();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Заборона скролу при відкритому меню
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
    } else {
      document.body.style.overflow = 'visible'; // Дозвіл скролу при закритому меню
    }


    return () => {
      document.body.style.overflow = 'visible'; // Дозвіл скролу при закритті меню
      document.removeEventListener('touchmove', handleTouchMove);
    };
  }, [isOpen]);

  return (
    <div>
      {isOpen && <div className={styles.backdrop} onClick={onClose}></div>}
      <div ref={menuRef} className={`${styles.burgerMenu} ${isOpen ? styles.isOpen : ''}`}>
        <ul>
          <li><NavLink exact to="/" onClick={onClose} activeClassName={styles.activeLink}>Головна</NavLink></li>
          <li><NavLink to="/menu" onClick={onClose} activeClassName={styles.activeLink}>Меню</NavLink></li>
          <li><NavLink to="/contacts" onClick={onClose} activeClassName={styles.activeLink}>Контакти</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
