// AddButton.jsx

import React, { useState } from 'react';

const AddButton = ({ onClick, alreadyAdded }) => {
  
  const [added, setAdded] = useState(alreadyAdded);

  const handleClick = () => {
    onClick();
    setAdded(true);
  };

  return (

    <button onClick={handleClick} disabled={added}>
       {added ? 'Added' : '+'}
    </button>

  );
};

export default AddButton;
// import React, { useState, useEffect } from 'react';

// const AddButton = ({ onClick, alreadyAdded, updateButtonState, decreaseQuantity }) => {
  
//   const [added, setAdded] = useState(alreadyAdded);

//   useEffect(() => {
//     setAdded(alreadyAdded);

//     console.log(alreadyAdded);

//   }, [alreadyAdded]);

//   const handleClick = () => {
//     onClick();
//     setAdded(true);
//     if (updateButtonState) {
//       updateButtonState();
//     }
//   };

//   return (
//     <button onClick={handleClick} disabled={added}>
//       {added ? 'Added' : '+'}
//     </button>
//   );
// };

// export default AddButton;

// import React, { useState, useEffect } from 'react';

// const AddButton = ({ onClick, alreadyAdded, updateButtonState, decreaseQuantity }) => {
//   const [added, setAdded] = useState(alreadyAdded);

//   useEffect(() => {
//     setAdded(alreadyAdded);
//   }, [alreadyAdded]);

//   const handleClick = () => {
//     onClick();
//     setAdded(true); // Кнопка буде ввімкнена при кліці, якщо вона ще не була додана до кошика
//     if (updateButtonState) {
//       updateButtonState();
//     }
//   };

//   useEffect(() => {
//     if (decreaseQuantity) {
//       // Якщо передана функція зменшення кількості товару, визиваємо її при видаленні товару з кошика
//       if (!alreadyAdded) {
//         setAdded(false); // Відновлюємо початковий стан кнопки після видалення товару
//       }
//     }
//   }, [alreadyAdded, decreaseQuantity]);

//   return (
//     <button onClick={handleClick} disabled={added}>
//       {added ? 'Added' : '+'}
//     </button>
//   );
// };

// export default AddButton;

// import React, { useState, useEffect } from 'react';

// const AddButton = ({ onClick, alreadyAdded, updateButtonState, decreaseQuantity }) => {
//   const [added, setAdded] = useState(alreadyAdded);

//   useEffect(() => {
//     setAdded(alreadyAdded);
//   }, [alreadyAdded]);

//   useEffect(() => {
//     if (decreaseQuantity) {
//       // Якщо функція decreaseQuantity передана, ми встановлюємо added відповідно до його значення
//       setAdded(!alreadyAdded);
//     }
//   }, [alreadyAdded, decreaseQuantity]);

//   const handleClick = () => {
//     onClick();
//     setAdded(true); // Кнопка буде ввімкнена при кліці, якщо вона ще не була додана до кошика
//     if (updateButtonState) {
//       updateButtonState();
//     }
//   };

//   return (
//     <button onClick={handleClick} disabled={added}>
//       {added ? 'Added' : '+'}
//     </button>
//   );
// };

// export default AddButton;




