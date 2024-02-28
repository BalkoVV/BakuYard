// Hero.jsx 

import React from 'react';
// import backgroundImage from 'images/bg22.jpg';
import styles from '../HeroBottom/HeroBottom.module.css';


const HeroBottom = () => {
   return (
<div className={styles.BakuHeroBottom}>
{/* <img className={styles.backgroundImage} src={backgroundImage} alt='backgroundImage' height='550px'/>       */}
<div className={styles.BakuHeroBottomImg}></div>
</div>

);
};

export default HeroBottom;