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
            if (item.poster_path !== null && props.title === "Latest Movies") {
              return (
                <>
                  <div className="content_card">
                    <img
                      className="posters-img"
                      src={IMGPATH + item.poster_path}
                      alt="poster-img"
                    />
                    <span className="content_title">{item.title}</span>
                  </div>
                </>
              );
            } else {
              return null;
            }
          })}

          {props.movie.map((item, index) => {
            if (
              item.poster_path !== null &&
              props.title === "Latest TV Shows"
            ) {
              return (
                <>
                  <div className="content_card">
                    <img
                      className="posters-img"
                      src={IMGPATH + item.poster_path}
                      alt="poster-img"
                    />
                    <span className="content_title">{item.name}</span>
                  </div>
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
