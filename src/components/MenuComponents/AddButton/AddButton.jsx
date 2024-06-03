// // AddButton.jsx

// import React, { useState } from 'react';

// import styles from 'components/MenuComponents/AddButton/AddButton.module.css';
// const AddButton = ({ onClick, alreadyAdded }) => {
  
//   const [added, setAdded] = useState(alreadyAdded);

//   const handleClick = () => {
//     onClick();
//     setAdded(true);
//   };

//   return (

//     <div 
//       onClick={handleClick} 
//       disabled={added} 
//       className={`${styles.addButton} ${added ? styles.added : styles.notAdded}`}
//     >
//       {added ? '✓' : '+'}
//     </div>



//   );
// };

// export default AddButton;




// AddButton.jsx

import React, { useState } from 'react';
import styles from 'components/MenuComponents/AddButton/AddButton.module.css';

import PlusIcon from 'images/plus2.svg';
import CheckIcon from 'images/check.svg';

const AddButton = ({ onAdd, onRemove, alreadyAdded }) => {
  const [added, setAdded] = useState(alreadyAdded);

  const handleClick = () => {
    if (added) {
      onRemove();
      setAdded(false);
    } else {
      onAdd();
      setAdded(true);
    }
  };

  return (
    // <div onClick={handleClick} className={`${styles.addButton} ${added ? styles.added : ''}`}>
    //   {added ? '✓' : '+'}
    // </div>

    <div onClick={handleClick} className={`${styles.addButton} ${added ? styles.added : ''}`}>
    {added ? <img src={CheckIcon} alt="Check" /> : <img src={PlusIcon} alt="Plus" />}
  </div>
  );
};

export default AddButton;

