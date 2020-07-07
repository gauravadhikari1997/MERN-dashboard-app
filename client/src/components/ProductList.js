import React, { useState, useEffect } from "react";
import axios from "axios";

import ProductCard from "./ProductCard";
import Loader from "./Loader";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`/api/products`);
      setProducts(response.data);
      setIsLoading(false);
    }
    getData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }
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
