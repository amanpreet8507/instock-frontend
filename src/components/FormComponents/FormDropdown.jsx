const FormDropdown = ({ label, value, options, setValue }) => {
  return (
    <div className="textfield">
      <label className="textfield__label">{label}</label>
      <select
        id="inventory"
        value={value}
        onChange={(e) => setValue(e.target.value)}
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
    </div>
  );
};

export default FormDropdown;
