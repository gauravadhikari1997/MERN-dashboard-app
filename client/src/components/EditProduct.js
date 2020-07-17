import React, { useEffect, useState, useContext } from "react";
import { Link, useParams, withRouter } from "react-router-dom";
import axios from "axios";
import StateContext from "../context/StateContext";
import Loader from "./Loader";
function EditProduct(props) {
  const appState = useContext(StateContext);

  const { id } = useParams();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    if (appState.user.isAdmin) {
      async function getData() {
        const response = await axios.get(`/api/product/${id}`);
        const product = response.data.product;
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setImageUrl(product.image);
        setQuantity(product.quantity);
        setCategory(product.category);
        setIsLoading(false);
      }
      getData();
    } else {
      props.history.push(`/product/${id}`);
    }
  }, [id]);

  async function onFormSubmit(e) {
    e.preventDefault();
    setIsProcessing(true);
    try {
      await axios.put(`/api/product/${id}`, {
        name,
        description,
        price,
        category,
        image: imageUrl,
        quantity,
      });

      setName("");
      setDescription("");
      setPrice("");
      setImageUrl("");
      setQuantity("");
      setCategory("");
      setIsProcessing(false);
      props.history.push(`/product/${id}`);
    } catch (e) {
      console.log(e.message);
    }
  }

  async function onDelete() {
    await axios.delete(`/api/product/${id}`);
    props.history.push(`/`);
  }
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="container py-md-5">
      <Link to={`/product/${id}`}>Back</Link>
      <div className="row align-items-center">
        <div className="col-lg-5 py-3 py-md-5">
          <h1 className="display-3 text-warning">Edit Details</h1>
        </div>
        <div className="col-lg-7 pl-lg-5 pb-3 py-lg-5">
          <form onSubmit={onFormSubmit}>
            <div className="form-group">
              <label htmlFor="name-register" className="text-muted mb-1">
                <small>Name</small>
              </label>
              <input
                id="username-register"
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                className="form-control"
                type="text"
                placeholder="Enter product name"
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Description</small>
              </label>
              <textarea
                id="description-register"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                name="description"
                className="form-control"
                type="text"
                placeholder="Enter description"
                autoComplete="off"
                required
                rows="10"
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Price</small>
              </label>
              <input
                id="price-register"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                name="price"
                className="form-control"
                type="number"
                placeholder="Enter price"
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Category</small>
              </label>
              <input
                id="category-register"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                name="category"
                className="form-control"
                type="text"
                placeholder="Enter category"
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Image Url</small>
              </label>
              <input
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                id="imageUrl-register"
                name="imageUrl"
                className="form-control"
                type="text"
                placeholder="Enter image url"
                autoComplete="off"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="username-register" className="text-muted mb-1">
                <small>Number of quantity</small>
              </label>
              <input
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                id="quantity-register"
                name="quantity"
                className="form-control"
                type="number"
                placeholder="Enter quantity"
                autoComplete="off"
                required
              />
            </div>

            <div className="row">
              <div className="col-6">
                <button
                  onClick={onDelete}
                  type="button"
                  className="py-3 mt-4 btn btn-sm btn-outline-warning btn-block"
                >
                  Delete
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

export default withRouter(EditProduct);
