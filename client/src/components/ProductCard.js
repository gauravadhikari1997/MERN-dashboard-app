import { Link } from "react-router-dom";

function ProductCard() {
  return (
    <div className="col-sm-6 col-md-4 product-item animation-element slide-left-flip-x-y">
      <div className="product-container">
        <div className="row">
          <div className="col-md-12">
            <Link to="/" className="product-image">
              <img
                className="img-fluid"
                src="https://elcopcbonline.com/photos/product/4/176/4.jpg"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-8">
            <h4>
              <Link className="text-decoration-none" to="/">
                Headphone
              </Link>
            </h4>
          </div>
          <div className="col-4">
            <Link to="/" className="small-text text-decoration-none">
              82 reviews
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="product-description">Desctiption of the product. </p>
            <div className="row">
              <div className="col-6">
                <Link
                  to="/"
                  className="btn btn-warning py-0 text-decoration-none"
                  type="button"
                >
                  Buy Now!
                </Link>
              </div>
              <div className="col-6">
                <p className="product-price">$599.00 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
