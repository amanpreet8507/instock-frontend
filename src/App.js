import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoryDetailsPage from './pages/InventoryDetailsPage/InventoryDetailsPage';
import WarehouseDetailsPage from './pages/WarehouseDetailsPage/WarehouseDetailsPage';
import ItemDetailsPage from './pages/ItemDetailsPage/ItemDetailsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WarehousesPage />} />
          <Route path="/warehouses" element={<WarehousesPage />} />
          <Route path="/inventories" element={<InventoryPage />} />
          <Route path="/warehouses/:id" element={<WarehouseDetailsPage />} />
          <Route path="/inventories/:id" element={<InventoryDetailsPage />} />
          <Route path="/inventories/item" element={<ItemDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
