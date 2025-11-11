import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/theme.css";
import "./styles/global.css";
import './index.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Login } from "./pages/Login";
import { CartPage } from "./pages/Cart";
import { Button } from "./components/Common/Button";
import UserLayout from "./components/Layout/UserLayout";
import { Product } from "./pages/Product";
import { AdminApp } from "./components/Admin/AdminApp";
import { ProductDetail } from "./components/Product/ProductDetail";
import { Contact } from "./components/Layout/Contact";


export const App = () => {
  return (

    <Router>
      
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="dang-nhap" element={<Login />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="product" element={<Product />} />
             <Route path="lienhe" element={<Contact />} />
            <Route path="product/:id" element={<ProductDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/admin/*" element={<AdminApp />} />
        </Routes>
      
      <Button />
    </Router>
  );
};
