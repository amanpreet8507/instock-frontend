import React, { useState } from 'react';

const CategoryDropdown = ({ label, value, options, setValue, error = "" }) => {
  //const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="textfield">
      <label className="textfield__label">{label}</label>
      <select
        id="inventory"
        value={value}
        onChange={handleChange}
      >
        <option className="textfield__option" value="">
          Select...
        </option>
        {options.map((option, index) => (
          <option className="textfield__option" key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error !== "" && <p className="textfield__error">{error}</p>}
    </div>
  );
};

export default CategoryDropdown;
