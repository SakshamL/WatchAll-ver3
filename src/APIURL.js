const page_no = 1;

const movies_api = {
  movies: `https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&region=IN&sort_by=popularity.desc&page=${page_no}&&primary_release_year=2024&with_original_language=hi`,
  tv_shows:
    "https://api.themoviedb.org/3/discover/tv?include_adult=false&api_key=04c35731a5ee918f014970082a0088b1&include_null_first_air_dates=false&&page=1&sort_by=first_air_date.desc&region=IN&with_original_language=hi",
};

export default movies_api;
