import React, { useContext, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import StateContext from "../context/StateContext";
import axios from "axios";

function Cart({ history }) {
  const appState = useContext(StateContext);
  const [counter, setCounter] = useState(1);
  const product = appState.product;

  const handleOrder = async (e) => {
    e.preventDefault();
    const order = {
      ...product,
      price: product.price * counter,
      quantity: counter,
      date: new Date().toLocaleString(),
    };
    try {
      await axios.put(`/api/order`, {
        id: appState.user.id,
        orders: [order],
      });
      await axios.put(`/api/product/${product._id}`, {
        ...product,
        quantity: product.quantity - counter,
      });
      history.push(`/account/${appState.user.id}/orders`);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="container py-md-5">
      <Link to={`/product/${product._id}`}>Back</Link>

      <div className="row align-items-center">
        <div className="col-lg-5 py-3 py-md-5">
          <h1 className="display-3 text-warning">Cart</h1>
        </div>
        <div className="col-lg-7 pl-lg-5 pb-3 py-lg-5">
          <form>
            <div style={{ marginBottom: "15px" }} className="row">
              <div className="col-7 d-flex flex-column justify-content-center">
                <label
                  htmlFor="username-register"
                  className="text-warning mb-1"
                >
                  <h3>{appState.product.name}</h3>
                </label>
              </div>
              <div className="col-5">
                <img
                  className="img-fluid thumbnail rounded float-left"
                  src={appState.product.image}
                  alt="Responsive image"
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
                  if (counter < product.quantity) {
                    return setCounter(counter + 1);
                  }
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
                <i className="fa fa-rupee"></i> {product.price * counter}
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
                {appState.user.id ? (
                  <button
                    onClick={handleOrder}
                    className="py-3 mt-4 btn btn-sm btn-outline-warning btn-block"
                  >
                    Place Order
                  </button>
                ) : (
                  <Link
                    to={"/signin"}
                    className="py-3 mt-4 btn btn-sm btn-outline-warning btn-block"
                  >
                    Login to Buy
                  </Link>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Cart);
