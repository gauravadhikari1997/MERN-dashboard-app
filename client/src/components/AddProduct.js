import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import StateContext from "../context/StateContext";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";

import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function AddProduct(props) {
  const appState = useContext(StateContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  function onEditorStateChange(editorState) {
    setEditorState(editorState);
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    const response = await axios.post(`/api/product`, {
      name,
      description: stateToHTML(editorState.getCurrentContent()),
      price,
      category,
      image: imageUrl,
      quantity,
    });

    setName("");
    setPrice("");
    setImageUrl("");
    setQuantity("");
    setCategory("");
    setEditorState(EditorState.createEmpty());

    props.history.push(`/product/${response.data.product._id}`);
  }

  if (!appState.user.isAdmin) {
    return <h1 className="text-center py-4">Not authorised!</h1>;
  }
  return (
    <div className="container py-md-5">
      <Link to="/admin">Back</Link>
      <div className="row">
        <div className="col-lg-5 py-3 py-md-5">
          <h1 className="display-3 text-warning">Add Product</h1>
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
                <small>Description</small>
              </label>

              <Editor
                toolbar={{
                  inline: { inDropdown: true },
                  list: { inDropdown: true },
                  textAlign: { inDropdown: true },
                  link: { inDropdown: true },
                  history: { inDropdown: true },
                }}
                editorState={editorState}
                wrapperClassName="border"
                editorClassName=""
                onEditorStateChange={onEditorStateChange}
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
                <Link to="/">
                  <button
                    type="button"
                    className="py-3 mt-4 btn btn-sm btn-outline-warning btn-block"
                  >
                    Cancel
                  </button>
                </Link>
              </div>
              <div className="col-6">
                <button
                  type="submit"
                  className="py-3 mt-4 btn btn-sm btn-outline-warning btn-block"
                >
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(AddProduct);
