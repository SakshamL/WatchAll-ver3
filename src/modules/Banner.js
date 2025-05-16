import React, { useState, useEffect } from "react";
import "./Banner.css";
// import { Routes, Route } from "react-router-dom";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

function Banner() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getPopularMovies();
  }, []);

  const getPopularMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=04c35731a5ee918f014970082a0088b1"
    );
    const responseJSON = await response.json();
    document.title = "Home | WatchAll";

    // console.log(responseJSON.results);
    setPopularMovies(responseJSON.results);
  };

  return (
    <div>
      <div className="banner-container">
        {popularMovies.slice(0, 4).map((movie) => {
          return (
            <React.Fragment key={movie.id}>
              <img
                className="banner-img"
                src={IMGPATH + movie.backdrop_path}
                alt="banner"
              />
            </React.Fragment>
          );
        })}

        {/* <img
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
        /> */}
      </div>
    </div>
  );
}

export default Banner;
