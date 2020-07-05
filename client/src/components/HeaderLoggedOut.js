import React from "react";
import { Link } from "react-router-dom";

const HeaderLoggedOut = () => {
  return (
    <nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
      <div className="container">
        <Link className="navbar-brand text-warning " to="/">
          <h3>Dashboard</h3>
        </Link>
        <button
          data-toggle="collapse"
          data-target="#navcol-1"
          className="navbar-toggler"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav mr-auto">
            <li role="presentation" className="nav-item">
              <Link className="nav-link active text-decoration-none" to="/">
                Category
              </Link>
            </li>
          </ul>

          <span className="navbar-text actions">
            <Link className="login text-decoration-none" to="/signin">
              Log In
            </Link>{" "}
            <Link
              className="btn btn-m btn-warning py-0"
              role="button"
              to="/signup"
            >
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </nav>
  );
};
export default HeaderLoggedOut;
