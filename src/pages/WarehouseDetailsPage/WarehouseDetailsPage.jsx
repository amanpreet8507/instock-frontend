import AddressCard from "../../components/AddressCard/AddressCard";
import MainHeader from "../../components/MainHeader/MainHeader";
import "./WarehouseDetailsPage.scss";
import axios from "axios";
import { api } from "../../axios/axios";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import InventoryCardList from "../../components/InventoryCardList/InventoryCardList";
import InventoryTableList from "../../components/InventoryTableList/InventoryTableList";
import EditIcon from "../../components/MainHeader/EditIcon";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";

const WarehouseDetailsPage = () => {
  const [warehouseInventoryArr, setWarehouseInventoryArr] = useState([]);
  const [warehouseAddress, setWarehouseAddress] = useState(null);
  const { warehouseID } = useParams();

  {
    /******************Fetch Warehouse Inventories*****************/
  }

  const fetchInventories = async () => {
    const response = await api.get(
      `http://localhost:8080/warehouses/${warehouseID}/inventories`
    );
    const warehouseInventory = response.data;
    setWarehouseInventoryArr(warehouseInventory);
    console.log("inventoryByWarehouseID", warehouseInventory);
  };

  {
    /***********************Fetch Warehouse Address*****************/
  }

  const fetchWarehouseAddress = async () => {
    const response = await axios.get(
      `http://localhost:8080/warehouses/${warehouseID}`
    );
    const addressDetails = response.data;
    setWarehouseAddress(addressDetails);
    console.log("addressDetails: ", addressDetails);
  };

  {
    /****************** Using fetch functions *****************/
  }
  useEffect(() => {
    fetchInventories();
    fetchWarehouseAddress();
  }, []);

  {
    /****************** Return elemnts of page *****************/
  }

  return (
    <>
      <Card>
        <div className="main__header-div">
          <MainHeader
            link="/warehouses"
            headerTitle={
              warehouseAddress ? warehouseAddress.warehouse_name : "Loading..."
            }
          />
          <Link to={`/warehouses/edit/${warehouseID}`}>
            <EditIcon />
          </Link>
        </div>
        <AddressCard location={warehouseAddress} />
        <InventoryCardList inventoryList={warehouseInventoryArr} />
        <InventoryTableList inventoryList={warehouseInventoryArr} />
      </Card>
    </>
  );
};

export default WarehouseDetailsPage;
