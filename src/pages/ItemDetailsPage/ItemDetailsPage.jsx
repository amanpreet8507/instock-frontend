import './ItemDetailsPage.scss';
import Header from "../../components/Header/Header";
import InventoryItemDetails from '../../components/InventoryItemDetails/InventoryItemDetails';

const ItemDetailsPage = () => {
  return (
    <>
    <Header/>
    <div>
     <InventoryItemDetails />
    </div>
    </>
  )
}

export default ItemDetailsPage
