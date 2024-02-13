import "./InventoryPage.scss";
import Card from '../../components/Card/Card';
import InventoryCardList from "../../components/InventoryCardList/InventoryCardList";
import DualHeader from "../../components/DualHeader/DualHeader";
import InventoryTableList from "../../components/InventoryTableList/InventoryTableList";
import { useEffect, useState } from "react";
import axios from "axios";

const InventoryPage = () => {
  const [listData, setListData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/inventories');
      setListData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Card>
        <DualHeader
          link="/inventories/add"
          pageAbout="Inventories"
          formFieldText="Search..."
          buttonText="+ Add Inventory Item"
        />
        <InventoryCardList inventoryList={listData}/>
        <InventoryTableList inventoryList={listData} />
      </Card>
    </>
  );
};

export default InventoryPage;
