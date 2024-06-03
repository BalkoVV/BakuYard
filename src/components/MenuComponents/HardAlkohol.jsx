import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as ToMenuIcon } from 'images/toMenuIcon.svg';



import menuBrandyData from "services/dataHardAlkohol/brandy.json";
import menuGinData from "services/dataHardAlkohol/gin.json";
import menuLiqueursData from "services/dataHardAlkohol/liqueurs.json";
import menuWhiskeyData from "services/dataHardAlkohol/whiskey.json";
import menuVodkaData from "services/dataHardAlkohol/vodka.json";
import menuVermouthData from "services/dataHardAlkohol/vermouth.json";
import menuTequilaData from "services/dataHardAlkohol/tequila.json";
import menuRumData from "services/dataHardAlkohol/rum.json";



import styles from 'components/MenuComponents/menuStyle.module.css';

import alcoholMenu1 from 'images/alcoholCardMenu.svg';
import alcoholMenu2 from 'images/alcoholCardMenu.svg';



export const HardAlkohol = () => {

  const [brandyItems, setBrandyItems] = useState([]);
  const [ginItems, setGinItems] = useState([]);
  const [liqueursItems, setLiqueursItems] = useState([]);
  const [whiskeyItems, setWhiskeyItems] = useState([]);
  const [vodkaItems, setVodkaItems] = useState([]);
  const [vermouthItems, setVermouthItems] = useState([]);  
  const [tequilaItems, setTequilaItems] = useState([]); 
  const [rumItems, setRumItems] = useState([]); 



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
    setBrandyItems(menuBrandyData);
  }, []);


  useEffect(() => {
    setGinItems(menuGinData);
  }, []);

  useEffect(() => {
    setLiqueursItems(menuLiqueursData);
  }, []);

  useEffect(() => {
   setWhiskeyItems(menuWhiskeyData);
 }, []);

 useEffect(() => {
   setVodkaItems(menuVodkaData);
 }, []);

 useEffect(() => {
   setVermouthItems(menuVermouthData);
 }, []);

 useEffect(() => {
   setTequilaItems(menuTequilaData);
 }, []);

 useEffect(() => {
   setRumItems(menuRumData);
 }, []);



  return (
    <div className={styles.dishPage}>
     <div className={styles.discriptionBox}>
          <h1 className={styles.dishTitle}>Міцний алкоголь</h1> 
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
         src={alcoholMenu1}
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
         src={alcoholMenu2}
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
            <tbody>
            <h3 className={styles.dishListTitle}>Бренді</h3>

            {brandyItems.map((item) => (
            <tr key={item.id} className={styles.dishListItem}>
              
               {/* <div className={styles.dishListItemInfo}>

                  <span className={styles.dishListItemCategory}>
                    <td className={styles.dishListItemCategoryDescription}>{item.категорія}</td>
                  </span>
                
                   <span className={styles.dishListItemName} >
                      <td className={styles.dishListItemNameDescription}>{item.назва}</td>
                    </span>

                  <span className={styles.dishListItemIngredients}>
                    <td className={styles.dishListItemIngredientsDescription}>{item.інгредієнти}</td>
                  </span>
                  

               </div> */}

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

               {/* <div className={styles.dishListItemManagement}>
                
                  <span className={styles.dishListItemWeigth50}>
                    <td  className={styles.dishTableWeigthNotDelivery}>{item.вага50}</td>
                  </span>

                  <span className={styles.dishTablePrice50}>
                    <td  className={styles.dishTablePriceNotDelivery}>{item.ціна50}</td>
                  </span>

                  <span className={styles.dishListItemWeigth100}>
                    <td  className={styles.dishTableWeigthNotDelivery}>{item.вага100}</td>
                  </span>

                  <span className={styles.dishTablePrice100}>
                    <td  className={styles.dishTablePriceNotDelivery}>{item.ціна100}</td>
                  </span>

                  <span className={styles.dishListItemWeigthBottle}>
                    <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  </span>

                  <span className={styles.dishTablePriceBottle}>
                    <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                  </span>

               </div> */}
               <div className={styles.dishListItemManagement}>

               {/* <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={styles.dishListItemWeigthNotAddHard}>
                  <td>{item.вага50}</td>
                </span>

                <span className={styles.dishListItemPriceNotAddHard}>
                  <td>{item.ціна50}</td>
                </span>

               </span> */}

                <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={styles.dishListItemWeigth}>
                  <td>{item.вага50}</td>
                </span>

                <span className={styles.dishListItemPrice}>
                  <td>{item.ціна50}</td>
                </span>

               </span>

               <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={`${styles.dishListItemWeigth} ${styles.dishListItemWeigthNotAddHardCenter}`}>
                  <td>{item.вага100}</td>
                </span>

                <span className={`${styles.dishListItemPrice} ${styles.dishListItemPriceNotAddHardCenter}`}>
                  <td>{item.ціна100}</td>
                </span>

               </span>

               <span className={styles.dishListWeightPriceBoxNotAdd}>

               <span className={styles.dishListItemWeigth}>
                  <td>{item.вага}</td>
                </span>

                <span className={styles.dishListItemPrice}>
                  <td>{item.ціна}</td>
                </span>

               </span>

               

                </div>
              </tr>
            ))}
          </tbody> 
          </table>


          

          <table className={styles.dishList}>
         
            <tbody>
            <h3 className={styles.dishListTitle}>Лікер</h3>
            {liqueursItems.map((item) => (
            <tr key={item.id} className={styles.dishListItem}>
              
              {/* <div className={styles.dishListItemInfo}>

                  <span className={styles.dishListItemCategory}>
                    <td className={styles.dishListItemCategoryDescription}>{item.категорія}</td>
                  </span>
                
                   <span className={styles.dishListItemName} >
                      <td className={styles.dishListItemNameDescription}>{item.назва}</td>
                    </span>

                  <span className={styles.dishListItemIngredients}>
                    <td className={styles.dishListItemIngredientsDescription}>{item.інгредієнти}</td>
                  </span>
                  

               </div> */}

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

              {/* <div className={styles.dishListItemManagement}>

              <span className={styles.dishListItemWeigth50}>
                <td  className={styles.dishTableWeigthNotDelivery}>{item.вага50}</td>
              </span>

              <span className={styles.dishTablePrice50}>
                <td  className={styles.dishTablePriceNotDelivery}>{item.ціна50}</td>
              </span>

              <span className={styles.dishListItemWeigth100}>
                <td  className={styles.dishTableWeigthNotDelivery}>{item.вага100}</td>
              </span>

              <span className={styles.dishTablePrice100}>
                <td  className={styles.dishTablePriceNotDelivery}>{item.ціна100}</td>
              </span>

              <span className={styles.dishListItemWeigthBottle}>
                <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
              </span>

              <span className={styles.dishTablePriceBottle}>
                <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
              </span>

              </div> */}
              <div className={styles.dishListItemManagement}>

               {/* <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={styles.dishListItemWeigthNotAddHard}>
                  <td>{item.вага50}</td>
                </span>

                <span className={styles.dishListItemPriceNotAddHard}>
                  <td>{item.ціна50}</td>
                </span>

               </span>

               <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={`${styles.dishListItemWeigthNotAddHard} ${styles.dishListItemWeigthNotAddHardCenter}`}>
                  <td>{item.вага100}</td>
                </span>

                <span className={`${styles.dishListItemPriceNotAddHard} ${styles.dishListItemPriceNotAddHardCenter}`}>
                  <td>{item.ціна100}</td>
                </span>

               </span>

               <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={styles.dishListItemWeigthNotAddHard}>
                  <td>{item.вага}</td>
                </span>

                <span className={styles.dishListItemPriceNotAddHard}>
                  <td>{item.ціна}</td>
                </span>

               </span> */}
<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={styles.dishListItemWeigth}>
  <td>{item.вага50}</td>
</span>

<span className={styles.dishListItemPrice}>
  <td>{item.ціна50}</td>
</span>

</span>

<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={`${styles.dishListItemWeigth} ${styles.dishListItemWeigthNotAddHardCenter}`}>
  <td>{item.вага100}</td>
</span>

<span className={`${styles.dishListItemPrice} ${styles.dishListItemPriceNotAddHardCenter}`}>
  <td>{item.ціна100}</td>
</span>

</span>

<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={styles.dishListItemWeigth}>
  <td>{item.вага}</td>
</span>

<span className={styles.dishListItemPrice}>
  <td>{item.ціна}</td>
</span>

</span>
               

                </div>
              </tr>
            ))}
          </tbody>
          </table>
          

          <table className={styles.dishList}>

            <tbody>
            <h3 className={styles.dishListTitle}>Віскі</h3>
            {whiskeyItems.map((item) => (
            <tr key={item.id} className={styles.dishListItem}>
              
             {/* <div className={styles.dishListItemInfo}>

                  <span className={styles.dishListItemCategory}>
                    <td className={styles.dishListItemCategoryDescription}>{item.категорія}</td>
                  </span>
                
                   <span className={styles.dishListItemName} >
                      <td className={styles.dishListItemNameDescription}>{item.назва}</td>
                    </span>

                  <span className={styles.dishListItemIngredients}>
                    <td className={styles.dishListItemIngredientsDescription}>{item.інгредієнти}</td>
                  </span>
                  

               </div> */}

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

                {/* <div className={styles.dishListItemManagement}>

                <span className={styles.dishListItemWeigth50}>
                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага50}</td>
                </span>

                <span className={styles.dishTablePrice50}>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна50}</td>
                </span>

                <span className={styles.dishListItemWeigth100}>
                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага100}</td>
                </span>

                <span className={styles.dishTablePrice100}>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна100}</td>
                </span>

                <span className={styles.dishListItemWeigthBottle}>
                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                </span>

                <span className={styles.dishTablePriceBottle}>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                </span>

                </div> */}
                <div className={styles.dishListItemManagement}>

               {/* <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={styles.dishListItemWeigthNotAddHard}>
                  <td>{item.вага50}</td>
                </span>

                <span className={styles.dishListItemPriceNotAddHard}>
                  <td>{item.ціна50}</td>
                </span>

               </span>

               <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={`${styles.dishListItemWeigthNotAddHard} ${styles.dishListItemWeigthNotAddHardCenter}`}>
                  <td>{item.вага100}</td>
                </span>

                <span className={`${styles.dishListItemPriceNotAddHard} ${styles.dishListItemPriceNotAddHardCenter}`}>
                  <td>{item.ціна100}</td>
                </span>

               </span>

               <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={styles.dishListItemWeigthNotAddHard}>
                  <td>{item.вага}</td>
                </span>

                <span className={styles.dishListItemPriceNotAddHard}>
                  <td>{item.ціна}</td>
                </span>

               </span> */}

<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={styles.dishListItemWeigth}>
  <td>{item.вага50}</td>
</span>

<span className={styles.dishListItemPrice}>
  <td>{item.ціна50}</td>
</span>

</span>

<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={`${styles.dishListItemWeigth} ${styles.dishListItemWeigthNotAddHardCenter}`}>
  <td>{item.вага100}</td>
</span>

<span className={`${styles.dishListItemPrice} ${styles.dishListItemPriceNotAddHardCenter}`}>
  <td>{item.ціна100}</td>
</span>

</span>

<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={styles.dishListItemWeigth}>
  <td>{item.вага}</td>
</span>

<span className={styles.dishListItemPrice}>
  <td>{item.ціна}</td>
</span>

</span>

                </div>
              </tr>
            ))}
          </tbody>
          </table>

          <table className={styles.dishList}>
 
            <tbody>
            <h3 className={styles.dishListTitle}>Водка</h3>
            {vodkaItems.map((item) => (
            <tr key={item.id} className={styles.dishListItem}>
              
             {/* <div className={styles.dishListItemInfo}>

                  <span className={styles.dishListItemCategory}>
                    <td className={styles.dishListItemCategoryDescription}>{item.категорія}</td>
                  </span>
                
                   <span className={styles.dishListItemName} >
                      <td className={styles.dishListItemNameDescription}>{item.назва}</td>
                    </span>

                  <span className={styles.dishListItemIngredients}>
                    <td className={styles.dishListItemIngredientsDescription}>{item.інгредієнти}</td>
                  </span>
                  

               </div> */}
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

                <div className={styles.dishListItemManagement}>

               {/* <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={styles.dishListItemWeigthNotAddHard}>
                  <td>{item.вага50}</td>
                </span>

                <span className={styles.dishListItemPriceNotAddHard}>
                  <td>{item.ціна50}</td>
                </span>

               </span>

               <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={`${styles.dishListItemWeigthNotAddHard} ${styles.dishListItemWeigthNotAddHardCenter}`}>
                  <td>{item.вага100}</td>
                </span>

                <span className={`${styles.dishListItemPriceNotAddHard} ${styles.dishListItemPriceNotAddHardCenter}`}>
                  <td>{item.ціна100}</td>
                </span>

               </span>

               <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={styles.dishListItemWeigthNotAddHard}>
                  <td>{item.вага}</td>
                </span>

                <span className={styles.dishListItemPriceNotAddHard}>
                  <td>{item.ціна}</td>
                </span>

               </span> */}
<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={styles.dishListItemWeigth}>
  <td>{item.вага50}</td>
</span>

<span className={styles.dishListItemPrice}>
  <td>{item.ціна50}</td>
</span>

</span>

<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={`${styles.dishListItemWeigth} ${styles.dishListItemWeigthNotAddHardCenter}`}>
  <td>{item.вага100}</td>
</span>

<span className={`${styles.dishListItemPrice} ${styles.dishListItemPriceNotAddHardCenter}`}>
  <td>{item.ціна100}</td>
</span>

</span>

<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={styles.dishListItemWeigth}>
  <td>{item.вага}</td>
</span>

<span className={styles.dishListItemPrice}>
  <td>{item.ціна}</td>
</span>

</span>
               

                </div>
              </tr>
            ))}
          </tbody>
          </table>

          

          <table className={styles.dishList}>
  
            <tbody>
            <h3 className={styles.dishListTitle}>Текіла</h3>
            {tequilaItems.map((item) => (
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

              {/* <div className={styles.dishListItemManagement}>

              <span className={styles.dishListItemWeigth50}>
                <td  className={styles.dishTableWeigthNotDelivery}>{item.вага50}</td>
              </span>

              <span className={styles.dishTablePrice50}>
                <td  className={styles.dishTablePriceNotDelivery}>{item.ціна50}</td>
              </span>

              <span className={styles.dishListItemWeigth100}>
                <td  className={styles.dishTableWeigthNotDelivery}>{item.вага100}</td>
              </span>

              <span className={styles.dishTablePrice100}>
                <td  className={styles.dishTablePriceNotDelivery}>{item.ціна100}</td>
              </span>

              <span className={styles.dishListItemWeigthBottle}>
                <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
              </span>

              <span className={styles.dishTablePriceBottle}>
                <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
              </span>

              </div>       */}
              <div className={styles.dishListItemManagement}>

               {/* <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={styles.dishListItemWeigthNotAddHard}>
                  <td>{item.вага50}</td>
                </span>

                <span className={styles.dishListItemPriceNotAddHard}>
                  <td>{item.ціна50}</td>
                </span>

               </span>

               <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={`${styles.dishListItemWeigthNotAddHard} ${styles.dishListItemWeigthNotAddHardCenter}`}>
                  <td>{item.вага100}</td>
                </span>

                <span className={`${styles.dishListItemPriceNotAddHard} ${styles.dishListItemPriceNotAddHardCenter}`}>
                  <td>{item.ціна100}</td>
                </span>

               </span>

               <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={styles.dishListItemWeigthNotAddHard}>
                  <td>{item.вага}</td>
                </span>

                <span className={styles.dishListItemPriceNotAddHard}>
                  <td>{item.ціна}</td>
                </span>

               </span> */}
<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={styles.dishListItemWeigth}>
  <td>{item.вага50}</td>
</span>

<span className={styles.dishListItemPrice}>
  <td>{item.ціна50}</td>
</span>

</span>

<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={`${styles.dishListItemWeigth} ${styles.dishListItemWeigthNotAddHardCenter}`}>
  <td>{item.вага100}</td>
</span>

<span className={`${styles.dishListItemPrice} ${styles.dishListItemPriceNotAddHardCenter}`}>
  <td>{item.ціна100}</td>
</span>

</span>

<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={styles.dishListItemWeigth}>
  <td>{item.вага}</td>
</span>

<span className={styles.dishListItemPrice}>
  <td>{item.ціна}</td>
</span>

</span>
               

                </div>
              </tr>
            ))}
          </tbody>
          </table>

          <table className={styles.dishList}>
           
            <tbody>
            <h3 className={styles.dishListTitle}>Ром</h3>
            {rumItems.map((item) => (
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

              {/* <div className={styles.dishListItemManagement}>

              <span className={styles.dishListItemWeigth50}>
                <td  className={styles.dishTableWeigthNotDelivery}>{item.вага50}</td>
              </span>

              <span className={styles.dishTablePrice50}>
                <td  className={styles.dishTablePriceNotDelivery}>{item.ціна50}</td>
              </span>

              <span className={styles.dishListItemWeigth100}>
                <td  className={styles.dishTableWeigthNotDelivery}>{item.вага100}</td>
              </span>

              <span className={styles.dishTablePrice100}>
                <td  className={styles.dishTablePriceNotDelivery}>{item.ціна100}</td>
              </span>

              <span className={styles.dishListItemWeigthBottle}>
                <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
              </span>

              <span className={styles.dishTablePriceBottle}>
                <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
              </span>

              </div>   */}
              <div className={styles.dishListItemManagement}>

               {/* <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={styles.dishListItemWeigthNotAddHard}>
                  <td>{item.вага50}</td>
                </span>

                <span className={styles.dishListItemPriceNotAddHard}>
                  <td>{item.ціна50}</td>
                </span>

               </span>

               <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={`${styles.dishListItemWeigthNotAddHard} ${styles.dishListItemWeigthNotAddHardCenter}`}>
                  <td>{item.вага100}</td>
                </span>

                <span className={`${styles.dishListItemPriceNotAddHard} ${styles.dishListItemPriceNotAddHardCenter}`}>
                  <td>{item.ціна100}</td>
                </span>

               </span>

               <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={styles.dishListItemWeigthNotAddHard}>
                  <td>{item.вага}</td>
                </span>

                <span className={styles.dishListItemPriceNotAddHard}>
                  <td>{item.ціна}</td>
                </span>

               </span> */}

<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={styles.dishListItemWeigth}>
  <td>{item.вага50}</td>
</span>

<span className={styles.dishListItemPrice}>
  <td>{item.ціна50}</td>
</span>

</span>

<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={`${styles.dishListItemWeigth} ${styles.dishListItemWeigthNotAddHardCenter}`}>
  <td>{item.вага100}</td>
</span>

<span className={`${styles.dishListItemPrice} ${styles.dishListItemPriceNotAddHardCenter}`}>
  <td>{item.ціна100}</td>
</span>

</span>

<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={styles.dishListItemWeigth}>
  <td>{item.вага}</td>
</span>

<span className={styles.dishListItemPrice}>
  <td>{item.ціна}</td>
</span>

</span>

                </div>
              </tr>
            ))}
          </tbody>
          </table>

          <table className={styles.dishList}>
      
           
            <tbody>
            <h3 className={styles.dishListTitle}>Джин</h3>
            {ginItems.map((item) => (
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

                {/* <div className={styles.dishListItemManagement}>

                <span className={styles.dishListItemWeigth50}>
                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага50}</td>
                </span>

                <span className={styles.dishTablePrice50}>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна50}</td>
                </span>

                <span className={styles.dishListItemWeigth100}>
                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага100}</td>
                </span>

                <span className={styles.dishTablePrice100}>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна100}</td>
                </span>

                <span className={styles.dishListItemWeigthBottle}>
                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                </span>

                <span className={styles.dishTablePriceBottle}>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                </span>

              </div> */}
              <div className={styles.dishListItemManagement}>

               {/* <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={styles.dishListItemWeigthNotAddHard}>
                  <td>{item.вага50}</td>
                </span>

                <span className={styles.dishListItemPriceNotAddHard}>
                  <td>{item.ціна50}</td>
                </span>

               </span>

               <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={`${styles.dishListItemWeigthNotAddHard} ${styles.dishListItemWeigthNotAddHardCenter}`}>
                  <td>{item.вага100}</td>
                </span>

                <span className={`${styles.dishListItemPriceNotAddHard} ${styles.dishListItemPriceNotAddHardCenter}`}>
                  <td>{item.ціна100}</td>
                </span>

               </span>

               <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={styles.dishListItemWeigthNotAddHard}>
                  <td>{item.вага}</td>
                </span>

                <span className={styles.dishListItemPriceNotAddHard}>
                  <td>{item.ціна}</td>
                </span>

               </span> */}

<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={styles.dishListItemWeigth}>
  <td>{item.вага50}</td>
</span>

<span className={styles.dishListItemPrice}>
  <td>{item.ціна50}</td>
</span>

</span>

<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={`${styles.dishListItemWeigth} ${styles.dishListItemWeigthNotAddHardCenter}`}>
  <td>{item.вага100}</td>
</span>

<span className={`${styles.dishListItemPrice} ${styles.dishListItemPriceNotAddHardCenter}`}>
  <td>{item.ціна100}</td>
</span>

</span>

<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={styles.dishListItemWeigth}>
  <td>{item.вага}</td>
</span>

<span className={styles.dishListItemPrice}>
  <td>{item.ціна}</td>
</span>

</span>

                </div>
              </tr>
            ))}
          </tbody>
          </table>
          <table className={styles.dishList}>
       
           
       <tbody>
       <h3 className={styles.dishListTitle}>Вермут</h3>
       {vermouthItems.map((item) => (
       <tr key={item.id} className={styles.dishListItem}>
         
                 {/* <div className={styles.dishListItemInfo}>

                  <span className={styles.dishListItemCategory}>
                    <td className={styles.dishListItemCategoryDescription}>{item.категорія}</td>
                  </span>
                
                   <span className={styles.dishListItemName} >
                      <td className={styles.dishListItemNameDescription}>{item.назва}</td>
                    </span>

                  <span className={styles.dishListItemIngredients}>
                    <td className={styles.dishListItemIngredientsDescription}>{item.інгредієнти}</td>
                  </span>
                  

               </div> */}

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

           {/* <div className={styles.dishListItemManagement}>

           <span className={styles.dishListItemWeigth50}>
             <td  className={styles.dishTableWeigthNotDelivery}>{item.вага50}</td>
           </span>

           <span className={styles.dishTablePrice50}>
             <td  className={styles.dishTablePriceNotDelivery}>{item.ціна50}</td>
           </span>

           <span className={styles.dishListItemWeigth100}>
             <td  className={styles.dishTableWeigthNotDelivery}>{item.вага100}</td>
           </span>

           <span className={styles.dishTablePrice100}>
             <td  className={styles.dishTablePriceNotDelivery}>{item.ціна100}</td>
           </span>

           <span className={styles.dishListItemWeigthBottle}>
             <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
           </span>

           <span className={styles.dishTablePriceBottle}>
             <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
           </span>

           </div> */}
           <div className={styles.dishListItemManagement}>

               {/* <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={styles.dishListItemWeigthNotAddHard}>
                  <td>{item.вага50}</td>
                </span>

                <span className={styles.dishListItemPriceNotAddHard}>
                  <td>{item.ціна50}</td>
                </span>

               </span>

               <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={styles.dishListItemWeigthNotAddHard}>
                  <td>{item.вага100}</td>
                </span>

                <span className={styles.dishListItemPriceNotAddHard}>
                  <td>{item.ціна100}</td>
                </span>

               </span>

               <span className={styles.dishListWeightPriceBoxNotAdd}>

                <span className={`${styles.dishListItemWeigthNotAddHard} ${styles.dishListItemWeigthNotAddHardRight}`}>
                  <td>{item.вага}</td>
                </span>

                <span className={`${styles.dishListItemPriceNotAddHard} ${styles.dishListItemPriceNotAddHardRight}`}>
                  <td>{item.ціна}</td>
                </span>

               </span> */}

<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={styles.dishListItemWeigth}>
  <td>{item.вага50}</td>
</span>

<span className={styles.dishListItemPrice}>
  <td>{item.ціна50}</td>
</span>

</span>

<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={`${styles.dishListItemWeigth} ${styles.dishListItemWeigthNotAddHardCenter}`}>
  <td>{item.вага100}</td>
</span>

<span className={`${styles.dishListItemPrice} ${styles.dishListItemPriceNotAddHardCenter}`}>
  <td>{item.ціна100}</td>
</span>

</span>

<span className={styles.dishListWeightPriceBoxNotAdd}>

<span className={styles.dishListItemWeigth}>
  <td>{item.вага}</td>
</span>

<span className={styles.dishListItemPrice}>
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

export default HardAlkohol;
