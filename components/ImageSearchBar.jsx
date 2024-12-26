import React from "react";
import { FaSearch } from "react-icons/fa";
import "./ImageSearchBar.css";

const ImageSearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" />
      <FaSearch className="search-icon" />
    </div>
  );
};

export default ImageSearchBar;
