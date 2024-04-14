// AddButton.jsx

import React, { useState } from 'react';

import styles from 'components/MenuComponents/AddButton/AddButton.module.css';
const AddButton = ({ onClick, alreadyAdded }) => {
  
  const [added, setAdded] = useState(alreadyAdded);

  const handleClick = () => {
    onClick();
    setAdded(true);
  };

  return (

    <div onClick={handleClick} disabled={added} className={styles.addsButton}>
       {added ? 'Added' : '+'}
    </div>

  );
};

export default AddButton;





