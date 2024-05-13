// Fish.jsx

import React, { useEffect, useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import AddButton from 'components/MenuComponents/AddButton/AddButton';

import { ReactComponent as ToMenuIcon } from 'images/left.svg';

import { CartContext } from "components/CartProvider/CartProvider";




import fishData from "services/dataComboSets/fish.json";
import styles from 'components/MenuComponents/menuStyle.module.css';



export const Fish = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [fishItems, setFishItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  
  useEffect(() => {
    setFishItems(fishData);
  }, []);

  

  useEffect(() => {
    const contentElements = document.querySelectorAll(`.${styles.fades}`);
    contentElements.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = '.9'; 
      }, 10 * index); 
    });
  }, []);

  const updateButtonState = (itemId) => {
    setFishItems(fishItems.map(item => {
      if (item.id === itemId) {
        return { ...item, alreadyAdded: false };
      }
      return item;
    }));
  };

  return (
    <div className={styles.dishPage}>
            <div className={styles.discriptionBox}>
              <h1 className={styles.dishTitle}>Риба</h1> 

              <div className={styles.toMenuButton}>
                <NavLink to="/menu" className={styles.toMenuLink}>
                  <ToMenuIcon className={styles.toMenuIcon}/>
                  <h1 className={styles.toMenuDescription}>до Меню</h1>
                </NavLink>
              </div>

            </div>
            
      <div className={styles.dishPageContainer}>

        <div className={styles.dishPageBox}>

        
        

          <table className={styles.dishList}>
          
            <tbody>
              {fishItems.map((item) => (
              <tr key={item.id} className={styles.dishListItem}>
                
                 <div className={styles.dishListItemInfo}>

                    {/* <span className={styles.dishListItemCategory}>
                      <td>{item.категорія}</td>
                    </span>
                   */}
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

export default Fish;





