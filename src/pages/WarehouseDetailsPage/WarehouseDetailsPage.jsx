import Header from '../../components/Header/Header'
import AddressCard from '../../components/AddressCard/AddressCard'
import MainHeader from '../../components/MainHeader/MainHeader';
import InventoryItemCard from '../../components/InventoryItemCard/InventoryItemCard';
import './WarehouseDetailsPage.scss';
import InventoryTable from '../../components/InventoryTable/InventoryTable';

const WarehouseDetailsPage = () => {
  return (
    <>
      <Header/>
      <main className='main'>
        <MainHeader headerTitle="Washington"/>
        <AddressCard/>
        <InventoryItemCard/>
        <InventoryTable/>
      </main>
    </>
  )
}

export default WarehouseDetailsPage;
