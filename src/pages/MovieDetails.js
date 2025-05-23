import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../modules/header";
import "../pages/Details.css";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const Details = () => {
  const [movie, setMovie] = useState({});
  // const [genre, setGenre] = useState(movie.genres);

  const params = useParams();

  const getMovie = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${params.id}?api_key=04c35731a5ee918f014970082a0088b1`
    );
    const responseJSON = await response.json();
    document.title = "Movie | " + responseJSON.title;

    setMovie(responseJSON);
  };

  useEffect(() => {
    getMovie();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getMovie();
    // eslint-disable-next-line
  }, [params]);

  return (
    <>
      <Header />
      <div className="details-container">
        <div className="backdrop-container">
          {movie.backdrop_path !== null ? (
            <img
              className="backdrop-img"
              src={IMGPATH + movie.backdrop_path}
              alt="banner"
            />
          ) : (
            <img
              className="backdrop-img"
              src="/images/default_backdrop.jpg"
              alt="default-backdrop"
            />
          )}
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
              <p> {movie.overview}</p>
              <br></br>
              <p>Runtime: {movie.runtime} minutes</p>
              <br></br>
              <p>Vote Average: {movie.vote_average}</p>
              <div className="genre_container">
                {movie.genres
                  ? movie.genres.map((gen) => {
                      return (
                        <p className="genres" key={gen.id}>
                          {gen.name}
                        </p>
                      );
                    })
                  : ""}
              </div>
            </div>
          </div>
        </div>
        <iframe
          title={movie.title}
          width="100%"
          height="500px"
          src={"https://www.2embed.cc/embed/" + movie.id}
          allowFullScreen
        ></iframe>
        {/* <br></br>
        <br></br>
        <br></br> */}
        <p style={{ color: "white" }}>jhasfbjsbj</p>
      </div>
    </>
  );
};

export default Details;
