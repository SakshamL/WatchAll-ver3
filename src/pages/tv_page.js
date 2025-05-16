import React from "react";
import Header from "../modules/header";
import "./Moviespg.css";
import { useState, useEffect } from "react";
import movies_api from "../APIURL";
import ContentCard from "../modules/ContentCard";
// import { Link } from "react-router-dom";

// const IMGPATH = "https://image.tmdb.org/t/p/w1280";

function Tvpage() {
  const [tv_shows, setTvshows] = useState([]);

  useEffect(() => {
    getTV();
    document.title = "TV Shows | WatchAll";
  }, []);

  const getTV = async () => {
    const response = await fetch(movies_api.tv_shows);
    const responseJSON = await response.json();

    setTvshows(responseJSON.results);
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
              <ContentCard title="Latest TV Shows" movie={tv_shows} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tvpage;
