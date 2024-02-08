import React from "react";
import "./TextField.scss";

const TextField = ({label, value="", setData}) => {
  return <div className="textfield">
    <p className="textfield__label">{label}
    </p>
    <input type="text" placeholder={label} value={value} />
  </div>;
};

export default TextField;
