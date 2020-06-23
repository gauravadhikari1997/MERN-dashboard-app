import React from "react";

const Footer = () => {
  return (
    <footer class="border-top text-center small text-muted py-3 fixed-bottom">
      <p>
        <a href="/about-us" class="mx-1">
          About Us
        </a>{" "}
        |{" "}
        <a class="mx-1" href="/terms">
          Terms
        </a>{" "}
        |{" "}
        <a class="mx-1" href="/contact">
          Contact
        </a>
      </p>
      <p class="m-0">
        Copyright &copy; 2020{" "}
        <a href="/" class="text-muted">
          Dashboard
        </a>
        . All rights reserved.
      </p>
    </footer>
  );
};
export default Footer;
