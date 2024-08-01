import React from "react";
import Header from "../modules/header";
import "./Moviespg.css";
import { useState, useEffect } from "react";
import movies_api from "../APIURL";
import { Link } from "react-router-dom";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

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
              {movies.map((item) => {
                if (item.poster_path !== null) {
                  return (
                    <React.Fragment key={item.id}>
                      <Link to={`/movie/${item.id}`}>
                        <div className="content_card">
                          <img
                            className="posters-img"
                            src={IMGPATH + item.poster_path}
                            alt="poster-img"
                          />
                          <span className="content_title">{item.title}</span>
                        </div>
                      </Link>
                    </React.Fragment>
                  );
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Moviespage;
