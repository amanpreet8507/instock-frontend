import "./InventoryPage.scss";
import Card from "../../components/Card/Card";
import InventoryCardList from "../../components/InventoryCardList/InventoryCardList";
import DualHeader from "../../components/DualHeader/DualHeader";
import InventoryTableList from "../../components/InventoryTableList/InventoryTableList";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Header from "../../components/Header/Header";
const InventoryPage = () => {
  const [listData, setListData] = useState([]);
  const { id } = useParams();
  {
    /****************** Fuction to fetch Inventory List Array ********************/
  }
  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/inventories");
    const response2 = await axios.get(`http://localhost:8080/warehouses`);
    const data1 = response.data.map((item) => item.warehouse_id);
    const data2 = response2.data.map((item) => item.id);
    // Compare the arrays and append if equal
    const combinedResult = [];
    data1.forEach((item1) => {
      if (data2.includes(item1)) {
        combinedResult.push(item1);
      }
    });
    // Respond with the combined result
    console.log(combinedResult);

    const fetchedList = response.data;
    setListData(fetchedList);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Header />
      <main className="app__container">
        <Card>
          <DualHeader
            pageAbout="Inventories"
            formFieldText="Search..."
            buttonText="+ Add Inventory Item"
            link="/inventories/add"
          />
          <InventoryCardList inventoryList={listData} />
          <InventoryTableList inventoryList={listData} />
        </Card>
      </main>
    </>
  );
};

export default InventoryPage;
