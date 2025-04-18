import React, { useState } from 'react';

const WarehouseDropdown = ({ label, value,  setValue, options, error = "" }) => {

  return (
    <div className="textfield">
      <label className="textfield__label">{label}</label>
      <select
        id="warehouse"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        <option className="textfield__option" value="">
          Select...
        </option>
        {options.map((option, index) => (
          <option className="textfield__option" key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error !== "" && <p className="textfield__error">{error}</p>}
    </div>
  );
};

export default WarehouseDropdown;
