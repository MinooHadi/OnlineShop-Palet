import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  AdminPanelOrders,
  AdminPanelProducts,
  AdminPanelStocks,
} from "../components/pages/adminLayout-pages";
import {
  Card,
  Category,
  Checkout,
  Favorites,
  Home,
  Product,
  Subcategory,
} from "../components/pages/mainLayout-pages";
import {
  AdminLayout,
  LoginLayout,
  MainLayout,
  PaymentLayout,
} from "../layouts";

function GateWay() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/subcategory" element={<Subcategory />} />
          <Route path="/product" element={<Product />} />
          <Route path="/card" element={<Card />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/checkout" element={<Checkout />} />
        </Route>
        <Route path="/adminLogin" element={<LoginLayout />} />
        <Route element={<AdminLayout />}>
          <Route path="/admin/orders" element={<AdminPanelOrders />} />
          <Route path="/admin/stocks" element={<AdminPanelStocks />} />
          <Route path="/admin/products" element={<AdminPanelProducts />} />
        </Route>
        <Route path="/payment" element={<PaymentLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default GateWay;
