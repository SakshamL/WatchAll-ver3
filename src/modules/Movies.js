import React from "react";
import "./Movies.css";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const Movies = (props) => {
  return (
    <div className="title-container">
      <div className="title">
        <h3>{props.title}</h3>
      </div>
      <div className="posters-row">
        <div className="poster-container">
          {props.movie.map((item, index) => {
            if (item.poster_path !== null) {
              return (
                <>
                  <img
                    className="posters-img"
                    src={IMGPATH + item.poster_path}
                    alt="poster-img"
                  />
                </>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Movies;
