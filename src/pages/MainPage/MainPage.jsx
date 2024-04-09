import React, { useEffect } from 'react';
import styles from 'pages/MainPage/MainPage.module.css';
const MainPage = () => {

  useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.fadeOut}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1'; 
      }, 50 * index); 
    });
  }, []);

  return (
    <div className={styles.mainPage}>
      <div className={styles.mainPageContainer}>

      <div className={`${styles.hero} ${styles.fadeOut}`}></div>

        <p className={`${styles.mainTopParagraph} ${styles.fadeOut}`}>
          Бакінський Двір
          – місце де традиції сходяться з сучаснiстю, 
          тут аромати кухні розповідають власну історію. 
          У нас кожен стіл – це святковий захід, 
          а кожна страва – це шедевр майстра.
          Затишні зали, приватні бесідки та сонячна тераса чекають,  
          щоб стати свідками вашого найважливішого свята.
        </p>
       
      <ul className={styles.features}>
      <li className={styles.fadeOut}>
          <h1>Банкетна зала</h1>
      </li>
      <li className={styles.fadeOut}>
          <h1>Окремі бесідки</h1>
      </li>
      <li className={styles.fadeOut}>
          <h1>Літня тераса</h1>
      </li>
      <li className={styles.fadeOut}>
          <h1>Танцмайданчик</h1>
      </li>
    </ul>
    
      
      
        <p className={`${styles.mainBottomParagraph} ${styles.fadeOut}`}>Від палячих шашликів до ароматних вегетаріанських страв 
          – у нас є щось для кожного гурмана.
          "Бакінський Двір" – де смак об'єднує серця,  
          а атмосфера творить неповторний вечір, 
          наповнений враженнями та веселим настроєм. 
          </p>
      
      <ul className={styles.features2}>
        <li className={styles.fadeOut}>
            <h1>Банкети</h1>
        </li>
        <li className={styles.fadeOut}>
            <h1>Корпоративи</h1>
        </li>
        <li className={styles.fadeOut}>
            <h1>Сімейна вечеря</h1>
        </li>  
        <li className={styles.fadeOut}>
            <h1>Бізнес ланчі</h1>
        </li>
        <li className={styles.fadeOut}>
            <h1>Дні народження</h1>
        </li>
        <li className={styles.fadeOut}>
            <h1>Караоке</h1>
        </li>
      </ul>
     
  
      <p className={`${styles.maindeliveryParagraph} ${styles.fadeOut}`}>
        В нас працює доставка по місту
          </p>
     
     
</div>
    </div>
  );
};

export default MainPage;
