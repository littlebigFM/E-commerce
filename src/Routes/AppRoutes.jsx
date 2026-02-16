import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "../Components/Layouts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AppLayout from "../Components/Layouts/AppLayout";
import Profile from "../Pages/Profile/Profile";
// import Product from "../Pages/Products/Product";
import Cart from "../Pages/Cart/Cart";
import Transaction from "../Pages/Transactions/Transaction";
import Customers from "../Pages/Customer/Customers";
import SalesReport from "../Pages/SalesReport/SalesReport";
import Help from "../Pages/Help/Help";
import AccountSettings from "../Pages/AccountSettings/AccountSettings";
import ProductsPage from "../Pages/Products/ProductsPage";
import AddProduct from "../Pages/Products/AddProduct/AddProduct";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth routes (no sidebar/navbar) */}
      <Route element={<AuthLayout />}>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Route>

      {/* Main app routes (with sidebar/navbar) */}
      <Route element={<AppLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ProductsPage" element={<ProductsPage />} />
        <Route path="ProductsPage/AddProduct" element={<AddProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/Transaction" element={<Transaction />} />
        <Route path="/Customers" element={<Customers />} />
        <Route path="/SalesReport" element={<SalesReport />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/AccountSettings" element={<AccountSettings />} />

        {/* ============================================== */}
        {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
