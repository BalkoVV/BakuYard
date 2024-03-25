// BarbequeMenu.jsx

// BarbequeMenu.jsx
import React, { useEffect, useState } from "react";
import menuData from "services/meat.json";
import AddButton from "../AddButton/AddButton";

const BarbequeMenu = ({ onAddToOrder }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [addedItems, setAddedItems] = useState([]);

  useEffect(() => {
    setMenuItems(menuData);
  }, []);

  useEffect(() => {
    const itemsInLocalStorage = Object.keys(localStorage).map((key) =>
      JSON.parse(localStorage.getItem(key))
    );
    setAddedItems(itemsInLocalStorage);
  }, []);

  const handleAddToOrder = (item) => {
    onAddToOrder(item);
    localStorage.setItem(item.id, JSON.stringify(item));
    setAddedItems([...addedItems, item]);
  };

  return (
    <div>
      <h1>BBQ</h1>
      <table>
        <tbody>
          {menuItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.назва}</td>
              <td>{item.обєм}</td>
              <td>{item.ціна}</td>
              <td>
                {addedItems.some((addedItem) => addedItem.id === item.id) ? null : (
                  <AddButton onClick={() => handleAddToOrder(item)} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BarbequeMenu;

// import React, { useEffect, useState } from "react";
// import menuData from "services/meat.json";
// import AddButton from "../AddButton/AddButton";

// const BarbequeMenu = ({ onAddToOrder }) => {
//   const [menuItems, setMenuItems] = useState([]);
//   const [buttonDisabled, setButtonDisabled] = useState(false);

//   useEffect(() => {
//     setMenuItems(menuData);
//   }, []);

//   const handleAddToOrder = (item) => {
//     onAddToOrder(item);
//     setButtonDisabled(true); // Встановлюємо кнопку в неактивний стан
//   };

//   return (
//     <div>
//       <h1>BBQ</h1>
//       <table>
//         <tbody>
//           {menuItems.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.назва}</td>
//               <td>{item.обєм}</td>
//               <td>{item.ціна}</td>
//               <td>
//                 <AddButton onClick={() => handleAddToOrder(item)} disabled={buttonDisabled} />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default BarbequeMenu;

// import React, { useEffect, useState } from "react";
// import menuData from "services/meat.json";
// import AddButton from "../AddButton/AddButton";

// const BarbequeMenu = ({ onAddToOrder }) => {
//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     setMenuItems(menuData);
//   }, []);

//   const handleAddToOrder = (item) => {
//     onAddToOrder(item);
//   };

//   return (
//     <div>
//       <h1>BBQ</h1>
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

// export default BarbequeMenu;
