import Header from "./modules/header.js";
import Banner from "./modules/Banner.js";
import Movies from "./modules/Movies.js";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Movies_page from "./pages/Movies_page.js";
import Tv_page from "./pages/tv_page.js";
import Favourites from "./pages/Favourites.js";
import Categories from "./pages/Categories.js";

function App() {
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
              <Movies title="Latest Movies" />
              <Movies title="Latest TV Shows" />
              <p style={{ color: "white" }}>kjahfjasfjagfahfkahfjkahfahsf</p>;
            </>
          }
        />
        <Route path="/movies_page" element={<Movies_page />} />
        <Route path="/tv_page" element={<Tv_page />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
