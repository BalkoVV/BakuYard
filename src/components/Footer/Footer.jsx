// Footer.jsx
import React from 'react';
// import { NavLink } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';
import styles from '../Footer/Footer.module.css';

export const Footer = () => {
  return (
    <div  className={styles.footer}>
      <div className={styles.footerContainer}>
      <Logo />
        {/* <ul className={styles.footerList}>
          <li className={styles.footerListItem}>
            
          </li>
          <li className={styles.footerListItem}>
            <NavLink to="/promotions">Акції</NavLink>
            </li>
          <li className={styles.footerListItem}>
            <NavLink to="/feedbacks">Відгуки</NavLink>
            </li>
          <li className={styles.footerListItem}>
            <NavLink to="/vacancies">Вакансії</NavLink>
            </li>
        </ul> */}
      </div>
        
    </div>
  );
};

export default Footer;