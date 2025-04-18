import React from 'react';
import PropTypes from 'prop-types';
import './RadioButtonSelection.scss';

const RadioButtonSelection = ({ checked, onChange, error = "" }) => {
  return (
    <div className="radio-button">
      <div className="radio-button-selection__option">
        <input
          type="radio"
          id="instock"
          name="stockstatus"
          value="In Stock"
          checked={checked === 'In Stock'}
          onChange={onChange} 
          aria-checked={checked === 'In Stock'}
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
          onChange={onChange}
          aria-checked={checked === 'Out of Stock'}
        />
        <label htmlFor="outofstock">Out of Stock</label>
      </div>
      {error && <p className="radio-button__error">{error}</p>}
    </div>
  );
};

RadioButtonSelection.propTypes = {
  checked: PropTypes.oneOf(['In Stock', 'Out of Stock']).isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default RadioButtonSelection;
