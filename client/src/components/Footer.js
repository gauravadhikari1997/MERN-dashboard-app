import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-center small text-muted py-3 ">
      <p>
        <Link to="/about-us" className="mx-1 text-decoration-none">
          About Us
        </Link>{" "}
        |{" "}
        <Link className="mx-1 text-decoration-none" to="/terms">
          Terms
        </Link>{" "}
        |{" "}
        <Link className="mx-1 text-decoration-none" to="/contact">
          Contact
        </Link>
      </p>
      <p className="m-0">
        Copyright &copy; 2020{" "}
        <Link to="/" className="text-warning text-decoration-none">
          Dashboard
        </Link>
        . All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
