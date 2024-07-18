import React from "react";
import "./header.css";

function Header() {
  return (
    <div>
      <div className="head">
        <h1 className="logo">WatchAll</h1>
        <ul className="navigation-menu">
          <li>Home</li>
          <li>Movies</li>
          <li>TV Shows</li>
          <li>Favourites</li>
          <li>Categories</li>
        </ul>

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
