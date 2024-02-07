import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
<<<<<<< HEAD
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
=======
import InventoryDetailsPage from './pages/InventoryDetailsPage/InventoryDetailsPage';
import WarehouseDetailsPage from './pages/WarehouseDetailsPage/WarehouseDetailsPage'

>>>>>>> develop

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WarehousesPage />} />
          <Route path="/warehouses" element={<WarehousesPage />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/warehouses/:id" element={<WarehouseDetailsPage />} />
          <Route path="/inventory/:id" element={<InventoryDetailsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
