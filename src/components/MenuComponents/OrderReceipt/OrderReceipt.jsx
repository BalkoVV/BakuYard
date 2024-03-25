// OrderReceipt.jsx
import React, { useEffect, useState } from "react";

const OrderReceipt = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const itemsInLocalStorage = Object.keys(localStorage).map((key) =>
      JSON.parse(localStorage.getItem(key))
    );
    setOrder(itemsInLocalStorage);
  }, []);

  return (
    <div>
      <h2>Чек замовлення</h2>
      <ul>
        {order.map((item, index) => (
          <li key={index}>
            {item.назва} - Об'єм: {item.обєм} мл, Ціна: {item.ціна} грн
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderReceipt;
