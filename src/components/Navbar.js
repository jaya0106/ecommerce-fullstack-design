import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Custom styling
import logo from "../assets/logos/logo.png";
import cartIcon from "../assets/icons/cart.svg";

function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
    <div className="container">
        <Link className="navbar-brand fw-bold" to="/">E-Shop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-dark text-white px-3" to="/login">Login</Link>
            </li>
          </ul>
          <img src={logo} alt="Brand Logo" width="150" />
          <img src={cartIcon} alt="Cart" width="30" />


        </div>
      </div>
    </nav>
  );
}

export default Navbar;
