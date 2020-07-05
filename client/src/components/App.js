import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useImmerReducer } from "use-immer";

import StateContext from "../context/StateContext";
import DispatchContext from "../context/DispatchContext";

import HeaderLoggedIn from "./HeaderLoggedIn";
import HeaderLoggedOut from "./HeaderLoggedOut";
import Footer from "./Footer";
import ProductList from "./ProductList";
import Product from "./Product";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import EditProduct from "./EditProduct";
import AddProduct from "./AddProduct";
import Orders from "./Orders";

function App() {
  const initialState = {
    isLoggedin: false,
    user: {
      username: "",
      id: "",
    },
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "LOG_IN":
        draft.isLoggedin = true;
        draft.user = action.payload;
        return;
      case "LOG_OUT":
        draft.isLoggedin = false;
        draft.user = { username: "", id: "" };
        return;
      default:
        return;
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          {state.isLoggedin ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/product/:id/edit" component={EditProduct} />
            <Route exact path="/product/add/" component={AddProduct} />
            <Route exact path="/product/:id/" component={Product} />
            <Route exact path="/account/:id/edit" component={EditProfile} />
            <Route exact path="/account/:id/orders" component={Orders} />
            <Route exact path="/account/:id/" component={Profile} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
