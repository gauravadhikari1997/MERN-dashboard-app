import React, { useState, useEffect } from "react";
import { Link, useParams, withRouter } from "react-router-dom";
import axios from "axios";

function EditProfile(props) {
  const { id } = useParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`/api/user/${id}`);
      const user = response.data.user;
      setUsername(user.name);
      setPassword(user.password);
      setMobile(user.mobile);
      setAddress(user.address);
      setEmail(user.email);
    }
    getData();
  }, [id]);

  async function handleSubmit(e) {
    try {
      e.preventDefault();
      await axios.put(`/api/user/${id}`, {
        name: username,
        email,
        password,
        mobile,
        address,
      });
      setUsername("");
      setPassword("");
      setMobile("");
      setEmail("");
      setAddress("");
      props.history.push(`/account/${id}`);
    } catch (e) {
      console.log(e.message);
    }
  }

  async function handleDelete() {
    try {
      await axios.delete(`/api/user/${id}`);
      props.history.push("/");
    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <div className="container py-md-5">
      <Link to="/account/:id">Back</Link>
      <div className="row align-items-center">
        <div className="col-lg-5 py-3 py-md-5">
          <h1 className="display-3 text-warning">Edit Details</h1>
        </div>
        <div className="col-lg-7 pl-lg-5 pb-3 py-lg-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                id="username-register"
                name="name"
                className="form-control"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <input
                id="mobile-register"
                name="mobile"
                className="form-control"
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <input
                id="email-register"
                name="email"
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <input
                id="password-register"
                name="password"
                className="form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                id="address-register"
                name="address"
                className="form-control"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                autoComplete="off"
              />
            </div>
            <div className="row">
              <div className="col-6">
                <button
                  onClick={handleDelete}
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

export default withRouter(EditProfile);
