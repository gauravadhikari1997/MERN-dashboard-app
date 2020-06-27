import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="container">
      <Link to="/">Back</Link>
      <h1>Product Details</h1>
      <div className="row py-4">
        <div className="col-md-5">
          <div className="row">
            <div className="col-md-12">
              <img
                alt=""
                className=" img-fluid center-block rounded"
                src="https://elcopcbonline.com/photos/product/4/176/4.jpg"
                style={{ maxHeight: "350px", maxWidth: "350px" }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <h1 className="py-2 text-warning">Lorem Ipsum</h1>
          <p className="py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sollicitudin elit massa. className aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Mauris
            malesuada rutrum magna. Phasellus maximus nunc
          </p>
          <div className="row">
            <div className="col ">
              <h4 className=" text-success">
                <i className="fa fa-dollar"></i> RM 318.00
              </h4>
            </div>
            <div className="col">
              <Link to="/product/:id">
                <button
                  className="btn btn-warning btn-m center-block"
                  type="button"
                >
                  <i className="fa fa-cart-plus"></i> Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
