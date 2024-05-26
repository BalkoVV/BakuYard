import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as ToMenuIcon } from 'images/toMenuIcon.svg';
import menuChampagneData from "services/dataWines/champagne.json";
import menuUkrainianWineData from "services/dataWines/ukrainianWine.json";
import menuItalianWineData from "services/dataWines/italianWine.json";
import menuGeorgianWineData from "services/dataWines/georgianWine.json";

import styles from 'components/MenuComponents/menuStyle.module.css';

import wineMenu1 from 'images/wineCardMenu.svg';
import wineMenu2 from 'images/wineCardMenu.svg';

export const Wines = () => {
  // const { cartItems } = useContext(CartContext);

  const [champagneItems, setChampagneItems] = useState([]);
  const [ukrainianWineItems, setUkrainianWineItems] = useState([]);
  const [italianWineItems, setItalianWineItems] = useState([]);
  const [georgianWineItems, setGeorgianWineItems] = useState([]);

  useEffect(() => {

    
    const contentElements = document.querySelectorAll(`.${styles.fades}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '.9'; 
      }, 10 * index); 
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  
  useEffect(() => {
    setChampagneItems(menuChampagneData);
  }, []);

  useEffect(() => {
    setUkrainianWineItems(menuUkrainianWineData);
  }, []);

  useEffect(() => {
    setItalianWineItems(menuItalianWineData);
  }, []);

  useEffect(() => {
    setGeorgianWineItems(menuGeorgianWineData);
  }, []);
  

  // const updateChampagneButtonState = (itemId) => {
  //   setChampagneItems(champagneItems.map(item => {
  //     if (item.id === itemId) {
  //       return { ...item, alreadyAdded: false };
  //     }
  //     return item;
  //   }));
  // };

  // const updateUkrainianWineButtonState = (itemId) => {
  //   setUkrainianWineItems(ukrainianWineItems.map(item => {
  //     if (item.id === itemId) {
  //       return { ...item, alreadyAdded: false };
  //     }
  //     return item;
  //   }));
  // };

  // const updateGeorgianWineButtonState = (itemId) => {
  //   setGeorgianWineItems(georgianWineItems.map(item => {
  //     if (item.id === itemId) {
  //       return { ...item, alreadyAdded: false };
  //     }
  //     return item;
  //   }));
  // };

  // const updateItalianWineButtonState = (itemId) => {
  //   setItalianWineItems(italianWineItems.map(item => {
  //     if (item.id === itemId) {
  //       return { ...item, alreadyAdded: false };
  //     }
  //     return item;
  //   }));
  // };

  return (
    <div className={styles.dishPage}>
      <div className={styles.discriptionBox}>
          <h1 className={styles.dishTitle}>Вино</h1> 

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
         src={wineMenu1}
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
         src={wineMenu2}
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

      

         <table className={styles.dishList}>
          <h3 className={styles.dishListTitle}>Українські вина</h3>
 
          <tbody>
            {ukrainianWineItems.map((item) => (
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
          <h3 className={styles.dishListTitle}>Грузинські вина</h3>
 
          <tbody>
            {georgianWineItems.map((item) => (
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
          <h3 className={styles.dishListTitle}>Італійські вина</h3>
 
          <tbody>
            {italianWineItems.map((item) => (
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
          <h3 className={styles.dishListTitle}>Шампанське</h3>
 
          <tbody>
            {champagneItems.map((item) => (
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
        </div>
      </div>
    </div>
  );
};

export default Wines;
