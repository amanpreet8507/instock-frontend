import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WarehousesPage from "./pages/WarehousesPage/WarehousesPage";
import Header from "./components/Header/Header";
import AddWarehouse from "./components/AddWarehouse/AddWarehouse";
import EditWarehouse from "./components/EditWarehouse/EditWarehouse";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import Footer from "./components/Footer/Footer";
import EditInventoryPage from "./pages/AddEditInventoryPages/EditInventoryPage";
import AddNewInventoryPage from "./pages/AddEditInventoryPages/AddNewInventoryPage";
import SignUpForm from "./pages/AuthPages/SignUpForm";
import LoginForm from "./pages/AuthPages/LoginForm";
import AuthHeader from "./components/Header/AuthHeader";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        {/* <AuthHeader /> */}
        {/* <main className="app__container"> */}
          <Routes>
            <Route path="/" element={<SignUpForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/warehouses" element={<WarehousesPage />} />
            <Route path="/inventories" element={<InventoryPage />} />
            <Route path="/warehouses/add" element={<AddWarehouse />} />
            <Route
              path="/warehouses/edit/:warehouseID"
              element={<EditWarehouse />}
            />
            <Route path="/inventories/add" element={<AddNewInventoryPage />} />
            <Route
              path="/warehouses/:warehouseID"
              element={<WarehouseDetailsPage />}
            />
            <Route path="/inventories/:id" element={<InventoryDetailsPage />} />
            <Route
              path="/inventories/:id/edit"
              element={<EditInventoryPage />}
            />
          </Routes>
        {/* </main> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
