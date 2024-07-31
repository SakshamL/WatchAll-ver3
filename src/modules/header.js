import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="head">
        <h1 className="logo">
          <Link to="/">WatchAll</Link>
        </h1>
        <ul className="navigation-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/movies_page">Movies</Link>
          </li>
          <li>
            <Link to="/tv_page">TV Shows</Link>
          </li>
          <li>
            <Link to="/favourites">Favourites</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>

        <input type="text" />

        <ul className="login-menu">
          <li>Login</li>
          <li>Register</li>
        </ul>

        <p className="account-icon">Account</p>
      </div>
    </div>
  );
}

export default Header;
