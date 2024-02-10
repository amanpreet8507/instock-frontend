import "./InventoryPage.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InventoryCardList from "../../components/InventoryCardList/InventoryCardList";
import DualHeader from "../../components/DualHeader/DualHeader";
import InventoryTableList from "../../components/InventoryTableList/InventoryTableList";
import { useEffect, useState } from "react";
import axios from "axios";

const InventoryPage = () => {
  const [listData, setListData] = useState([])
  {/****************** Fuction to fetch Inventory List Array ********************/}
  const fetchData = async() => {
      const response = await axios.get('http://localhost:8080/inventories')
      const fetchedList= response.data
      setListData(fetchedList)
  }
  useEffect(()=> {
    fetchData()
  },[])
  return (
    <>
      <Header />
      <main className="main">
        <DualHeader
          pageAbout="Inventories"
          formFieldText="Search..."
          buttonText="+ Add Inventory Item"
        />
        <InventoryCardList inventoryList={listData}/>
        <InventoryTableList inventoryList={listData} />
      </main>
      <Footer />
    </>
  );
};

export default InventoryPage;
