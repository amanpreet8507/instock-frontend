import "./RadioButtonSelection.scss"

const RadioButtonSelection = ({ checked, onChange}) => {
  return (
    <div className="textfield">
      <label className="textfield__label">Status</label>
      <div className="radio-button">
        <div className="radio-button__div">
        <input 
            type="radio" 
            id="instock" 
            name="stockstatus" 
            value="1" 
            checked={checked === "1"} 
            onChange={() => onChange("1")}
          />
          <label htmlFor="instock">In Stock</label>
        </div>
        <div className="radio-button__div">
        <input 
            type="radio" 
            id="outofstock" 
            name="stockstatus" 
            value="2" 
            checked={checked === "2"} 
            onChange={() => onChange("2")}
          />          
          <label htmlFor="outofstock">Out of Stock</label>
        </div>
      </div>
    </div>
  );
};

export default RadioButtonSelection;
