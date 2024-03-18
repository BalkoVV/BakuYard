import React, { useEffect, useState } from "react";
import menuData from "services/meat.json";
import AddButton from "../AddButton/AddButton";

const BarbequeMenu = (onAddToOrder) => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    setMenuItems(menuData);
  }, []);

  const handleAddToOrder = (menuData) => {
    onAddToOrder(menuData);
  };

  return (
    <div>
    <h1>BBQ</h1>
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


// const BarbequeMenu = () => {
//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     setMenuItems(menuData);
//   }, []);

//   return (
//     <div>
//       <h1>Меню барбекю</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Назва</th>
//             <th>Об'єм</th>
//             <th>Ціна</th>
//           </tr>
//         </thead>
//         <tbody>
//           {menuItems.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>/
//               <td>{item.назва}</td>
//               <td>{item.обєм}</td>
//               <td>{item.ціна}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

export default BarbequeMenu;
