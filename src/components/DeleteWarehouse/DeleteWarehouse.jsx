import React from "react";
import "./DeleteWarehouse.scss";

const DeleteWarehouse = () => {
  return (
    <section>
      <div>
        <h1>Delete Television inventory item?</h1>
      </div>
      <div>
        <p>
          Please confirm that you'd like to delete Television from the inventory
          list. You won't be able to undo this action.{" "}
        </p>
      </div>
      <section className="button__box">
        <div className="button__box--cancel">
          <p>Cancel</p>
        </div>
        <div className="button__box--delete">
          <p>Delete</p>
        </div>
      </section>
    </section>
  );
};

export default DeleteWarehouse;
