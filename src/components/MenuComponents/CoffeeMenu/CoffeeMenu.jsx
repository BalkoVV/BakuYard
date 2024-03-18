import React, { useEffect, useState } from "react";
import menuData from "services/coffee.json";
import AddButton from "../AddButton/AddButton";
// import styles from '../CoffeeMenu/CoffeeMenu.module.css';

const CoffeeMenu = (onAddToOrder) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(menuData);
  }, []);

  const handleAddToOrder = (menuData) => {
    onAddToOrder(menuData);
  };

  return (
    <div>
    <h1>Coffee</h1>
    <table>
      <tbody>
        {menuItems.map((item) => (
          <tr key={item.id}>
            {/* <td>{item.id}</td> */}
            <AddButton onClick={() => handleAddToOrder(item)} />
            <td>{item.назва}</td>
            <td>{item.обєм}</td>
            <td>{item.ціна}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
};

export default CoffeeMenu;
