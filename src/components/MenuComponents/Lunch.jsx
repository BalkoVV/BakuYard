// SetMeals.jsx


import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';
// import ToMenuButton from "components/ToMenuButton/ToMenuButton";
import { ReactComponent as ToMenuIcon } from 'images/toMenuIcon.svg';
import CartContext from "components/CartProvider/CartProvider";

import lunchData from "services/dataComboSets/setMeals.json";

// import { ReactComponent as BasketIcon } from 'images/delivery.svg';
import styles from 'components/MenuComponents/menuStyle.module.css';

import lunchMenu1 from 'images/lunchCardMenu.svg';
import lunchMenu2 from 'images/lunchCardMenu.svg';


export const Lunch = () => {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const [lunchItems, setLunchItems] = useState([]);

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
    setLunchItems(lunchData);
  }, []);

  const updateButtonState = (itemId) => {
    setLunchItems(lunchItems.map(item => {
      if (item.id === itemId) {
        return { ...item, alreadyAdded: false };
      }
      return item;
    }));
  };

  return (
    <div className={styles.dishPage}>
         <div className={styles.discriptionBox}>
          <h1 className={styles.dishTitle}>Комплексні обіди</h1> 
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
        src={lunchMenu1}
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
        src={lunchMenu2}
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

     

       
          <table >

            <tbody className={styles.dishLunchList}>
              {lunchItems.map((item) => (
                <tr key={item.id}  >
                
                  <ul className={styles.dishListItemLunch}>
                    <li className={styles.dishListItemLunchPosition}>
                     <span className={styles.dishListItemLunchPositionName}>
                     {/* <td>{item.назва}</td> */}
                     <td className={styles.dishListItemNameDescription}>{item.назва}</td>

                     </span>

                  {/* <span className={styles.dishListItemName} >
                      <td className={styles.dishListItemNameDescription}>{item.назва}</td>
                    </span> */}

                      {/* <span  className={styles.dishListItemLunchPositionManagement}>
                      <span  className={styles.dishListItemLunchPositionInfo}>  
                        <td className={styles.dishListItemPrice}>{item.ціна}</td>

                      <span className={styles.dishListRazdelitel}></span>
                  

                        <td className={styles.dishListItemPrice}>з 11 до 15</td>
                      </span>

                      <span  className={styles.dishListItemLunchPositionAddBox}>
                        <td className={styles.dishListButtonAdd}>
                          <AddButton
                            onAdd={() => addToCart(item)}
                            onRemove={() => {
                              removeFromCart(item.id);
                              updateButtonState(item.id);
                            }}
                            alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                          />
                        </td>
                      </span>
                      </span> */}

                       <div className={styles.dishListItemManagement}>

                    <span className={styles.dishListWeightPriceBox}>
                        <span className={styles.dishListItemWeigth}>
                        <td>{item.ціна}</td>
                        </span>
                        <span className={styles.dishListRazdelitel}></span>

                        <span className={styles.dishListItemPrice}>
                        <td>з 12 до 15</td>
                        </span>
                    </span>

                    <span className={styles.dishListButtonAddBox}>
                        <td className={styles.dishListButtonAdd}>
                        <AddButton
                          onAdd={() => addToCart(item)}
                          onRemove={() => {
                            removeFromCart(item.id);
                            updateButtonState(item.id);
                          }}
                          alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                        />
                        </td>
                    </span>

                 </div>
                   

                    </li>
                    <span className={styles.dishListLunchDelimiterBox}>
                      <span className={styles.dishListLunchDelimiter}></span>
                    </span>
                    <li  className={styles.dishListItemLunchPosition}>
                      <td className={styles.dishListItemNameDescription}>{item.назва_перше}</td>
                      <td className={styles.dishListItemPrice}>{item.вага_перше}</td>
                     
                    </li>
                    <span className={styles.dishListLunchDelimiterBox}>
                      <span className={styles.dishListLunchDelimiter}></span>
                    </span>

                    <li className={styles.dishListItemLunchPosition}>
                      <td className={styles.dishListItemNameDescription}>{item.назва_друге}</td>
                      <td className={styles.dishListItemPrice}>{item.вага_друге}</td>
                    </li>
                    <span className={styles.dishListLunchDelimiterBox}>
                      <span className={styles.dishListLunchDelimiter}></span>
                    </span>
                 
                    <li className={styles.dishListItemLunchPosition}>
                      <td className={styles.dishListItemNameDescription}>{item.назва_салат}</td>
                      <td className={styles.dishListItemPrice}>{item.вага_салат}</td>
                    </li>
                    <span className={styles.dishListLunchDelimiterBox}>
                      <span className={styles.dishListLunchDelimiter}></span>
                    </span>
                  
                    <li className={styles.dishListItemLunchPosition}>
                      <td className={styles.dishListItemNameDescription}>{item.назва_напій}</td>
                      <td className={styles.dishListItemPrice}>{item.вага_напій}</td>
                    </li>
                    <span className={styles.dishListLunchDelimiterBox}>
                      <span className={styles.dishListLunchDelimiter}></span>
                    </span>

                  <li className={styles.dishListItemLunchPosition}> 
                    <td className={styles.dishListItemNameDescription}>{item.назва_хліб}</td>
                    <td className={styles.dishListItemPrice}>{item.вага_хліб}</td>
                  </li>

                  
                  </ul>
                </tr>
              ))}
            </tbody>


          </table>

          

        </div>
      </div>
    </div>
  );
};

export default Lunch;





