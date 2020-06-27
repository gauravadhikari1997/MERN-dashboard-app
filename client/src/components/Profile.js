import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="container py-md-5">
      <Link to="/">Back</Link>
      <div className="row align-items-center">
        <div className="col-lg-6 py-3 py-md-5">
          <h1 className="display-3 text-warning">My Account</h1>
          <p>Order list goes here..</p>
        </div>
        <div className="col-lg-6 pl-lg-5 pb-3 py-lg-5">
          <blockquote className="blockquote">
            <p className="mb-0">Name</p>
            <footer className="blockquote-footer">User Name</footer>
          </blockquote>
          <blockquote className="blockquote">
            <p className="mb-0">Email</p>
            <footer className="blockquote-footer">Email</footer>
          </blockquote>
          <blockquote className="blockquote">
            <p className="mb-0">Mobile</p>
            <footer className="blockquote-footer">Mobile</footer>
          </blockquote>
          <blockquote className="blockquote">
            <p className="mb-0">Password</p>
            <footer className="blockquote-footer">********</footer>
          </blockquote>
          <blockquote className="blockquote">
            <p className="mb-0">Address</p>
            <footer className="blockquote-footer">Address</footer>
          </blockquote>
          <button
            type="submit"
            className="py-3 mt-4 btn btn-sm btn-outline-warning btn-block"
          >
            Edit Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
