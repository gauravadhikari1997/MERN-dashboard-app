import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

import DispatchContext from "../context/DispatchContext";

function SignIn(props) {
  const appDispatch = useContext(DispatchContext);
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsProcessing(true);
    try {
      const response = await axios.post(`/api/login`, {
        password,
        mobile,
      });

      const user = {
        username: response.data.name,
        id: response.data.id,
        isAdmin: response.data.isAdmin,
      };
      localStorage.setItem("id", user.id);
      appDispatch({ type: "LOG_IN", payload: user });
      setPassword("");
      setMobile("");
      setIsProcessing(false);
      props.history.push("/");
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <>
      <div className="container py-md-5">
        <Link to="/">Back</Link>

        <div className="row align-items-center">
          <div className="col-lg-5 py-3 py-md-5">
            <h1 className="display-3 text-warning">Sign In</h1>
          </div>
          <div className="col-lg-7 pl-lg-5 pb-3 py-lg-5">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username-register" className="text-muted mb-1">
                  <small>Mobile</small>
                </label>
                <input
                  autoFocus
                  id="mobile-register"
                  name="mobile"
                  className="form-control"
                  type="tel"
                  placeholder="Enter your mobile number"
                  autoComplete="off"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password-register" className="text-muted mb-1">
                  <small>Password</small>
                </label>
                <input
                  id="password-register"
                  name="password"
                  className="form-control"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {isProcessing ? (
                <button
                  class="py-3 mt-4 btn btn-sm btn-outline-warning btn-block"
                  disabled
                >
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </button>
              ) : (
                <button
                  type="submit"
                  className="py-3 mt-4 btn btn-sm btn-outline-warning btn-block"
                >
                  Sign in
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default withRouter(SignIn);
