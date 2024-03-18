// Footer.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Logo } from 'components/Logo/Logo';
import styles from '../Footer/Footer.module.css';


export const Footer = () => {
  return (
    <div className={styles.footer}>
        <ul className={styles.footerList}>
          <li className={styles.footerLogo}>
            <Logo />
          </li>
          <li>
            <NavLink to="/promotions">Акції</NavLink>
          </li>
          <li>
            <NavLink to="/feedbacks">Відгуки</NavLink>
            </li>
          <li>
            <NavLink to="/vacancies">Вакансії</NavLink>
            </li>
        </ul>
    </div>
  );
};

export default Footer;
