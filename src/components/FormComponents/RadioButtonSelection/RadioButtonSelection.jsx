import React from 'react';
import PropTypes from 'prop-types';
import './RadioButtonSelection.scss';

const RadioButtonSelection = ({ checked, setValue }) => {

  return (
    <div className="radio-button">
      <div className="radio-button-selection__option">
        <input
          type="radio"
          id="instock"
          name="stockstatus"
          value="In Stock"
          checked={checked === 'In Stock'}
          onChange={setValue}
        />
        <label htmlFor="instock">In Stock</label>
      </div>
      <div className="radio-button-selection__option">
        <input
          type="radio"
          id="outofstock"
          name="stockstatus"
          value="Out of Stock"
          checked={checked === 'Out of Stock'}
          onChange={setValue}
        />
        <label htmlFor="outofstock">Out of Stock</label>
      </div>
    </div>
  );
};

RadioButtonSelection.propTypes = {
  checked: PropTypes.oneOf(['In Stock', 'Out of Stock']).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RadioButtonSelection;
