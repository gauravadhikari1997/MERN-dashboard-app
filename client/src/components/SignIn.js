import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import FlashMessage from "./FlashMessage";

function SignIn(props) {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post(`/api/login`, {
      mobile,
      password,
    });
    console.log(response.data);
    setPassword("");
    setMobile("");
    setSubmitted(true);
  }

  return (
    <>
      <div className="container py-md-5">
        <Link to="/">Back</Link>
        <center>
          <FlashMessage
            submitted={submitted}
            message="Voila! successfully signed in"
          />
        </center>

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
              <button
                type="submit"
                className="py-3 mt-4 btn btn-sm btn-outline-warning btn-block"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
