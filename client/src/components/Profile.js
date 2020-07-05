import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, withRouter } from "react-router-dom";
import axios from "axios";
import StateContext from "../context/StateContext";

function Profile(props) {
  const appState = useContext(StateContext);
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    if (appState.isLoggedin) {
      async function getData() {
        const response = await axios.get(`/api/user/${id}`);
        setUser(response.data.user);
      }
      getData();
    } else {
      props.history.push("/signin");
    }
  }, [id]);

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
            <footer className="blockquote-footer">{user.name}</footer>
          </blockquote>
          <blockquote className="blockquote">
            <p className="mb-0">Email</p>
            <footer className="blockquote-footer">{user.email}</footer>
          </blockquote>
          <blockquote className="blockquote">
            <p className="mb-0">Mobile</p>
            <footer className="blockquote-footer">{user.mobile}</footer>
          </blockquote>
          <blockquote className="blockquote">
            <p className="mb-0">Password</p>
            <footer className="blockquote-footer">********</footer>
          </blockquote>
          <blockquote className="blockquote">
            <p className="mb-0">Address</p>
            <footer className="blockquote-footer">{user.address}</footer>
          </blockquote>
          <Link
            to={`/account/${id}/edit`}
            className="py-3 mt-4 btn btn-sm btn-outline-warning btn-block"
          >
            Edit Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Profile);
