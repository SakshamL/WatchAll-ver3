import React from "react";
import "./SearchBar.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

function SearchBar() {
  const [value, setValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    getMovieSearch();
    // eslint-disable-next-line
  }, [value]);

  const getMovieSearch = async () => {
    if (value.split(" ").length >= 2) {
      const spacevalue = value.split(" ").join("%20");
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${spacevalue}&api_key=04c35731a5ee918f014970082a0088b1`
      );
      const responseJSON = await response.json();

      setSearchResult(responseJSON.results);
    } else {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/multi?query=${value}&api_key=04c35731a5ee918f014970082a0088b1`
      );
      const responseJSON = await response.json();

      setSearchResult(responseJSON.results);
    }
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
          {searchResult.map((item) => {
            return (
              <React.Fragment key={item.id}>
                {(item.media_type === "movie") &
                (item.poster_path !== null) &
                ((item.original_language === "hi") |
                  (item.original_language === "en")) ? (
                  <Link to={`/movie/${item.id}`}>
                    <div className="search-results" onClick={clearsearch}>
                      <img
                        className="search-results-poster"
                        src={IMGPATH + item.poster_path}
                        alt="poster"
                      />
                      <p>{item.title}</p>
                      <br></br>
                      <p>{item.media_type}</p>
                      {/* {searchedMedia.push(item)} */}
                    </div>
                  </Link>
                ) : (
                  ""
                )}
                {(item.media_type === "tv") &
                (item.poster_path !== null) &
                ((item.original_language === "hi") |
                  (item.original_language === "en")) ? (
                  <Link to={`/tv/${item.id}`}>
                    <div className="search-results" onClick={clearsearch}>
                      <img
                        className="search-results-poster"
                        src={IMGPATH + item.poster_path}
                        alt="poster"
                      />
                      <p>{item.name}</p>
                      <br></br>
                      <p>{item.media_type}</p>
                      {/* {searchedMedia.push(item)} */}
                    </div>
                  </Link>
                ) : (
                  ""
                )}
                {(item.media_type === "person") &
                (item.profile_path !== null) ? (
                  <div className="search-results">
                    <img
                      className="search-results-poster"
                      src={IMGPATH + item.profile_path}
                      alt="poster"
                    />
                    <p>{item.name}</p>
                    <br></br>
                    <p>{item.media_type}</p>
                    {/* {searchedMedia.push(item)} */}
                  </div>
                ) : (
                  ""
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SearchBar;
