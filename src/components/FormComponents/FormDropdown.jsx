const FormDropdown = ({ label, value, options, onChange }) => {
  return (
    <div className="textfield">
      <label className="textfield__label">{label}</label>
      <select id="inventory" value={value} onChange={onChange}>
        <option className="textfield__option" value="">Select...</option>
        {options.map((option) => (
          <option className="textfield__option" key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormDropdown;
