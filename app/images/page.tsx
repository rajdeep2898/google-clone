
import React from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/ImageSearchBar";
import Filters from "../../components/Filters";
import ImageGrid from "../../components/ImageGrid";
// import "./App.css";

export default function Images()  {
  return (
    <div>
      <Header />
      <SearchBar />
      <Filters />
      <ImageGrid />
    </div>
  );
};

