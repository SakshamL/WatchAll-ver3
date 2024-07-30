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
      <div key={tv.id} className="content_card">
        <img
          className="posters-img"
          src={IMGPATH + tv.poster_path}
          alt="poster-img"
        />
        <span className="content_title">{tv.name}</span>
      </div>
    </>
  );
}

export default TvDetails;
