import React from "react";

import Product from "./Product";

function ProductList() {
  return (
    <div className="container">
      <div className="row product-list dev">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}

export default ProductList;
