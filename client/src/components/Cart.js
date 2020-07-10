import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import StateContext from "../context/StateContext";

function Cart() {
  const appState = useContext(StateContext);
  const [counter, setCounter] = useState(1);
  const product = appState.product;
  const [price, setPrice] = useState(product.price);

  return (
    <div className="container py-md-5">
      <Link to={`/product/${product._id}`}>Back</Link>

      <div className="row align-items-center">
        <div className="col-lg-5 py-3 py-md-5">
          <h1 className="display-3 text-warning">Cart</h1>
        </div>
        <div className="col-lg-7 pl-lg-5 pb-3 py-lg-5">
          <form>
            <div className="row">
              <div className="col d-flex flex-column justify-content-center">
                <label
                  htmlFor="username-register"
                  className="text-warning mb-1"
                >
                  <h3>{appState.product.name}</h3>
                </label>
              </div>
              <div className="col">
                <img
                  className="img-fluid"
                  src={appState.product.image}
                  alt="Responsive image"
                  width="300px"
                  height="200px"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <h5>Delivery Address: </h5>
              </label>{" "}
              {appState.user.address ? (
                <span className="text-muted mb-1">{appState.user.address}</span>
              ) : (
                <Link to={`/account/${appState.user.id}`}>
                  <span className="mb-1">Please add your address! </span>
                </Link>
              )}
            </div>

            <div
              style={{
                WebkitTouchCallout: "none",
                WebkitUserSelect: "none",
                KhtmlUserSelect: "none",
                MozUserSelect: "none",
                msUserSelect: "none",
                userSelect: "none",
              }}
              className="form-group"
            >
              <label htmlFor="username-register" className="text-muted mb-1">
                <h5>
                  Quantity: <span className="text-muted mb-1">{counter}</span>
                </h5>
              </label>{" "}
              <i
                onClick={() => {
                  if (counter < product.quantity)
                    return setCounter(counter + 1);
                }}
                className="fa fa-plus"
              ></i>{" "}
              <i
                onClick={() => {
                  if (counter > 1) return setCounter(counter - 1);
                }}
                className="fa fa-minus"
              ></i>
            </div>
            <div className="form-group">
              <h4 className=" text-success">
                <span className=" text-muted">Total:</span>{" "}
                <i className="fa fa-rupee"></i> {product.price}
              </h4>
            </div>
            <div className="row">
              <div className="col-6">
                <Link
                  to="/"
                  className="py-3 mt-4 btn btn-sm btn-outline-warning btn-block"
                >
                  Cancel
                </Link>
              </div>
              <div className="col-6">
                <button
                  type="submit"
                  className="py-3 mt-4 btn btn-sm btn-outline-warning btn-block"
                >
                  Place Order
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cart;
