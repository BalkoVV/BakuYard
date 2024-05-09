import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// import AddButton from 'components/MenuComponents/AddButton/AddButton';
// import CartContext from "components/CartProvider/CartProvider";

// import { ReactComponent as BasketIcon } from 'images/delivery.svg';
// import ToMenuButton from "components/ToMenuButton/ToMenuButton";

import { ReactComponent as ToMenuIcon } from 'images/left.svg';

import menuChampagneData from "services/dataWines/champagne.json";
import menuUkrainianWineData from "services/dataWines/ukrainianWine.json";
import menuItalianWineData from "services/dataWines/italianWine.json";
import menuGeorgianWineData from "services/dataWines/georgianWine.json";

import styles from 'components/MenuComponents/menuStyle.module.css';

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
    window.scrollTo(0, 0); // Прокрутити сторінку до верхньої частини
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
          <h1 className={styles.toMenuDescription}>до Менюс</h1>
        </NavLink>
      </div>
            </div>
     <div className={styles.dishPageContainer}>


      <div className={styles.dishPageBox}>

      

          <table className={styles.dishTableList}>
            <thead>
              <tr>
              <h3>Українські вина</h3>
              {/* <th>ID</th>
                <th>Назва</th>
                <th>Об'єм</th>
                <th>Ціна</th> */}
              </tr>
            </thead>
            <tbody>
              {ukrainianWineItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  {/* <td  className={styles.dishTableСategory}>{item.категорія}</td> */}
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  <td  className={styles.dishTableType}>{item.тип}</td>
                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                  {/* <td className={styles.dishTableButtonAdd}>
                    <AddButton
                      onClick={() => addToCart(item)}
                      alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                      updateButtonState={() => updateUkrainianWineButtonState(item.id)}
                    />
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>

          

          <table className={styles.dishTableList}>
            <thead>
              <tr>
              <h3>Грузинські вина</h3>
              {/* <th>ID</th>
                <th>Назва</th>
                <th>Об'єм</th>
                <th>Ціна</th> */}
              </tr>
            </thead>
            <tbody>
              {georgianWineItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  {/* <td  className={styles.dishTableСategory}>{item.категорія}</td> */}
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  <td  className={styles.dishTableType}>{item.вид}</td>
                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                  {/* <td className={styles.dishTableButtonAdd}>
                    <AddButton
                      onClick={() => addToCart(item)}
                      alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                      updateButtonState={() => updateGeorgianWineButtonState(item.id)}
                    />
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
          <table className={styles.dishTableList}>
            <thead>
              <tr>
              <h3>Італійські вина</h3>
              {/* <th>ID</th>
                <th>Назва</th>
                <th>Об'єм</th>
                <th>Ціна</th> */}
              </tr>
            </thead>
            <tbody>
              {italianWineItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  {/* <td  className={styles.dishTableСategory}>{item.категорія}</td> */}
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  <td  className={styles.dishTableType}>{item.вид}</td>
                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                  {/* <td className={styles.dishTableButtonAdd}>
                    <AddButton
                      onClick={() => addToCart(item)}
                      alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                      updateButtonState={() => updateItalianWineButtonState(item.id)}
                    />
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>
          <table className={styles.dishTableList}>
            <thead>
              <tr>
              <h3>Шампанське</h3>
              {/* <th>ID</th>
                <th>Назва</th>
                <th>Об'єм</th>
                <th>Ціна</th> */}
              </tr>
            </thead>
            <tbody>
              {champagneItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  {/* <td  className={styles.dishTableСategory}>{item.категорія}</td> */}
                  <td  className={styles.dishTableName}>{item.назва}</td>
                  <td  className={styles.dishTableType}>{item.вид}</td>
                  <td  className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  <td  className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                  {/* <td className={styles.dishTableButtonAdd}>
                    <AddButton
                      onClick={() => addToCart(item)}
                      alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                      updateButtonState={() => updateChampagneButtonState(item.id)}
                    />
                  </td> */}
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
