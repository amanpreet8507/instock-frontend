import React from "react";
import { Link } from "react-router-dom";
import "./CancelButton.scss";

export const CancelButton = (props) => {
  return (
    <Link to={props.link} className="cancelButton__add-div">
        {props.text}
    </Link>
  );
};
