import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, withRouter } from "react-router-dom";
import axios from "axios";
import StateContext from "../context/StateContext";
import DispatchContext from "../context/DispatchContext";
import Loader from "./Loader";

const Product = ({ history }) => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      const response = await axios.get(`/api/product/${id}`);
      setProduct(response.data.product);
      setIsLoading(false);
    }
    getData();
  }, [id]);

  const handleBuy = () => {
    localStorage.setItem("product", JSON.stringify(product));
    appDispatch({ type: "BUY_NOW", payload: product });
    history.push("/cart");
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container">
      <Link to="/">Back</Link>
      <h1>Product Details</h1>

      {console.log(product)}
      <div className="row py-4">
        <div className="col-md-5">
          <div className="row">
            <div className="col-md-12">
              <img
                alt={product.name}
                className=" img-fluid center-block rounded"
                src={product.image}
                style={{ maxHeight: "350px", maxWidth: "350px" }}
              />
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <h3 className="py-2 text-warning">{product.name}</h3>
          <div dangerouslySetInnerHTML={{ __html: product.description }} />
          {product.quantity ? (
            <p className="py-3 text-success">In Stock</p>
          ) : (
            <p className="py-3 text-danger">Out of Stock</p>
          )}
          <div className="row">
            <div className="col ">
              <h4 className=" text-success">
                <i className="fa fa-rupee"></i> {product.price}
              </h4>
            </div>
            <div className="col">
              {appState.user.isAdmin ? (
                <Link
                  to={`/product/${id}/edit`}
                  className="btn btn-warning btn-m center-block"
                  type="button"
                >
                  <i className="fa fa-cart-plus"></i> Edit
                </Link>
              ) : (
                <button
                  disabled={product.quantity === 0 ? true : false}
                  onClick={handleBuy}
                  className="btn btn-warning btn-m center-block"
                >
                  <i className="fa fa-cart-plus"></i> Buy Now
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Product);
