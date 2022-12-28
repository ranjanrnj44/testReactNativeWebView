import React from "react";
import "./App.css";
//components
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Product from "./components/Products/Product";
import Cart from "./components/Cart/Cart";
import { Contact, Register, Login } from "./components/Contact/Contact";
//router
import { Switch, Route } from "react-router-dom";
//action and dispatch
import { useSelector } from "react-redux";

function App() {
  let stateItems = useSelector((state) => state.cart);
  console.log(stateItems.cart.map((i) => i.payload));
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
