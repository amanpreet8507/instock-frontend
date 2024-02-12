import React, { useState, useEffect, useParams } from "react";
import MainHeader from "../../components/MainHeader/MainHeader";
import Card from "../../components/Card/Card";
import axios from "axios";

const InventoryDetailsPage = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState(null);

  useEffect(() => {
    const fetchInventoryDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/inventories/${id}`);
        setInventory(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInventoryDetails();
  }, [id]);

  return (
    <Card>
      <MainHeader headerTitle={inventory.item_name} />
    </Card>
  );
};

export default InventoryDetailsPage;
