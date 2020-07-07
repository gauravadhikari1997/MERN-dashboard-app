import React from "react";

function Loader() {
  return (
    <center className="py-5">
      <div className="spinner-border text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </center>
  );
}

export default Loader;
