// src/components/NotFound.jsx
import React from 'react';
import styles from 'pages/NotFoundPage/NotFoundPage.module.css';
import errorCard1 from 'images/notFound.svg';

import errorCard2 from 'images/notFound.svg';


const NotFoundPage = () => {

  return (
   
    <div className={styles.error}>
      <img
         src={errorCard1}
         alt=""
         style={{
          position: 'fixed',
          top: '70px',
          left: '-100px',
          width: '500px',
          height: '500px',
          zIndex: '0',
          rotate: '10deg',
          opacity: '.4'
        }}
      />


       <img
        className={styles.menuCardImage}
         src={errorCard2}
         alt=""
         style={{
          position: 'fixed',
          bottom: '10px',
          right: '-50px',
          width: '500px',
          height: '500px',
          zIndex: '0',
          rotate: '-10deg',
          opacity: '.4',
         
        }}
      />
      <h1>Щось пішло не так <br/> Сторінка не знайдена</h1>
    </div>
  );
};

export default NotFoundPage;
