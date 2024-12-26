import React from "react";
import "./SearchBar.css";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { MdOutlineImageSearch } from "react-icons/md";

const SearchBar = () => {
  return (
    <>
    <div className="search-box">
    <FaSearch className="icon search-icon" />
    <input
      type="text"
      placeholder="Search"
      className="search-input"
    />
    <FaMicrophone className="icon mic-icon" />
    <MdOutlineImageSearch className="icon lens-icon" />

  </div>
     <div className="buttons">
     <button>Google Search</button>
     <button>I'm Feeling Lucky</button>
   </div>
   </>

  );
};

export default SearchBar;
