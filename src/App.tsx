import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Basket, Product } from "./pages";

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
