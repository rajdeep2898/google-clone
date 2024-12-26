import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Google</h1>
      <nav className="nav">
        <a href="/">All</a>
        <a href="/">Images</a>
        <a href="/">Maps</a>
        <a href="/">News</a>
        <a href="/">Videos</a>
        <a href="/">More</a>
      </nav>
    </header>
  );
};

export default Header;