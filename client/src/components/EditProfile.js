import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, withRouter } from "react-router-dom";
import axios from "axios";
import DispatchContext from "../context/DispatchContext";
import Loader from "./Loader";

function EditProfile(props) {
  const appDispatch = useContext(DispatchContext);

  const { id } = useParams();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);
  useEffect(() => {
    async function getData() {
      const response = await axios.get(`/api/user/${id}`);
      const user = response.data.user;
      setUsername(user.name);
      setPassword(user.password);
      setMobile(user.mobile);
      setEmail(user.email);
      setAddress(user.address);
      setIsLoading(false);
    }
    getData();
  }, [id]);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsProcessing(true);
    try {
      await axios.put(`/api/user/${id}`, {
        name: username,
        password,
        mobile,
        email,
        address,
      });
      appDispatch({ type: "UPDATE", payload: { username, address } });
      setIsProcessing(false);
      props.history.push(`/account/${id}`);
    } catch (e) {
      console.log(e.message);
    }
  }

  async function onDelete() {
    try {
      await axios.delete(`/api/user/${id}`);
      appDispatch({ type: "LOG_OUT" });
      props.history.push(`/`);
    } catch (e) {
      console.log(e.message);
    }
  }
  if (isLoading) {
    return <Loader />;
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
                autoComplete="off"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                id="mobile-register"
                name="mobile"
                className="form-control"
                type="tel"
                value={mobile}
                autoComplete="off"
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                id="email-register"
                name="email"
                className="form-control"
                type="email"
                value={email}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
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
                autoComplete="off"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <button
                  onClick={onDelete}
                  type="button"
                  className="py-3 mt-4 btn btn-sm btn-outline-warning btn-block"
                >
                  Delete Account
                </button>
              </div>

              <div className="col-6">
                {isProcessing ? (
                  <button
                    className="py-3 mt-4 btn btn-sm btn-outline-warning btn-block"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="py-3 mt-4 btn btn-sm btn-outline-warning btn-block"
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(EditProfile);
