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
      </div>
    </CSSTransition>
  );
}

export default FlashMessage;
