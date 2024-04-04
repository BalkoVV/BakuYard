import React, { useEffect } from 'react';
// import MainDescriptionsTop from 'components/MainDescriptionsTop/MainDescriptionsTop';
// import HeroBottom from 'components/HeroBottom/HeroBottom';
// import MainDescriptionsBottom from 'components/MainDescriptionsBottom/MainDescriptionsBottom';
// import DetailsButton from 'components/DetailsButton/DetailsButton';
import styles from 'pages/MainPage/MainPage.module.css';

const MainPage = () => {

  useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.mainContent}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1'; 
      }, 80 * index); // Додаємо затримку в залежності від індексу компонента
    });
  }, []);

  return (
    <div>
        <section  className={`${styles.mainPageListItem} ${styles.mainContent}`}>
         <div className={styles.hero}>
         </div>
        </section>

        <div className={`${styles.mainPageListItem} ${styles.mainContent}`}>
          <p>
            Бакінський Двір
            – місце де традиції сходяться з сучаснiстю, 
            тут аромати кухні розповідають власну історію. 
            У нас кожен стіл – це святковий захід, 
            а кожна страва – це шедевр майстра.
            Затишні зали, приватні бесідки та сонячна тераса чекають,  
            щоб стати свідками вашого найважливішого свята.
          </p>
        </div>  
    
      <div>
            <ul className={styles.features}>
            <div  className={`${styles.mainPageListItem} ${styles.mainContent}`}>
            <li className={styles.featuresItem}>
            <h1>Банкети</h1>
            </li>
            </div>
            <div  className={`${styles.mainPageListItem} ${styles.mainContent}`}>
            <li className={styles.featuresItem}>
            <h1>Корпоративи</h1>
            </li>
            </div>
            <div  className={`${styles.mainPageListItem} ${styles.mainContent}`}>
            <li className={styles.featuresItem}>
            <h1> Караоке</h1>
            </li>
            </div>
            <div  className={`${styles.mainPageListItem} ${styles.mainContent}`}>
            <li className={styles.featuresItem}>
            <h1>Дні народження</h1>
            </li>
            </div>
            <div  className={`${styles.mainPageListItem} ${styles.mainContent}`}>
            <li className={styles.featuresItem}>
            <h1>Бiзнес-ланч</h1>
            </li>
            </div>
            <div  className={`${styles.mainPageListItem} ${styles.mainContent}`}>
            <li className={styles.featuresItem}>
            <h1>Сімейна вечеря</h1>
            </li>
            </div> 
        </ul>
          <div className={`${styles.mainPageListItem} ${styles.mainContent}`}>
          <p>
              Від палячих шашликів до ароматних вегетаріанських страв 
            – у нас є щось для кожного гурмана.
            "Бакінський Двір" – де смак об'єднує серця,  
            а атмосфера творить неповторний вечір, 
            наповнений враженнями та веселим настроєм. 
            Приходьте і дозвольте собі насолодитися миттєвістю 
            смаку та задоволенням.
          </p>
          </div>  
       
          <ul className={styles.features}>
          <li className={styles.featuresItem}>
            <h1>Банкетна зала</h1>
            </li>
            <li className={styles.featuresItem}>
            <h1>Літня тераса</h1>
            </li>
            <li className={styles.featuresItem}>
            <h1>Окремі бесідки</h1>
            </li>
            <li className={styles.featuresItem}>
            <h1>Парковка</h1>
            </li>
            <li className={styles.featuresItem}>
            <h1>Танцмайданчик</h1>
            </li>
            <li className={styles.featuresItem}>
            <h1>Wi-Fi Freezone</h1>
            </li>  
            </ul>
      </div>
   
    </div>
  );
};

export default MainPage;
