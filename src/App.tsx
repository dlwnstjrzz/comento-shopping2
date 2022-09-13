import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Basket, ProductDetail } from "./pages";
import { HashTagItemsContext } from "context/HashTagProvider";

function App() {
  console.log(process.env.PUBLIC_URL);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <HashTagItemsContext>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </HashTagItemsContext>
    </BrowserRouter>
  );
}

export default App;
