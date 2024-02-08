import React from "react";
import "./DeleteWarehouse.scss";
import closeButton from "../../assets/icons/close-24px.svg";

const DeleteWarehouse = ({ onDelete, onClose }) => {
  return (
    <section className="overlay">
      <div className="overlay__modal">
        <div onClick={onClose} className="overlay__close">
          <img src={closeButton} />
        </div>
        <div>
          <h1>Delete Television inventory item?</h1>
        </div>
        <div>
          <p>
            Please confirm that you'd like to delete Television from the
            inventory list. You won't be able to undo this action.{" "}
          </p>
        </div>
        <section className="button__box">
          <div onClick={onClose} className="button__box--cancel">
            <p>Cancel</p>
          </div>
          <div className="button__box--delete">
            <p>Delete</p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default DeleteWarehouse;
