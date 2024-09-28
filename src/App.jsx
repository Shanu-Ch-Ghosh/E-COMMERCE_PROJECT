import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Checkout from "./Component/Checkout";
import Order from "./Component/Order";
import SignIn from "./Component/SignIn";
import FilterProduct from "./Component/FilterProduct";
import ProductDetail from "./Component/ProductDetail";

const App = () => {
  const [order, setOrder] = useState(null);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout setOrder={setOrder} />} />
        <Route path="/order-confirmation" element={<Order order={order} />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/filter-product" element={<FilterProduct />} />
        <Route path="/product-detail/:id" element={<ProductDetail/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
