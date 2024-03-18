import React from 'react';

const OrderReceipt = ({ orderedItems }) => {
  return (
    <div>
      <h2>Чек замовлення</h2>
      <ul>
        {orderedItems.map((item, index) => (
          <li key={index}>
            <span>{item.назва}</span>
            <span>{item.обєм} мл</span>
            <span>{item.ціна} грн</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderReceipt;