import React from "react";
import Header from "../modules/header";
import { useEffect } from "react";

function Favourites() {
  useEffect(() => {
    document.title = "Favourites | WatchAll";
  }, []);

  return (
    <>
      <Header />
      <div>Favourites</div>;
    </>
  );
}

export default Favourites;
