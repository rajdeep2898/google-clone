import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search Google or type a URL" />
      <div className="buttons">
        <button>Google Search</button>
        <button>I'm Feeling Lucky</button>
      </div>
    </div>
  );
};

export default SearchBar;
