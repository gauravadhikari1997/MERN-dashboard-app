import React from "react";

const Header = () => {
  return (
    <header className="header-bar bg-primary mb-3">
      <div className="container d-flex flex-column flex-md-row align-items-center p-3">
        <h4 className="my-0 mr-md-auto font-weight-normal">
          <a href="/" className="text-white">
            Dashboard
          </a>
        </h4>
        <div className="flex-row my-3 my-md-0">
          <span className="mr-3 text-light">Category</span>
          <span className="btn mr-2 text-light">Sign In</span>
          <span className="btn mr-2 text-light">Sign Up</span>
        </div>
      </div>
    </header>
  );
};
export default Header;
