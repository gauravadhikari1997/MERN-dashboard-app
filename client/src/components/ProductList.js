import React from "react";

import ProductCard from "./ProductCard";

function ProductList() {
  return (
    <div className="container">
      <div className="row product-list dev">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default ProductList;
