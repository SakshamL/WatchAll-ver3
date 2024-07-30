import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../modules/header";
import "../pages/Details.css";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const Details = () => {
  const [movie, setMovie] = useState({});

  const params = useParams();

  const getMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=04c35731a5ee918f014970082a0088b1`
    );
    const responseJSON = await response.json();

    setMovie(responseJSON);
  };

  useEffect(() => {
    getMovie();
  });

  return (
    <>
      <Header />
      <div className="details-container">
        <div className="backdrop-container">
          <img
            className="backdrop-img"
            src={IMGPATH + movie.backdrop_path}
            alt="banner"
          />
        </div>
        <div className="details-body-container">
          <div className="poster-img-container">
            <img
              className="details-poster-img"
              src={IMGPATH + movie.poster_path}
              alt="poster-img"
            />
            <div className="details-container">
              <span className="movie-title">{movie.title}</span>
              <p>Release Date: {movie.release_date}</p>
              <br></br>
              <p>Overview: {movie.overview}</p>
            </div>
          </div>
        </div>
        {/* <br></br>
        <br></br>
        <br></br> */}
        <p style={{ color: "white" }}>jhasfbjsbj</p>
      </div>
    </>
  );
};

export default Details;
