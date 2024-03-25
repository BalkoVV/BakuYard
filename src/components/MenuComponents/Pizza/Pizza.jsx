// Pizza.jsx
import React, { useEffect, useState, useContext } from "react";
import menuData from "services/pizza.json";
import AddButton from 'components/MenuComponents/AddButton/AddButton';
import CartContext from "components/CartProvider/CartProvider";

const Pizza = () => {
  const { addToCart, cartItems } = useContext(CartContext);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(menuData);
  }, []);

  return (
    <div>
      <h1>Pizza</h1>
      <table>
        <thead>
          <tr>
            {/* <th>ID</th> */}
            {/* <th>Назва</th> */}
            {/* <th>Об'єм</th> */}
            {/* <th>Ціна</th> */}
            {/* <th>Дія</th> */}
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id}>
              {/* <td>{item.id}</td> */}
              <td>{item.назва}</td>
              <td>{item.обєм}</td>
              <td>{item.ціна}</td>
              <td>
                <AddButton
                  onClick={() => addToCart(item)}
                  alreadyAdded={cartItems.some(cartItem => cartItem.id === item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pizza;
