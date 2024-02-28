import React from "react";
import styles from 'pages/AboutPage/AboutPage.module.css';

export const AboutPage = () => {
  return (
    <div className={styles.aboutPageDiv}>
      <div className={styles.aboutPageContainer}>
        <ul className={styles.aboutPageList}>
        <li className={styles.aboutPageListItem}><h1>Банкети</h1></li>
        <li className={styles.aboutPageListItem}><h1>Весіллля</h1></li>
        <li className={styles.aboutPageListItem}><h1>Резерв столів і літньої тераси</h1></li>
        <li className={styles.aboutPageListItem}><h1>Комплексні обіди</h1></li>
        <li className={styles.aboutPageListItem}><h1>Поминальні обіди</h1></li>
        <li className={styles.aboutPageListItem}><h1>Самовивіз страв</h1></li>
        <li className={styles.aboutPageListItem}> <h1>Відправка на таксі (доставка)</h1></li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;