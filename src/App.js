import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage";
import InventoryPage from "./pages/InventoryPage";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<WarehousesPage />}/>
          <Route path="/warehouses" element={<WarehousesPage />}/>

          <Route path="/inventory" element={<InventoryPage/>}/>
          <Route path="/warehouses/:id" element={<InventoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
