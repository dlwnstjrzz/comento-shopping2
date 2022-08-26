import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Basket, Product } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
