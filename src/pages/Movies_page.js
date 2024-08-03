import React from "react";
import Header from "../modules/header";
import "./Moviespg.css";
import { useState, useEffect } from "react";
import ContentCard from "../modules/ContentCard";
import movies_api from "../APIURL";

// const IMGPATH = "https://image.tmdb.org/t/p/w1280";

function Moviespage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await fetch(movies_api.movies);
    const responseJSON = await response.json();

    setMovies(responseJSON.results);
    // console.log(responseJSON);
  };

  return (
    <>
      <Header />
      <div className="movies-pg-container">
        <div className="movies-cat-sidebar">
          <p>SideBar</p>
          <p>SideBar</p>
          <p>SideBar</p>
        </div>
        <div className="movies-pg-list">
          <div className="posters-row">
            <div className="poster-container">
              <ContentCard title="Latest Movies" movie={movies} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Moviespage;
