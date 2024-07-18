import React from "react";
import "./Banner.css";
// import { Routes, Route } from "react-router-dom";

function Banner() {
  return (
    <div>
      <div className="banner-container">
        <img
          className="banner-img"
          src="./images/you_banner.jpg"
          alt="banner-1"
        />
        <img
          className="banner-img"
          src="./images/heroes_banner.jpg"
          alt="banner-2"
        />
        <img
          className="banner-img"
          src="./images/heroes_banner.jpg"
          alt="banner-2"
        />
        <img
          className="banner-img"
          src="./images/you_banner.jpg"
          alt="banner-1"
        />
      </div>
    </div>
  );
}

export default Banner;
