import React from "react";

const Product = () => {
  return (
    <div className="container">
      <h1>Product Details</h1>
      <div className="row py-4">
        <div className="col-md-5">
          <div className="row">
            <div className="col-md-12">
              <img
                className=" img-fluid center-block"
                src="https://elcopcbonline.com/photos/product/4/176/4.jpg"
                style={{ maxHeight: "350px", maxWidth: "350px" }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <h1 className="py-2">Lorem Ipsum</h1>
          <p className="py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sollicitudin elit massa. className aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Mauris
            malesuada rutrum magna. Phasellus maximus nunc
          </p>
          <div class="row">
            <div class="col ">
              <h4 className=" text-success">
                <i className="fa fa-dollar"></i> RM 318.00
              </h4>
            </div>
            <div class="col">
              <button
                className="btn btn-warning btn-m center-block"
                type="button"
              >
                <i className="fa fa-cart-plus"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
