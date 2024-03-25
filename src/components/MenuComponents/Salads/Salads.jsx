import React, { useEffect, useState } from "react";
import menuData from "services/salads.json";
import AddButton from "../AddButton/AddButton";

const Salads = ({ onAddToOrder }) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(menuData);
  }, []);

  const handleAddToOrder = (menuItem) => {
    onAddToOrder(menuItem);
  };

  return (
    <div>
      <h1>Салати</h1>
      <table>
        <thead>
          <tr>
            <th>Назва</th>
            <th>Об'єм</th>
            <th>Ціна</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id}>
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

export default Salads;
