import "./TextField.scss";

const TextField = ({label, value="", setValue, error = ""}) => {
  return <div className="textfield">
    <p className="textfield__label">{label}
    </p>
    <input type="text" placeholder={label} value={value} onChange={(e) => setValue(e.target.value)} />
    {error !== "" && <p className="textfield__error">{error}</p>}
  </div>;
};

export default TextField;
