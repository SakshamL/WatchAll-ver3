import React from "react";
import "./SearchBar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

function SearchBar() {
  const [value, setValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    // console.log(value);
    getMovieSearch();
    // eslint-disable-next-line
  }, [value]);

  const getMovieSearch = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=04c35731a5ee918f014970082a0088b1`
    );
    const responseJSON = await response.json();
    // console.log(responseJSON.results);
    setSearchResult(responseJSON.results);
  };

  const clearsearch = () => {
    setValue("");
  };

  return (
    <>
      <div className="search-container">
        <input
          className="searchbar"
          onChange={(event) => setValue(event.target.value)}
          value={value}
          type="text"
          placeholder="Search Movies and Tv Shows..."
        />
        <div className="search-results-container">
          {/* afasfs */}

          {searchResult.map((item) => {
            return (
              <React.Fragment key={item.id}>
                {(item.original_language === "hi") |
                (item.original_language === "en") ? (
                  <Link to={`/movie/${item.id}`}>
                    <div className="search-results" onClick={clearsearch}>
                      <img
                        className="search-results-poster"
                        src={IMGPATH + item.poster_path}
                        alt="poster"
                      />
                      <p>{item.title}</p>
                    </div>
                  </Link>
                ) : (
                  ""
                )}
              </React.Fragment>
            );
          })}
          {/* <div className="search-results">
            <img
              className="search-results-poster"
              src="/images/poster-1.jpg"
              alt="poster"
            />
          </div> */}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
