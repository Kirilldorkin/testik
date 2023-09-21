import React, { useState } from 'react';

const CustomCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={`custom-checkbox ${isChecked ? 'checked' : ''}`}>
      <label className="container">
        <input type="checkbox" onClick={toggleCheckbox} />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default CustomCheckbox;
