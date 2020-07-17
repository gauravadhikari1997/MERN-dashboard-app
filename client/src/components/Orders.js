import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import StateContext from "../context/StateContext";
import Loader from "./Loader";

function Orders() {
  const appState = useContext(StateContext);
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`/api/user/${appState.user.id}`);
      setOrders(response.data.user.orders);
      setIsLoading(false);
    }
    getData();
  }, [appState.user.id]);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="container py-md-5">
        <Link to={`/account/${appState.user.id}`}>Back</Link>
        <div className="">
          {orders.map((order, index) => {
            return (
              <div key={index} className="shadow-sm p-3 mb-3 bg-white rounded">
                <div className="card" style={{ width: "100%" }}>
                  <div className="row">
                    <div className="col-sm-5 ">
                      <center>
                        <img
                          className="pt-4"
                          src={order.image}
                          style={{ width: "70%" }}
                        />
                      </center>
                    </div>
                    <div className="col-sm-7 ">
                      <div className="card-body">
                        <h4 className="card-title">{order.name}</h4>
                        <p className="card-text">{order.description}</p>

                        <div class="row">
                          <div class="col-sm-6">
                            <h6>Price:</h6>
                            <p className="card-text">{order.price}</p>
                          </div>
                          <div class="col-sm-6">
                            <h6>Quantity:</h6>
                            <p className="card-text">{order.quantity}</p>
                          </div>
                        </div>

                        <a href="#" className="btn btn-warning">
                          View Product
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Orders;
