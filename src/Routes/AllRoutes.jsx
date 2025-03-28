import HomePage from "../pages/HomePage";
import Category from "../pages/Category";
import AboutUs from "../pages/AboutUs";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";


import { Route, Routes } from "react-router-dom";

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/category" element={<Category />} />
      <Route path="/product" element={<ProductList />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
}
