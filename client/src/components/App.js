import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Header from "./Header";
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
  return (
    <BrowserRouter>
      <Header />
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
  );
}

export default App;
