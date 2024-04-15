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

      <div className={`${styles.heroBox} ${styles.fadeOut}`}>
        <div className={styles.hero}></div>
      </div>

        <p className={`${styles.mainTopParagraph} ${styles.fadeOut}`}>
          "Бакінський Двір" – місце де смак об'єднує серця,  
          а атмосфера творить неповторний вечір.
          У нас кожен стіл – це святковий захід.
          Кожна страва – це шедевр від майстра. 
          Від палячих шашликів до ароматних вегетаріанських страв 
          – у нас є щось для кожного гурмана
          
        </p>

        <ul className={styles.features2}>
            <li className={styles.fadeOut}>
                <h1>Банкети</h1>
            </li>
            <li className={styles.fadeOut}>
                <h1>Корпоративи</h1>
            </li>
            <li className={styles.fadeOut}>
                <h1>Весілля</h1>
            </li>
            <li className={styles.fadeOut}>
                <h1>Дні народження</h1>
            </li>
            <li className={styles.fadeOut}>
                <h1>Сімейна вечеря</h1>
            </li>  
            <li className={styles.fadeOut}>
                <h1>Бізнес ланч</h1>
            </li>
          </ul>

          <p className={`${styles.mainTopParagraph} ${styles.fadeOut}`}>
            Затишні зали, приватні бесідки та сонячна тераса чекають,  
            щоб стати свідками вашого свята
          </p>
       
          <ul className={styles.features2}>
          <li className={styles.fadeOut}>
              <h3>Банкетна зала</h3>
          </li>
          <li className={styles.fadeOut}>
              <h3>Окремі бесідки</h3>
          </li>
          <li className={styles.fadeOut}>
              <h3>Літня тераса</h3>
          </li>
          <li className={styles.fadeOut}>
              <h3>Танцмайданчик</h3>
          </li>
        </ul>

        <p className={`${styles.mainBottomParagraph} ${styles.fadeOut}`}>
          Безкоштовний Wi-Fi дозволяє вам залишатися на зв'язку, працювати або ділитися світлинами 
          з Вашого відпочинку.
          Не переймайтеся за парковку. Зручне паркувальне місце, 
          зробить Ваше перебування у нас ще комфортнішим
          
        </p>
     
        <ul className={styles.features2}>
        <li className={styles.fadeOut}>
              <h1>Доставка</h1>
          </li>
          <li className={styles.fadeOut}>
              <h1>Парковка</h1>
          </li>
          <li className={styles.fadeOut}>
              <h1>Караоке</h1>
          </li>
          <li className={styles.fadeOut}>
              <h1>Wi-Fi</h1>
          </li>
          
          
        </ul>
        <p className={`${styles.mainBottomParagraph} ${styles.fadeOut}`}>
        В нас працює доставка по місту
        </p>
       
    </div>
  </div>
  );
};

export default MainPage;
