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
    <div ref={menuRef} className={`${styles.burgerMenu} ${isOpen ? styles.isOpen : ''}`}>
      <ul>
        <li><NavLink exact to="/" onClick={onClose} activeClassName={styles.activeLink}>Головна</NavLink></li>
        <li><NavLink to="/about" onClick={onClose} activeClassName={styles.activeLink}>Про нас</NavLink></li>
        <li><NavLink to="/menu" onClick={onClose} activeClassName={styles.activeLink}>Меню</NavLink></li>
        <li><NavLink to="/contacts" onClick={onClose} activeClassName={styles.activeLink}>Контакти</NavLink></li>
      </ul>
    </div>
  );
};

export default BurgerMenu;

// import React, { useEffect } from 'react';
// import { NavLink } from 'react-router-dom';
// import styles from './BurgerMenu.module.css';

// const BurgerMenu = ({ isOpen, onClose }) => {
//   // Функція для заборони прокручування сторінки
//   const disableScroll = () => {
//     document.body.style.overflow = 'hidden';
//   };

//   // Функція для дозволу прокручування сторінки
//   const enableScroll = () => {
//     document.body.style.overflow = 'visible';
//   };

//   // Викликаємо функції для заборони/дозволу прокручування при відкритті/закритті меню
//   useEffect(() => {
//     if (isOpen) {
//       disableScroll();
//     } else {
//       enableScroll();
//     }

//     // При закритті компонента дозволяємо прокручування
//     return () => enableScroll();
//   }, [isOpen]);

//   return (
//     <div className={`${styles.burgerMenu} ${isOpen ? styles.isOpen : ''}`}>
//       <ul>
//         <li><NavLink exact to="/" onClick={onClose} activeClassName={styles.activeLink}>Головна</NavLink></li>
//         <li><NavLink to="/about" onClick={onClose} activeClassName={styles.activeLink}>Про нас</NavLink></li>
//         <li><NavLink to="/menu" onClick={onClose} activeClassName={styles.activeLink}>Меню</NavLink></li>
//         <li><NavLink to="/contacts" onClick={onClose} activeClassName={styles.activeLink}>Контакти</NavLink></li>
//       </ul>
//     </div>
//   );
// };

// export default BurgerMenu;
