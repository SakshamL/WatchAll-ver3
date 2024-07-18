import Header from "./modules/header.js";
import Banner from "./modules/Banner.js";
import Movies from "./modules/Movies.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <br></br>
      <Banner />
      <Movies title="Latest Movies" />
      <Movies title="Latest TV Shows" />
      <p style={{ color: "white" }}>kjahfjasfjagfahfkahfjkahfahsf</p>;
    </div>
  );
}

export default App;
