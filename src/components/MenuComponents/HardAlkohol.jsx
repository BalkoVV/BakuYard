import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// import AddButton from 'components/MenuComponents/AddButton/AddButton';
// import CartContext from "components/CartProvider/CartProvider";

// import { ReactComponent as BasketIcon } from 'images/delivery.svg';
// import ToMenuButton from "components/ToMenuButton/ToMenuButton";
import { ReactComponent as ToMenuIcon } from 'images/toMenuIcon.svg';



import menuBrandyData from "services/dataHardAlkohol/brandy.json";
// import menuCognacData from "services/dataHardAlkohol/cognac.json";
import menuGinData from "services/dataHardAlkohol/gin.json";
import menuLiqueursData from "services/dataHardAlkohol/liqueurs.json";
import menuWhiskeyData from "services/dataHardAlkohol/whiskey.json";
import menuVodkaData from "services/dataHardAlkohol/vodka.json";
import menuVermouthData from "services/dataHardAlkohol/vermouth.json";
import menuTequilaData from "services/dataHardAlkohol/tequila.json";
import menuRumData from "services/dataHardAlkohol/rum.json";
import menuShotData from "services/dataHardAlkohol/shot.json";


import styles from 'components/MenuComponents/menuStyle.module.css';

import alcoholMenu1 from 'images/alcoholCardMenu.svg';
import alcoholMenu2 from 'images/alcoholCardMenu.svg';



export const HardAlkohol = () => {
  // const { cartItems } = useContext(CartContext);

  const [brandyItems, setBrandyItems] = useState([]);
//   const [cognacItems, setCognacItems] = useState([]);
  const [ginItems, setGinItems] = useState([]);
  const [liqueursItems, setLiqueursItems] = useState([]);
  const [whiskeyItems, setWhiskeyItems] = useState([]);
  const [vodkaItems, setVodkaItems] = useState([]);
  const [vermouthItems, setVermouthItems] = useState([]);  
  const [tequilaItems, setTequilaItems] = useState([]); 
  const [rumItems, setRumItems] = useState([]); 
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
    setBrandyItems(menuBrandyData);
  }, []);

//   useEffect(() => {
//     setCognacItems(menuCognacData);
//   }, []);

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

 useEffect(() => {
   setShotItems(menuShotData);
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


      <table className={styles.dishTableList}>
            <thead>
              <tr>
              <h3>Бренді</h3>
              </tr>
            </thead>
            <tbody>
              {brandyItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  <td  className={styles.dishTableСategory}>{item.категорія}</td>
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  <td  className={styles.dishTableType}>{item.вид}</td>

                  <td  className={styles.dishTableWeigth50}>{item.вага50}</td>
                  <td  className={styles.dishTablePrice50}>{item.ціна50}</td>

                  <td  className={styles.dishTableWeigth100}>{item.вага100}</td>
                  <td  className={styles.dishTablePrice100}>{item.ціна100}</td>

                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                </tr>
              ))}
            </tbody>
          </table>



          {/* <table className={styles.dishTableList}>
            <thead>
              <tr>
              <h3>Коньяк</h3>
              </tr>
            </thead>
            <tbody>
              {cognacItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  <td  className={styles.dishTableСategory}>{item.категорія}</td>
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  <td  className={styles.dishTableType}>{item.тип}</td>

                  <td  className={styles.dishTableWeigth50}>{item.вага50}</td>
                  <td  className={styles.dishTablePrice50}>{item.ціна50}</td>

                  <td  className={styles.dishTableWeigth100}>{item.вага100}</td>
                  <td  className={styles.dishTablePrice100}>{item.ціна100}</td>

                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                </tr>
              ))}
            </tbody>
          </table> */}

          

          <table className={styles.dishTableList}>
            <thead>
              <tr>
              <h3>Лікер</h3>
              </tr>
            </thead>
            <tbody>
              {liqueursItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  <td  className={styles.dishTableСategory}>{item.категорія}</td>
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  <td  className={styles.dishTableType}>{item.вид}</td>

                  <td  className={styles.dishTableWeigth50}>{item.вага50}</td>
                  <td  className={styles.dishTablePrice50}>{item.ціна50}</td>

                  <td  className={styles.dishTableWeigth100}>{item.вага100}</td>
                  <td  className={styles.dishTablePrice100}>{item.ціна100}</td>

                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
          

          <table className={styles.dishTableList}>
            <thead>
              <tr>
              <h3>Віскі</h3>
             
              </tr>
            </thead>
            <tbody>
              {whiskeyItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  <td  className={styles.dishTableСategory}>{item.категорія}</td>
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  <td  className={styles.dishTableType}>{item.вид}</td>

                  <td  className={styles.dishTableWeigth50}>{item.вага50}</td>
                  <td  className={styles.dishTablePrice50}>{item.ціна50}</td>

                  <td  className={styles.dishTableWeigth100}>{item.вага100}</td>
                  <td  className={styles.dishTablePrice100}>{item.ціна100}</td>

                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>

          <table className={styles.dishTableList}>
            <thead>
              <tr>
              <h3>Водка</h3>
             
              </tr>
            </thead>
            <tbody>
              {vodkaItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  <td  className={styles.dishTableСategory}>{item.категорія}</td>
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  <td  className={styles.dishTableType}>{item.вид}</td>

                  <td  className={styles.dishTableWeigth50}>{item.вага50}</td>
                  <td  className={styles.dishTablePrice50}>{item.ціна50}</td>

                  <td  className={styles.dishTableWeigth100}>{item.вага100}</td>
                  <td  className={styles.dishTablePrice100}>{item.ціна100}</td>

                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>

          <table className={styles.dishTableList}>
            <thead>
              <tr>
              <h3>Вермут</h3>
             
              </tr>
            </thead>
            <tbody>
              {vermouthItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  <td  className={styles.dishTableСategory}>{item.категорія}</td>
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  <td  className={styles.dishTableType}>{item.вид}</td>

                  <td  className={styles.dishTableWeigth50}>{item.вага50}</td>
                  <td  className={styles.dishTablePrice50}>{item.ціна50}</td>

                  <td  className={styles.dishTableWeigth100}>{item.вага100}</td>
                  <td  className={styles.dishTablePrice100}>{item.ціна100}</td>

                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>

          <table className={styles.dishTableList}>
            <thead>
              <tr>
              <h3>Текіла</h3>
             
              </tr>
            </thead>
            <tbody>
              {tequilaItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  <td  className={styles.dishTableСategory}>{item.категорія}</td>
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  <td  className={styles.dishTableType}>{item.вид}</td>

                  <td  className={styles.dishTableWeigth50}>{item.вага50}</td>
                  <td  className={styles.dishTablePrice50}>{item.ціна50}</td>

                  <td  className={styles.dishTableWeigth100}>{item.вага100}</td>
                  <td  className={styles.dishTablePrice100}>{item.ціна100}</td>

                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>

          <table className={styles.dishTableList}>
            <thead>
              <tr>
              <h3>Ром</h3>
             
              </tr>
            </thead>
            <tbody>
              {rumItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  <td  className={styles.dishTableСategory}>{item.категорія}</td>
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  <td  className={styles.dishTableType}>{item.вид}</td>

                  <td  className={styles.dishTableWeigth50}>{item.вага50}</td>
                  <td  className={styles.dishTablePrice50}>{item.ціна50}</td>

                  <td  className={styles.dishTableWeigth100}>{item.вага100}</td>
                  <td  className={styles.dishTablePrice100}>{item.ціна100}</td>

                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>

          <table className={styles.dishTableList}>
            <thead>
              <tr>
              <h3>Джин</h3>
             
              </tr>
            </thead>
            <tbody>
              {ginItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  <td  className={styles.dishTableСategory}>{item.категорія}</td>
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  <td  className={styles.dishTableType}>{item.вид}</td>

                  <td  className={styles.dishTableWeigth50}>{item.вага50}</td>
                  <td  className={styles.dishTablePrice50}>{item.ціна50}</td>

                  <td  className={styles.dishTableWeigth100}>{item.вага100}</td>
                  <td  className={styles.dishTablePrice100}>{item.ціна100}</td>

                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                 
                </tr>
              ))}
            </tbody>
          </table>

          <table className={styles.dishTableList}>
            <thead>
              <tr>
              <h3>Шот</h3>
             
              </tr>
            </thead>
            <tbody>
              {shotItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  <td  className={styles.dishTableСategory}>{item.категорія}</td>
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  <td  className={styles.dishTableIngredients}>{item.інгредієнти}</td>
                  <td  className={styles.dishTableType}>{item.вид}</td>
                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                 
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
