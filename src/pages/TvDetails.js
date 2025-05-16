import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../modules/header";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

function TvDetails() {
  const [tv, setTv] = useState({});
  const params = useParams();

  useEffect(() => {
    getTv();
  });

  const getTv = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/tv/${params.id}?api_key=04c35731a5ee918f014970082a0088b1`
    );
    const responseJSON = await response.json();
    setTv(responseJSON);
  };

  return (
    <>
      <Header />
      <div className="details-container">
        <div className="backdrop-container">
          {tv.backdrop_path !== null ? (
            <img
              className="backdrop-img"
              src={IMGPATH + tv.backdrop_path}
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
              src={IMGPATH + tv.poster_path}
              alt="poster-img"
            />
            <div className="details-container">
              <span className="movie-title">{tv.name}</span>
              <p>First Air Date: {tv.first_air_date}</p>
              <br></br>
              <p> {tv.overview}</p>
              <br></br>
              <p>Runtime: {tv.runtime} minutes</p>
              <br></br>
              <p>Vote Average: {tv.vote_average}</p>
              <div className="genre_container">
                {tv.genres
                  ? tv.genres.map((gen) => {
                      return (
                        <p className="genres" key={gen.id}>
                          {gen.name}
                        </p>
                      );
                    })
                  : ""}
              </div>

              <div className="genre_container">
                {tv.seasons
                  ? tv.seasons.map((sen) => {
                      return (
                        <p className="genres" key={sen.id}>
                          {sen.name}
                        </p>
                      );
                    })
                  : ""}
              </div>
            </div>
          </div>
        </div>
        <iframe
          title={tv.name}
          width="100%"
          height="500px"
          src={"https://hnembed.cc/embed/tv/" + tv.id}
          allowFullScreen
        ></iframe>
        {/* <br></br>
        <br></br>
        <br></br> */}
        <p style={{ color: "white" }}>jhasfbjsbj</p>
      </div>
    </>
  );
}

export default TvDetails;
