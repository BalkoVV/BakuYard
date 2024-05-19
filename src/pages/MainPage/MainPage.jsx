import React, { useEffect } from 'react';
import styles from 'pages/MainPage/MainPage.module.css';




const MainPage = () => {

  useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.fadeOut}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1'; 
      }, 10 * index); 
    });
  }, []);

  useEffect(() => {
    const supportsBackgroundFixed = (() => {
      const testElement = document.createElement('div');
      testElement.style.backgroundAttachment = 'fixed';
      const isSupported = (testElement.style.backgroundAttachment === 'fixed');
      return isSupported;
    })();

    if (!supportsBackgroundFixed) {
      const element = document.querySelector(`.${styles.mainPageContainer}`);
      element.classList.add(styles.backgroundFixedFallback);
    }
  }, []);
  

  return (
    <div className={`${styles.mainPage} ${styles.fadeOut}`}>

      <div className={styles.mainPageContainer}>

      <div className={styles.heroBox}>
        <div className={styles.hero} id="hero">
          <div className={styles.heroInHero}>
        
          </div>
        </div>
      </div>

       <section  className={styles.topDescriptionsBox}>
       <span className={styles.topDescriptions}>
          <p>Бакінський Двір</p> 

         <p> - місце де смак об'єднує серця,</p> 

         <p> а атмосфера творить неповторний вечір.</p>

          <p>У нас кожен стіл – це святковий захід.</p>

          <p>Кожна страва – це шедевр від майстра.</p>

          <p>Від шашлику до вегетаріанських страв</p>

         
         <p> – у нас є щось для кожного гурмана</p>
        </span>
       </section>
       
        <section className={styles.featuresTopBox}>
         
         <ul className={styles.featuresTop}>
            <li>
              <h1>Банкети</h1>
            </li>
            <li>
              <h1>Корпоративи</h1>  
            </li>
            <li>
              <h1>Весілля</h1>
            </li>
            <li>
              <h1>Дні народження</h1>
            </li>
            <li>
              <h1>Сімейна вечеря</h1>   
            </li>  
            <li>
              <h1>Бізнес ланч</h1>                
            </li>
          </ul>
         
        </section>
        
          <section className={styles.centerDescriptionsBox}>
          <h1 className={styles.centerDescriptions}>
            Затишні банкетні зали чекають, <br/>щоб стати свідками вашого свята.
            <br/>За потреби більшої приватності, <br/>оберіть одну з окремих альтанок. <br/>
            А відкрита тераса, дасть змогу насолодитися смачними стравами на свіжому повітрі,
            незалежно від пори року
          </h1>
          </section>
       
          <section className={styles.featuresCenterBox}>
          <ul className={styles.featuresCenter}>
          <li>
              <h1>Банкетна зала</h1>
          </li>
          <li>
              <h1>Окремі альтанки</h1>
          </li>
          <li>
              <h1>Літня тераса</h1>
          </li>
          <li>
              <h1>Танцмайданчик</h1>
          </li>
        </ul>
          </section>

        <section className={styles.bottomDescriptionsBox}>
        <h1 className={styles.bottomDescriptions}>
          Залишатесь на зв'язку, працюйте або діліться світлинами з Вашого відпочинку - 
          у вільному доступі безкоштовний Wi-Fi
           <br/>
          Також, не переймайтеся за парковку. Зручне паркувальне місце, 
          зробить Ваше перебування у нас ще комфортнішим
        </h1>
        
       
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

            </ul>
        </section>
        
        <section className={styles.bottomDeliveryBox}>
        <h1 className={styles.bottomDeliveryDescriptions}>
           В нас працює доставка по місту
        </h1>
       
        </section>
    </div>
  </div>
  );
};

export default MainPage;
