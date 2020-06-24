import React from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import ProductList from "./ProductList";
import Product from "./Product";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Product />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
