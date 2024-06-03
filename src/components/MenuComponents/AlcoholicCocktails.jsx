import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


import { ReactComponent as ToMenuIcon } from 'images/toMenuIcon.svg';

import menuAlcoholicCocktailsData from "services/dataCocktails/alcoholicCocktails.json";
import menuShotData from "services/dataHardAlkohol/shot.json";

import styles from 'components/MenuComponents/menuStyle.module.css';

import cocktailsMenu1 from 'images/cocktailsCardMenu.svg';
import cocktailsMenu2 from 'images/cocktailsCardMenu.svg';

export const AlcoholicCocktails = () => {
  // const { addToCart, cartItems } = useContext(CartContext);
  // const { cartItems } = useContext(CartContext);


  const [alcoholicCocktailsItems, setAlcoholicCocktailsItems] = useState([]);
  const [shotItems, setShotItems] = useState([]); 

  useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.fades}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '1'; 
      }, 10 * index); 
    });
  }, []);
  
  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутити сторінку до верхньої частини
  }, []);
 

  useEffect(() => {
   setAlcoholicCocktailsItems(menuAlcoholicCocktailsData);
  }, []);


  useEffect(() => {
    setShotItems(menuShotData);
  }, []);

 

  // const updateAlcoholicCocktailsButtonState = (itemId) => {
  //  setAlcoholicCocktailsItems(alcoholicCocktailsItems.map(item => {
  //     if (item.id === itemId) {
  //       return { ...item, alreadyAdded: false };
  //     }
  //     return item;
  //   }));
  // };

  return (
    <div className={styles.dishPage}>
 
      <div className={styles.discriptionBox}>
        <h1 className={styles.dishTitle}>Алкогольні коктейлі</h1> 

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
         src={cocktailsMenu1}
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
         src={cocktailsMenu2}
         alt=""
         style={{
          position: 'fixed',
          bottom: '10px',
          right: '-50px',
          width: '500px',
          height: '500px',
          zIndex: '0',
          rotate: '-10deg',
          transform: 'scaleX(-1)',
          opacity: '.4',
         
        }}
      />
      
          {/* <table className={styles.dishTableList}>
            <thead>
              <tr>
            
              </tr>
            </thead>
            <tbody>
              {alcoholicCocktailsItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  <td  className={styles.dishTableIngredients}>{item.інгредієнти}</td>
                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                 
                </tr>
              ))}
            </tbody>
          </table> */}

<table className={styles.dishList}>
          {/* <h3 className={styles.dishListTitle}>Алкогольні коктейлі</h3> */}
 
          <tbody>
          <h3 className={styles.dishListTitle}>Коктейлі</h3>
            {alcoholicCocktailsItems.map((item) => (
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
               {/* <div className={styles.dishListItemManagement}>

                  <span className={styles.dishListItemWeigth}>
                    <td>{item.вага}</td>
                  </span>

                  <span className={styles.dishTablePrice}>
                    <td>{item.ціна}</td>
                  </span>

               </div> */}
              </tr>
            ))}
          </tbody>
        </table>

        <table className={styles.dishList}>
       
       <tbody>
       <h3 className={styles.dishListTitle}>Шоти</h3>
         {shotItems.map((item) => (
            <tr key={item.id} className={styles.dishListItem}>
 
            <div className={styles.dishListItemInfo}>

                  <span className={styles.dishListItemCategory}>
                    <td className={styles.dishListItemCategoryDescription}>{item.категорія}</td>
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
                      <span className={styles.dishListRazdelitel}></span>

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

export default AlcoholicCocktails;
