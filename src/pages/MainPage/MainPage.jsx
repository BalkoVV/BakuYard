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
          Бакінський Двір
          – місце де традиції сходяться з сучаснiстю, 
          тут аромати кухні розповідають власну історію. 
          У нас кожен стіл – це святковий захід, 
          а кожна страва – це шедевр майстра.
          
        </p>

        <p className={`${styles.mainTopParagraph} ${styles.fadeOut}`}>
          Затишні зали, приватні бесідки та сонячна тераса чекають,  
          щоб стати свідками вашого найважливішого свята.</p>
       
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
    
      
      
        <p className={`${styles.mainBottomParagraph} ${styles.fadeOut}`}>
          Від палячих шашликів до ароматних вегетаріанських страв 
          – у нас є щось для кожного гурмана.

          
          </p>

          <p className={`${styles.mainBottomParagraph} ${styles.fadeOut}`}>

          "Бакінський Двір" – місце де смак об'єднує серця,  
          а атмосфера творить неповторний вечір.
          
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

      <p className={`${styles.maindeliveryParagraph} ${styles.fadeOut}`}>
      Будьте завжди підключені. Наш безкоштовний Wi-Fi 
      дозволяє вам залишатися на зв'язку або працювати в 
      Інтернеті у будь-який момент.
      </p>
      
      <p className={`${styles.maindeliveryParagraph} ${styles.fadeOut}`}>
        Не переймайтеся за парковку. 
        Ми надаємо зручне паркувальне місце, 
        щоб зробити ваше перебування у нас ще комфортнішим.
      </p>
     
      <ul className={styles.features2}>
        <li className={styles.fadeOut}>
            <h1>Wi-Fi Free</h1>
        </li>
        <li className={styles.fadeOut}>
            <h1>Парковка</h1>
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
