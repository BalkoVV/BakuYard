// Pizza.jsx


import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
// import ToMenuButton from "components/ToMenuButton/ToMenuButton";
import { ReactComponent as ToMenuIcon } from 'images/left.svg';

import CartContext from "components/CartProvider/CartProvider";

import menuData from "services/dataBakedDishes/pizza.json";
import khachapuriData from "services/dataBakedDishes/khachapuri.json"
import pitaData from "services/dataBakedDishes/pita.json"

// import pizzaMenu1 from 'images/pizzaMenu1.png';
// import pizzaMenu2 from 'images/pizzaMenu2.png';
// import pizzaMenu3 from 'images/pizzaMenu3.png';

// import { ReactComponent as BasketIcon } from 'images/delivery.svg';
import styles from 'components/MenuComponents/menuStyle.module.css';

export const Pizza = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [menuItems, setMenuItems] = useState([]);

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
    setMenuItems(menuData);
  }, []);

  const updateButtonState = (itemId) => {
    setMenuItems(menuItems.map(item => {
      if (item.id === itemId) {
        return { ...item, alreadyAdded: false };
      }
      return item;
    }));
  };

  return (
    <div className={styles.dishPage}>

      <div className={styles.discriptionBox}>
          <h1 className={styles.dishTitle}>З печі</h1> 
          <div className={styles.toMenuButton}>
        <NavLink to="/menu" className={styles.toMenuLink}>
          <ToMenuIcon className={styles.toMenuIcon}/>
          <h1 className={styles.toMenuDescription}>до Меню</h1>
        </NavLink>
      </div>
            </div>

      <div className={styles.dishPageContainer}>

       


        <div className={styles.dishPageBox}>

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
      /> */}

       {/* <img
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
            <h3 className={styles.dishListTitle}>Піца</h3>
            <tbody>
              {menuItems.map((item) => (
              <tr key={item.id} className={styles.dishListItem}>
                
                 <div className={styles.dishListItemInfo}>

                    {/* <span className={styles.dishListItemCategory}>
                      <td>{item.категорія}</td>
                    </span> */}
                  
                  <span className={styles.dishListItemName} >
                      <td className={styles.dishListItemNameDescription}>{item.назва}</td>
                    </span>

                    <span className={styles.dishListItemIngredients}>
                      <td>{item.інгредієнти}</td>
                    </span>

                 </div>

                  
                 <div className={styles.dishListItemManagement}>

                    <span className={styles.dishListItemWeigth}>
                      <td>{item.вага}</td>
                    </span>

                    <span className={styles.dishTablePrice}>
                      <td>{item.ціна}</td>
                    </span>

                    <span className={styles.dishListButtonAddBox}>
                        <td className={styles.dishListButtonAdd}>
                          <AddButton
                            
                            onClick={() => addToCart(item)}
                            alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                            updateButtonState={() => updateButtonState(item.id)}
                          />
                        </td>
                    </span>

                 </div>

                </tr>
              ))}
            </tbody>
          </table>
          

          <table className={styles.dishList}>
            <h3 className={styles.dishListTitle}>Хачапурі</h3>
            <tbody>
              {khachapuriData.map((item) => (
              <tr key={item.id} className={styles.dishListItem}>
                
                 <div className={styles.dishListItemInfo}>

                    {/* <span className={styles.dishListItemCategory}>
                      <td>{item.категорія}</td>
                    </span> */}
                  
                  <span className={styles.dishListItemName} >
                      <td className={styles.dishListItemNameDescription}>{item.назва}</td>
                    </span>

                    <span className={styles.dishListItemIngredients}>
                      <td>{item.інгредієнти}</td>
                    </span>

                 </div>

                  
                 <div className={styles.dishListItemManagement}>

                    <span className={styles.dishListItemWeigth}>
                      <td>{item.вага}</td>
                    </span>

                    <span className={styles.dishTablePrice}>
                      <td>{item.ціна}</td>
                    </span>

                    <span className={styles.dishListButtonAddBox}>
                        <td className={styles.dishListButtonAdd}>
                          <AddButton
                            
                            onClick={() => addToCart(item)}
                            alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                            updateButtonState={() => updateButtonState(item.id)}
                          />
                        </td>
                    </span>

                 </div>

                </tr>
              ))}
            </tbody>
          </table>

          <table className={styles.dishList}>
            <h3 className={styles.dishListTitle}>Хачапурі</h3>
            <tbody>
              {pitaData.map((item) => (
              <tr key={item.id} className={styles.dishListItem}>
                
                 <div className={styles.dishListItemInfo}>

                    {/* <span className={styles.dishListItemCategory}>
                      <td>{item.категорія}</td>
                    </span> */}
                  
                  <span className={styles.dishListItemName} >
                      <td className={styles.dishListItemNameDescription}>{item.назва}</td>
                    </span>

                    <span className={styles.dishListItemIngredients}>
                      <td>{item.інгредієнти}</td>
                    </span>

                 </div>

                  
                 <div className={styles.dishListItemManagement}>

                    <span className={styles.dishListItemWeigth}>
                      <td>{item.вага}</td>
                    </span>

                    <span className={styles.dishTablePrice}>
                      <td>{item.ціна}</td>
                    </span>

                    <span className={styles.dishListButtonAddBox}>
                        <td className={styles.dishListButtonAdd}>
                          <AddButton
                            
                            onClick={() => addToCart(item)}
                            alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                            updateButtonState={() => updateButtonState(item.id)}
                          />
                        </td>
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

export default Pizza;





