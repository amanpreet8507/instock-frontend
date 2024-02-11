import AddressCard from '../../components/AddressCard/AddressCard'
import MainHeader from '../../components/MainHeader/MainHeader';
import './WarehouseDetailsPage.scss';
import axios from 'axios';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import InventoryCardList from '../../components/InventoryCardList/InventoryCardList';
import InventoryTableList from '../../components/InventoryTableList/InventoryTableList';

const WarehouseDetailsPage = () => {
  const[warehouseInventoryArr, setWarehouseInventoryArr] = useState([])
  const[warehouseAddress, setWarehouseAddress] = useState(null)
  const {warehouseID} = useParams()

{/******************Fetch Warehouse Inventories*****************/}

  const fetchInventories = async () => {
    const response = await axios.get(`http://localhost:8080/warehouses/${warehouseID}/inventories`)
    const warehouseInventory = response.data;
    setWarehouseInventoryArr(warehouseInventory)
  }

{/***********************Fetch Warehouse Address*****************/}

  const fetchWarehouseAddress = async () => {
    const response = await axios.get(`http://localhost:8080/warehouses/${warehouseID}`)
    const addressDetails = response.data;
    setWarehouseAddress(addressDetails);
    console.log(addressDetails)

  }
{/****************** Using fetch functions *****************/}
  useEffect(()=>{
    fetchInventories()
    fetchWarehouseAddress()
  },[])

{/****************** Return elemnts of page *****************/}

  return (
    <>
      <main className="main">
        <MainHeader headerTitle="Washington" />
        {warehouseAddress && <AddressCard location={warehouseAddress[0]}/>}
        {/* <AddressCard address ={warehouseAddress[0].address}
          city={warehouseAddress[0].city}
          country={warehouseAddress[0].country}
          contactName={warehouseAddress[0].contact_name}
          contactPosition={warehouseAddress[0].contact_position}
          contactPhone={warehouseAddress[0].contact_phone}
          contactEmail={warehouseAddress[0].contact_email}/> */}
        <InventoryCardList inventoryList={warehouseInventoryArr}/>
        <InventoryTableList inventoryList={warehouseInventoryArr}/>
      </main>
    </>
  );
};

export default WarehouseDetailsPage;