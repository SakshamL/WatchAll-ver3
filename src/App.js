import Header from "./modules/header.js";
import Banner from "./modules/Banner.js";
import Movies from "./modules/Movies.js";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Moviespage from "./pages/Movies_page.js";
import Tvpage from "./pages/tv_page.js";
import Favourites from "./pages/Favourites.js";
import Categories from "./pages/Categories.js";
import MovieDetails from "./pages/MovieDetails.js";
import TvDetails from "./pages/TvDetails.js";
import { useState, useEffect } from "react";
import movies_api from "./APIURL.js";

function App() {
  const [movies, setMovies] = useState([]);
  const [tv_shows, setTvshows] = useState([]);

  useEffect(() => {
    getMovies();
    getTvShows();
    // console.log(g1.getTime());
  }, []);

  const getMovies = async () => {
    const response = await fetch(movies_api.movies);
    const responseJSON = await response.json();

    setMovies(responseJSON.results);
    // console.log(responseJSON);
  };

  const getTvShows = async () => {
    const response = await fetch(movies_api.tv_shows);
    const responseJSON = await response.json();

    setTvshows(responseJSON.results);
    // console.log(responseJSON);
  };

  // let g1 = new Date();

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <br></br>
              <Banner />
              <Movies title="Latest Movies" movie={movies} />
              <Movies title="Latest TV Shows" movie={tv_shows} />
              <p style={{ color: "white" }}>kjahfjasfjagfahfkahfjkahfahsf</p>;
            </>
          }
        />
        <Route path="/movies_page" element={<Moviespage />} />
        <Route path="/tv_page" element={<Tvpage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/tv/:id" element={<TvDetails />} />
      </Routes>
    </div>
  );
}

export default App;
