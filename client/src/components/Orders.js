import React from "react";
import { Link } from "react-router-dom";

function Orders() {
  return (
    <>
      <div className="container py-md-5">
        <Link to="/account/:id">Back</Link>
        <div className="row align-items-center">
          <div className="col-lg-5 py-3 py-md-5">
            <h1 className="display-3 text-warning">My Orders</h1>
          </div>
          <div className="col-lg-7 pl-lg-5 pb-3 py-lg-5">
            <ul>
              <li>fdsd</li>
              <li>fsdfds</li>
              <li>fsfdsfs</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
