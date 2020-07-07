import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { useImmerReducer } from "use-immer";
import axios from "axios";

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
    user: { username: "", id: localStorage.getItem("id"), isAdmin: false },
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "LOG_IN":
        draft.user = action.payload;
        return;
      case "LOG_OUT":
        draft.user = { username: "", id: "" };
        return;
      default:
        return;
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (id) {
      async function getData() {
        const response = await axios.get(`/api/user/${id}`);
        const user = {
          username: response.data.user.name,
          id: state.user.id,
          isAdmin: response.data.user.isAdmin,
        };
        dispatch({ type: "LOG_IN", payload: user });
      }
      getData();
    }
  }, []);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          {state.user.id ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
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
