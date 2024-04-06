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
