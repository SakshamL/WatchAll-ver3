import React from "react";
import Header from "../modules/header";
import "./Moviespg.css";
import { useState, useEffect } from "react";
import ContentCard from "../modules/ContentCard";
import movies_api from "../APIURL";

// const IMGPATH = "https://image.tmdb.org/t/p/w1280";

function Moviespage() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);

  const [checkedGenreList, setCheckedGenreList] = useState([]);

  const changeHandler = (event) => {
    const activeData = document.getElementById(event.target.id).checked;
    if (activeData === true) {
      setCheckedGenreList([...checkedGenreList, event.target.name]);
    } else {
      setCheckedGenreList(
        checkedGenreList.filter(
          (ids) => ids !== event.target.id && ids !== event.target.name
        )
      );
    }
  };

  useEffect(() => {
    getMovies();
    getGenres();
    document.title = "Movies | WatchAll";
  }, []);

  const getMovies = async () => {
    const response = await fetch(movies_api.movies);
    const responseJSON = await response.json();

    setMovies(responseJSON.results);
    // console.log(responseJSON.results);
  };

  const getGenres = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=04c35731a5ee918f014970082a0088b1"
    );
    const responseJSON = await response.json();

    setGenres(responseJSON.genres);
    // console.log(responseJSON.genres);
  };

  return (
    <>
      <Header />

      <div className="movies-pg-container">
        <div className="movies-cat-sidebar">
          {genres.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <input
                  type="checkbox"
                  id={item.id}
                  name={item.name}
                  value={item.name}
                  onChange={(e) => changeHandler(e)}
                />
                <label htmlFor={item.id}>{item.name}</label>
                <br></br>
              </React.Fragment>
            );
          })}
        </div>
        <div className="movies-pg-list">
          <div className="posters-row">
            <div className="poster-container">
              {checkedGenreList.map((a, i) => {
                return <p key={i}>{a}</p>;
              })}
              <ContentCard
                title="Latest Movies"
                movie={movies}
                genre={checkedGenreList}
              />
              {/* {movies.map((e) => console.log(e.genre_ids, e.title))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Moviespage;
