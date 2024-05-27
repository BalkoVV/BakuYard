// Banquete.jsx


import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as ToMenuIcon } from 'images/toMenuIcon.svg';
import banqueteHotData from "services/dataBanquete/banqueteHot.json";
import banqueteColdData from "services/dataBanquete/banqueteCold.json"

// import pizzaMenu1 from 'images/pizzaMenu1.png';
// import pizzaMenu2 from 'images/pizzaMenu2.png';
// import pizzaMenu3 from 'images/pizzaMenu3.png';

import styles from 'components/MenuComponents/menuStyle.module.css';

import banqueteMenu1 from 'images/banqueteCardMenu.svg';
import banqueteMenu2 from 'images/banqueteCardMenu.svg';

export const Banquete = () => {

  const [banqueteHotItems, setBanqueteHotItems] = useState([]);
  const [banqueteColdItems, setBanqueteColdItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

   useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.fades}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1'; 
      }, 10 * index); 
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  useEffect(() => {
    setBanqueteHotItems(banqueteHotData);
  }, []);

  useEffect(() => {
   setBanqueteColdItems(banqueteColdData);
 }, []);

  return (
    <div className={styles.dishPage}>
      

          <div className={styles.discriptionBox}>
            <h1 className={styles.dishTitle}>Банкетне меню</h1> 

      <div className={styles.toMenuButton}>
        <NavLink to="/menu" className={styles.toMenuLink}>
          <ToMenuIcon className={styles.toMenuIcon}/>
          <h1 className={styles.toMenuDescription}>до Меню</h1>
        </NavLink>
      </div>

          </div>
        
      <div className={styles.dishPageContainer}>

      <div className={styles.dishPageBox}>


      <img

src={banqueteMenu1}
alt=""
style={{
 position: 'fixed',
 top: '70px',
 left: '-100px',
 width: '500px',
 height: '500px',
 zIndex: '0',
 rotate: '10deg',
 transform: 'scaleX(-1)',
 opacity: '.4'
}}
/>


<img
className={styles.menuCardImage}
src={banqueteMenu2}
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

        {/* <img
         src={pizzaMenu1}
        alt=""
        style={{
          position: 'fixed',
          top: '100px',
          left: '-40px',
          width: '400px',
          height: '600px',
        }}
      />
       <img
         src={pizzaMenu2}
        alt=""
        style={{
          position: 'fixed',
          top: '220px',
          right: '-40px',
          width: '400px',
          height: '600px',
        }}
      /> */}
       
          
          <table className={styles.dishList}>
          <h3 className={styles.dishListTitle}>Гарячі страви</h3>
         
          <tbody>
            {banqueteHotItems.map((item) => (
            <tr key={item.id} className={styles.dishListItem}>
              
              <div className={styles.dishListItemInfo}>

                  <span className={styles.dishListItemCategory}>
                    <td className={styles.dishListItemCategoryDescription}></td>
                  </span>
                
                   <span className={styles.dishListItemName} >
                      <td className={styles.dishListItemNameDescription}>{item.назва}</td>
                    </span>

                  <span className={styles.dishListItemIngredients}>
                    <td className={styles.dishListItemIngredientsDescription}>{item.інгредієнти}</td>
                  </span>
                  

               </div>
                
               <div className={styles.dishListItemManagementNotAdd}>

                  <span className={styles.dishListWeightPriceBoxNotAdd}>
                      <span className={styles.dishListItemWeigthNotAdd}>
                        <td>{item.вага}</td>
                      </span>

                      <span className={styles.dishTablePriceNotAdd}>
                        <td>{item.ціна}</td>
                      </span>
                  </span>


                </div>

              </tr>
            ))}
          </tbody>
        </table>

          <table className={styles.dishList}>
          <h3 className={styles.dishListTitle}>Холодні страви</h3>
 
          <tbody>
            {banqueteColdItems.map((item) => (
            <tr key={item.id} className={styles.dishListItem}>
              
              <div className={styles.dishListItemInfo}>

                  <span className={styles.dishListItemCategory}>
                    <td className={styles.dishListItemCategoryDescription}></td>
                  </span>
                
                   <span className={styles.dishListItemName} >
                      <td className={styles.dishListItemNameDescription}>{item.назва}</td>
                    </span>

                  <span className={styles.dishListItemIngredients}>
                    <td className={styles.dishListItemIngredientsDescription}>{item.інгредієнти}</td>
                  </span>
                  

               </div>

                
              <div className={styles.dishListItemManagementNotAdd}>

                  <span className={styles.dishListWeightPriceBoxNotAdd}>
                      <span className={styles.dishListItemWeigthNotAdd}>
                        <td>{item.вага}</td>
                      </span>

                      <span className={styles.dishTablePriceNotAdd}>
                        <td>{item.ціна}</td>
                      </span>
                  </span>


                </div>
              </tr>
            ))}
          </tbody>
        </table>

        </div>
      </div>
    </div>
  );
};

export default Banquete;





