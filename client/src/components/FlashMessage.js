import React from "react";
import { CSSTransition } from "react-transition-group";

function FlashMessage(props) {
  return (
    <CSSTransition
      timeout={330}
      in={props.submitted}
      className="search-overlay"
      unmountOnExit
    >
      <div
        className="alert alert-success alert-dismissible fade show"
        role="alert"
      >
        {props.message}
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </CSSTransition>
  );
}

export default FlashMessage;
