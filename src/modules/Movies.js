import React from "react";
import "./Movies.css";

function Movies(props) {
  return (
    <div className="title-container">
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div className="posters-row">
        <div className="poster-container">
          <img
            className="posters-img"
            src="/images/poster-1.jpg"
            alt="poster-1"
          />
          <img
            className="posters-img"
            src="/images/poster-2.jpg"
            alt="poster-1"
          />
          <img
            className="posters-img"
            src="/images/poster-3.jpg"
            alt="poster-1"
          />

          <img
            className="posters-img"
            src="/images/poster-1.jpg"
            alt="poster-1"
          />
          <img
            className="posters-img"
            src="/images/poster-2.jpg"
            alt="poster-1"
          />
          <img
            className="posters-img"
            src="/images/poster-3.jpg"
            alt="poster-1"
          />
          <img
            className="posters-img"
            src="/images/poster-1.jpg"
            alt="poster-1"
          />
          <img
            className="posters-img"
            src="/images/poster-3.jpg"
            alt="poster-1"
          />
          <img
            className="posters-img"
            src="/images/poster-1.jpg"
            alt="poster-1"
          />
        </div>
      </div>
    </div>
  );
}

export default Movies;
