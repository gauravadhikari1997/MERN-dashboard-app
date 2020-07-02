import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FlashMessage from "./FlashMessage";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await axios.post(`/api/user`, {
      name: username,
      email,
      password,
      mobile,
    });
    console.log(response.data);
    setUsername("");
    setPassword("");
    setMobile("");
    setEmail("");
    setSubmitted(true);
  }

  return (
    <div className="container py-md-5">
      <Link to="/">Back</Link>
      <FlashMessage
        submitted={submitted}
        message="Voila! successfully signed up"
      />
      <div className="row align-items-center">
        <div className="col-lg-5 py-3 py-md-5">
          <h1 className="display-3 text-warning">Sign Up</h1>
        </div>
        <div className="col-lg-7 pl-lg-5 pb-3 py-lg-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Username</small>
              </label>
              <input
                id="username-register"
                name="name"
                className="form-control"
                type="text"
                placeholder="Enter your name"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
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
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email-register" className="text-muted mb-1">
                <small>Email</small>
              </label>
              <input
                id="email-register"
                name="email"
                className="form-control"
                type="email"
                placeholder="you@example.com"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="py-3 mt-4 btn btn-sm btn-outline-warning btn-block"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
