// CoffeeMenu.jsx

import React, { useEffect, useState } from "react";
import menuData from "services/coffee.json";
import AddButton from "../AddButton/AddButton";

const CoffeeMenu = ({ onAddToOrder }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(menuData);
  }, []);

  const handleAddToOrder = (item) => {
    onAddToOrder(item);
  };

  return (
    <div>
      <h1>Coffee</h1>
      <table>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.назва}</td>
              <td>{item.обєм}</td>
              <td>{item.ціна}</td>
              <td>
                <AddButton onClick={() => handleAddToOrder(item)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  
  );
};

export default CoffeeMenu;


