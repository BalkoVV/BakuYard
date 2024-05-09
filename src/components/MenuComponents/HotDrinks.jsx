// HotDrinks.jsx

import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

// import AddButton from 'components/MenuComponents/AddButton/AddButton';
import ToMenuButton from "components/ToMenuButton/ToMenuButton";

// import CartContext from "components/CartProvider/CartProvider";

import coffeeData from "services/dataHotDrinks/coffee.json";
import teaData from "services/dataHotDrinks/tea.json";

// import { ReactComponent as BasketIcon } from 'images/delivery.svg';
import styles from 'components/MenuComponents/menuStyle.module.css';

export const HotDrinks = () => {
  // const { addToCart, cartItems } = useContext(CartContext);
  // const { cartItems } = useContext(CartContext);

  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0); // Прокрутити сторінку до верхньої частини
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
    window.scrollTo(0, 0); // Прокрутити сторінку до верхньої частини
  }, []);

   useEffect(() => {
    setMenuItems(coffeeData);
  }, []);
 

  // const updateButtonState = (itemId) => {
  //   setMenuItems(menuItems.map(item => {
  //     if (item.id === itemId) {
  //       return { ...item, alreadyAdded: false };
  //     }
  //     return item;
  //   }));
  // };

  return (
    <div className={styles.dishPage}>
       <div className={styles.discriptionBox}>
          <h1 className={styles.dishTitle}>Гарячі напої</h1> 
          <ToMenuButton className={styles.buttonToMenu}/>
      </div>
      <div className={styles.dishPageContainer}>

      <div className={styles.dishPageBox}>
          <table className={styles.dishTableList}>
            <thead>
              <tr>
                <h3>Кава</h3>
            
              </tr>
            </thead>
            <tbody>
              {menuItems.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                  {/* <td>{item.id}</td> */}
                  <td className={styles.dishTableName}>{item.назва}</td>
                  {/* <td className={styles.dishTableType}>{item.тип}</td> */}
                  <td className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  <td className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                  {/* <td className={styles.dishTableButtonAdd}>
                    <AddButton
                      
                      onClick={() => addToCart(item)}
                      alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                      updateButtonState={() => updateButtonState(item.id)}
                    />
                  </td> */}
                </tr>
              ))}
            </tbody>
          </table>

          <table className={styles.dishTableList}>
            <thead>
              <tr>
                <h3>Чай</h3>
                
              </tr>
            </thead>
            <tbody>
              {teaData.map((item) => (
                <tr key={item.id} className={styles.dishTable}>
                
                  <td className={styles.dishTableName}>{item.назва}</td>
                  {/* <td className={styles.dishTableIngredients}>{item.інгредієнти}</td> */}
                  <td className={styles.dishTableWeigthNotDelivery}>{item.вага}</td>
                  <td className={styles.dishTablePriceNotDelivery}>{item.ціна}</td>
                  
                  {/* <td className={styles.dishTableButtonAdd}>
                    <AddButton
                      onClick={() => addToCart(item)}
                      alreadyAdded={cartItems.some((cartItem) => cartItem.id === item.id)}
                      updateButtonState={() => updateButtonState(item.id)}
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

export default HotDrinks;







// import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";

// import AddButton from "../AddButton/AddButton";
// import ToMenuButton from "components/ToMenuButton/ToMenuButton";

// import CartContext from "components/CartProvider/CartProvider";

// import menuData from "services/coffee.json";

// import { ReactComponent as BasketIcon } from 'images/delivery.svg';
// import styles from 'components/MenuComponents/menuStyle.module.css';


// const CoffeeMenu = ({ onAddToOrder }) => {
//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     window.scrollTo(0, 0); 
//   }, []);

//   useEffect(() => {
//     const contentElements = document.querySelectorAll(`.${styles.fades}`);
//     contentElements.forEach((element, index) => {
//       setTimeout(() => {
//         element.style.opacity = '.9'; 
//       }, 30 * index); 
//     });
//   }, []); 

//   useEffect(() => {
//     setMenuItems(menuData);
//   }, []);

//   const handleAddToOrder = (item) => {
//     onAddToOrder(item);
//   };

//   return (
//     <div>
//       <h1>Coffee</h1>
//       <span className={styles.toBasketLinkBox}>
//           <NavLink to="/menu/basket" className={styles.toBasketLink}>
//             <BasketIcon className={`${styles.basketIcon} ${cartItems.length > 0 ? styles.nonEmpty : ''}`}/>
//             {cartItems.length > 0 && <span className={styles.basketBadge}>✓</span>}
//           </NavLink>
//         </span>

//         <ToMenuButton />
//       <table>
//         <tbody>
//           {menuItems.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.назва}</td>
//               <td>{item.обєм}</td>
//               <td>{item.ціна}</td>
//               <td>
//                 <AddButton onClick={() => handleAddToOrder(item)} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
  
//   );
// };

// export default CoffeeMenu;


