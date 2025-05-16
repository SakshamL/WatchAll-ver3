import React from "react";
import Header from "../modules/header";
import { useEffect } from "react";

function Categories() {
  useEffect(() => {
    document.title = "Categories | WatchAll";
  }, []);

  return (
    <>
      <Header />
      <div>Categories</div>
    </>
  );
}

export default Categories;
