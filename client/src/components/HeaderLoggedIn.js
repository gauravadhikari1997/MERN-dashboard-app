import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";

import DispatchContext from "../context/DispatchContext";
import StateContext from "../context/StateContext";

const HeaderLoggedIn = (props) => {
  const appDispatch = useContext(DispatchContext);
  const appState = useContext(StateContext);

  function handleLogOut() {
    appDispatch({ type: "LOG_OUT" });
    localStorage.removeItem("id");
    props.history.push(`/signin`);
  }
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
          <div className="dropdown">
            <button
              className="btn btn-warning dropdown-toggle"
              type="button"
              data-toggle="dropdown"
            >
              {appState.user.username}
              <span className="caret"></span>
            </button>
            <center>
              <ul className="dropdown-menu">
                <li className="px-3">
                  <Link
                    className="login text-decoration-none"
                    to={`/account/${appState.user.id}`}
                  >
                    My Account
                  </Link>
                </li>
                <li className="px-3">
                  <button
                    onClick={handleLogOut}
                    className="btn btn-m btn-warning py-0"
                  >
                    Sign Out
                  </button>
                </li>
              </ul>
            </center>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default withRouter(HeaderLoggedIn);
