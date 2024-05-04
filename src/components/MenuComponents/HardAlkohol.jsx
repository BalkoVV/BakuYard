import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

// import AddButton from 'components/MenuComponents/AddButton/AddButton';
import CartContext from "components/CartProvider/CartProvider";

import { ReactComponent as BasketIcon } from 'images/delivery.svg';
import ToMenuButton from "components/ToMenuButton/ToMenuButton";

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

export const HardAlkohol = () => {
  const { cartItems } = useContext(CartContext);

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
        element.style.opacity = '.9'; 
      }, 10 * index); 
    });
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
     <div className={styles.dishPageContainer}>
       <h1 className={styles.dishTitle}>Міцний алкоголь</h1>  

      <span className={styles.toBasketLinkBox}>
        <NavLink to="/menu/basket" className={styles.toBasketLink}>
          <BasketIcon className={`${styles.basketIcon} ${cartItems.length > 0 ? styles.nonEmpty : ''}`}/>
          {cartItems.length > 0 && <span className={styles.basketBadge}>✓</span>}
        </NavLink>
      </span>
      
      <ToMenuButton/>

      <div className={styles.dishPageBox}>

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
