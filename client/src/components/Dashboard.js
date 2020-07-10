import React, { useContext } from "react";
import { Link } from "react-router-dom";
import StateContext from "../context/StateContext";

function Dashboard() {
  const appState = useContext(StateContext);
  if (!appState.user.isAdmin) {
    return <h1 className="text-center py-4">Not authorised!</h1>;
  }
  return (
    <div className="container py-md-5">
      <Link to="/">Back</Link>

      <div className="row align-items-center">
        <div className="col-lg-5 py-3 py-md-5">
          <h1 className="display-3 text-warning">Admin Panel</h1>
        </div>
        <div className="col-lg-7 pl-lg-5 pb-3 py-lg-5">
          <Link
            to={`/product/add`}
            className="py-3 mt-4 btn btn-sm btn-warning btn-block"
          >
            Add Product
          </Link>
          <Link to={`/`} className="py-3 mt-4 btn btn-sm btn-warning btn-block">
            Manage Products
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
