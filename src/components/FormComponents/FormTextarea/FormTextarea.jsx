import './FormTextarea'

const FormTextarea = ({ label, value = "", setValue, error = "" }) => {
  return (
    <div className="textfield">
      <label className="textfield__label">{label}</label>
      <textarea
        type="text"
        placeholder={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {error !== "" && <p className="textfield__error">{error}</p>}
    </div>
  );
};

export default FormTextarea;
