import React from "react";
//react-router
import { Link } from "react-router-dom";
//action and dispatch
import { useSelector } from "react-redux";

function Navbar() {
  let stateItems = useSelector((state) => state.cart);
  let stateLength = stateItems.cart.map((item) => item.payload);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-4 shadow-lg">
      <div className="container">
        <Link className="navbar-brand fs-4 fw-bolder" to="/">
          LemonRoad
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                PRODUCT
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
          <form className="d-flex">
            <Link to="/login">
              <button type="button" className="btn btn-success">
                <i className="fa-solid fa-user"></i> Login
              </button>
            </Link>
            &nbsp;
            <Link to="/register">
              <button type="button" className="btn btn-primary">
                <i className="fa-solid fa-user-plus"></i> Register
              </button>
            </Link>
            &nbsp;
            <Link to="/cart">
              <button className="btn btn-dark btn-outline-light" type="submit">
                <i className="fa-solid fa-cart-shopping"></i> Cart(
                {stateLength.length})
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
