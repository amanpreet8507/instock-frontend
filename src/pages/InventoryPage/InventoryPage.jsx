import "./InventoryPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InventoryCardList from "../../components/InventoryCardList/InventoryCardList";
import DualHeader from "../../components/DualHeader/DualHeader";
import InventoryTableList from "../../components/InventoryTableList/InventoryTableList";
import { useEffect, useState } from "react";
import {api} from "../../axios/axios";
import {Card} from "../../components/Card/Card"

const InventoryPage = () => {
  const [listData, setListData] = useState([])
  
  {/****************** Fuction to fetch Inventory List Array ********************/}
  const fetchData = async () => {
    const response = await api.get("/api/inventories");
    const fetchedList = response.data;
    console.log(fetchedList);
    setListData(fetchedList);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Card>
        <DualHeader
          pageAbout="Inventories"
          formFieldText="Search..."
          buttonText="+ Add Inventory Item"
        />
        <InventoryCardList inventoryList={listData} />
        <InventoryTableList inventoryList={listData} />
      </Card>
    </>
  );
};

export default InventoryPage;
