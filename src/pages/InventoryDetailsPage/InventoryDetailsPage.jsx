import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MainHeader from "../../components/MainHeader/MainHeader";
import Card from "../../components/Card/Card";
import axios from "axios";
import "./InventoryDetailsPage.scss";
import InStockStatus from "../../components/InStockStatus/InStockStatus";
import OutOfStockStatus from "../../components/OutOfStockStatus/OutOfStockStatus";
import EditIcon from "../../components/MainHeader/EditIcon";
import Header from "../../components/Header/Header";

const InventoryDetailsPage = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState("");

  useEffect(() => {
    const fetchInventoryDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/inventories/${id}`
        );
        setInventory(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInventoryDetails();
  }, [id]);

  return (
    <>
      <Header />
      <main className="app__container">
        <Card>
          <div className="card__header">
            {inventory && (
              <MainHeader
                headerTitle={inventory.item_name}
                link="/inventories"
              />
            )}
            <Link to={`/inventories/${id}/edit`}>
              <EditIcon />
            </Link>
          </div>
          <div className="card__container">
            <h4 className="card__h4">ITEM DESCRIPTION</h4>
            <p className="card__p">{inventory.description}</p>
          </div>
          <div className="card__container">
            <h4 className="card__h4">CATEGOTY</h4>
            <p className="card__p">{inventory.category}</p>
          </div>
          <div className="card__container">
            <div className="card__status-quantity">
              <div>
                <h4 className="card__h4">STATUS</h4>
                <div className="card__status">
                  {inventory.status === "In Stock" ? (
                    <InStockStatus />
                  ) : (
                    <OutOfStockStatus />
                  )}
                </div>
              </div>
              <div>
                <h4 className="card__h4">QUANTITY</h4>
                <div className="card__status">{inventory.quantity}</div>
              </div>
            </div>
          </div>
          <div className="card__container">
            <h4 className="card__h4">WAREHOUSE</h4>
            <p className="card__p">{inventory.warehouse_name}</p>
          </div>
        </Card>
      </main>
    </>
  );
};

export default InventoryDetailsPage;
