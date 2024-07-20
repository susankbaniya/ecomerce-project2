import React from "react";
import "./navbar.css";
import logo from "../images/logo.png";
import carticon from "../images/cart_icon.png";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} />
          <p>Shopper</p>
        </div>
        <div className="navs-menu">
          <ul className="nav-menu">
            <li>
              Shop
              <hr />
            </li>
            <Link to="/men">
              <li>Men</li>
            </Link>
            <Link to="/women">
              <li>Women</li>
            </Link>
            <li>Kids</li>
          </ul>
        </div>
        <div className="buttons-of">
          <Link to="/login">
            <button className="buttons">Login</button>
          </Link>

          <img src={carticon} className="imageofcart" />
          <div className="carticon-count">0</div>
        </div>
      </div>
    </div>
  );
};

export default navbar;
