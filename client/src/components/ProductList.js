import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "./ProductCard";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`/api/products`);
      setProducts(response.data);
    }
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row product-list dev">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
