import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import Header from "./components/Header/Header";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import ItemDetailsPage from "./pages/ItemDetailsPage/ItemDetailsPage";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="app__container">
          <Routes>
            <Route path="/" element={<WarehousesPage />} />
            <Route path="/warehouses" element={<WarehousesPage />} />
            <Route path="/inventories" element={<InventoryPage />} />
            <Route path="/warehouses/add" element={<AddWarehouse />} />
            <Route path="/warehouses/:id" element={<WarehouseDetailsPage />} />
            <Route path="/inventories/:id" element={<InventoryDetailsPage />} />
            <Route path="/inventories/item" element={<ItemDetailsPage />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
