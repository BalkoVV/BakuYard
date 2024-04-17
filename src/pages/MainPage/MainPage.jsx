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
    <div className={`${styles.mainPage} ${styles.fadeOut}`}>

      <div className={styles.mainPageContainer}>

      <div className={styles.heroBox}>
        <div className={styles.hero}>
          <div className={styles.heroInHero}>
            {/* boxShadow */}
          </div>
        </div>
      </div>

       <section  className={styles.topDescriptionsBox}>
       <p className={styles.topDescriptions}>
          "Бакінський Двір" – місце де смак об'єднує серця, <br/>
          а атмосфера творить неповторний вечір.<br/>
          У нас кожен стіл – це святковий захід.<br/>
          Кожна страва – це шедевр від майстра.<br/>
          Від палячих шашликів до вегетаріанських страв<br/>
          – у нас є щось для кожного гурмана
        </p>
       </section>
       
        <section className={styles.featuresTopBox}>
         
         <ul className={styles.featuresTop}>
            <li>
            <span className={styles.featuresTopBlur}>
                <h1>Банкети</h1>
                </span>
            </li>
            <li>
            <span className={styles.featuresTopBlur}>
            <h1>Корпоративи</h1>
                </span>
                
            </li>
            <li>
            <span className={styles.featuresTopBlur}>
            <h1>Весілля</h1>
                </span>
                
            </li>
            <li>
            <span className={styles.featuresTopBlur}>
            <h1>Дні народження</h1>
                </span>
                
            </li>
            <li>
            <span className={styles.featuresTopBlur}>
            <h1>Сімейна вечеря</h1>
                </span>
                
            </li>  
            <li>
            <span className={styles.featuresTopBlur}>
            <h1>Бізнес ланч</h1>
                </span>
                
            </li>
          </ul>
         
        </section>
        
          <section className={styles.centerDescriptionsBox}>
          <p className={styles.centerDescriptions}>
            Затишні зали, приватні бесідки та сонячна тераса чекають,  
            щоб стати свідками вашого свята
          </p>
          </section>
       
          <section className={styles.featuresCenterBox}>
          <ul className={styles.featuresCenter}>
          <li>
              <h3>Банкетна зала</h3>
          </li>
          <li>
              <h3>Окремі бесідки</h3>
          </li>
          <li>
              <h3>Літня тераса</h3>
          </li>
          <li>
              <h3>Танцмайданчик</h3>
          </li>
        </ul>
          </section>

        <section className={styles.bottomDescriptionsBox}>
        <p className={styles.bottomDescriptions}>
          Безкоштовний Wi-Fi - залишатесь на зв'язку, працюйте або діліться світлинами 
          з Вашого відпочинку. <br/>
          Не переймайтеся за парковку. Зручне паркувальне місце, 
          зробить Ваше перебування у нас ще комфортнішим
        </p>
        
       
        </section>
     
         <section className={styles.featuresBottomBox}>
            <ul className={styles.featuresBottom}>
              <li>
                  <h1>Доставка</h1>
              </li>
              <li>
                  <h1>Парковка</h1>
              </li>
              <li>
                  <h1>Free Wi-Fi</h1>
              </li>
              {/* <li>
                  <h1>Караоке</h1>
              </li> */}
              
            </ul>
        </section>
        
        <section className={styles.bottomDescriptionsBox}>
        <p className={styles.bottomDescriptions}>
           В нас працює доставка по місту
        </p>
       
        </section>
    </div>
  </div>
  );
};

export default MainPage;
