// Hero.jsx 

import React from 'react';
// import backgroundImage from 'images/bg22.jpg';
import styles from '../Hero/Hero.module.css';


export const Hero = () => {
   return (
<div className={styles.BakuHero}>
{/* <img className={styles.backgroundImage} src={backgroundImage} alt='backgroundImage' height='550px'/>       */}
<div className={styles.BakuHeroImg}></div>
</div>

);
};

export default Hero;