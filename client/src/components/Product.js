import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`/api/product/${id}`);
      setProduct(response.data.product);
    }
    getData();
  }, [id]);

  return (
    <div className="container">
      <Link to="/">Back</Link>
      <h1>Product Details</h1>
      <div className="row py-4">
        <div className="col-md-5">
          <div className="row">
            <div className="col-md-12">
              <img
                alt={product.name}
                className=" img-fluid center-block rounded"
                src={product.image}
                style={{ maxHeight: "350px", maxWidth: "350px" }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <h1 className="py-2 text-warning">{product.name}</h1>
          <p className="py-3">{product.description}</p>
          <div className="row">
            <div className="col ">
              <h4 className=" text-success">
                <i className="fa fa-rupee"></i> {product.price}
              </h4>
            </div>
            <div className="col">
              <button
                className="btn btn-warning btn-m center-block"
                type="button"
              >
                <i className="fa fa-cart-plus"></i> Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
