import React from "react";
import { Link } from "react-router-dom";

function AddProduct() {
  return (
    <div className="container py-md-5">
      <Link to="/">Back</Link>
      <div className="row align-items-center">
        <div className="col-lg-5 py-3 py-md-5">
          <h1 className="display-3 text-warning">Edit Details</h1>
        </div>
        <div className="col-lg-7 pl-lg-5 pb-3 py-lg-5">
          <form>
            <div className="form-group">
              <label htmlFor="name-register" className="text-muted mb-1">
                <small>Name</small>
              </label>
              <input
                id="username-register"
                name="name"
                className="form-control"
                type="text"
                placeholder="Enter product name"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Description</small>
              </label>
              <input
                id="description-register"
                name="description"
                className="form-control"
                type="text"
                placeholder="Enter description"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Price</small>
              </label>
              <input
                id="price-register"
                name="price"
                className="form-control"
                type="tel"
                placeholder="Enter price"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Category</small>
              </label>
              <input
                id="category-register"
                name="category"
                className="form-control"
                type="text"
                placeholder="Enter category"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Image Url</small>
              </label>
              <input
                id="imageUrl-register"
                name="imageUrl"
                className="form-control"
                type="text"
                placeholder="Enter image url"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Number of quantity</small>
              </label>
              <input
                id="quantity-register"
                name="quantity"
                className="form-control"
                type="tel"
                placeholder="Enter quantity"
                autoComplete="off"
              />
            </div>

            <div className="row">
              <div className="col-6">
                <button
                  type="button"
                  className="py-3 mt-4 btn btn-sm btn-outline-warning btn-block"
                >
                  Delete Product
                </button>
              </div>
              <div className="col-6">
                <button
                  type="submit"
                  className="py-3 mt-4 btn btn-sm btn-outline-warning btn-block"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
