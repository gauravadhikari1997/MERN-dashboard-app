import React from "react";
import { Link } from "react-router-dom";

function EditProfile() {
  return (
    <div className="container py-md-5">
      <Link to="/account/:id">Back</Link>
      <div className="row align-items-center">
        <div className="col-lg-5 py-3 py-md-5">
          <h1 className="display-3 text-warning">Edit Details</h1>
        </div>
        <div className="col-lg-7 pl-lg-5 pb-3 py-lg-5">
          <form>
            <div className="form-group">
              <input
                id="username-register"
                name="name"
                className="form-control"
                type="text"
                value="your name"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <input
                id="mobile-register"
                name="mobile"
                className="form-control"
                type="tel"
                value="your mobile number"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <input
                id="email-register"
                name="email"
                className="form-control"
                type="email"
                value="you@example.com"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <input
                id="password-register"
                name="password"
                className="form-control"
                type="password"
                value="password"
              />
            </div>
            <div className="form-group">
              <input
                id="address-register"
                name="address"
                className="form-control"
                type="text"
                value="your address"
                autoComplete="off"
              />
            </div>
            <div className="row">
              <div className="col-6">
                <button
                  type="button"
                  className="py-3 mt-4 btn btn-sm btn-outline-warning btn-block"
                >
                  Delete Account
                </button>
              </div>
              <div className="col-6">
                <button
                  type="submit"
                  className="py-3 mt-4 btn btn-sm btn-outline-warning btn-block"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
