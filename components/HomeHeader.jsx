import React from "react";
import { FaTh, FaFlask } from "react-icons/fa";
import "./HomeHeader.css";

const HomeHeader = () => {
  return (
    <header className="home-header">
      <div className="left-section">
        <a href="/" className="link">About</a>
        <a href="/" className="link">Store</a>
      </div>
      <div className="right-section">
        <a href="/" className="link">Gmail</a>
        <a href="/" className="link">Images</a>
        <FaFlask className="icon" />
        <FaTh className="icon" />
        <div className="profile">
          <img
            src="https://lh3.googleusercontent.com/ogw/AF2bZyg3Y5XLCvzYJt2FTvMoQK7sOC4VCXHKJNyzJAla7z4rQ6AE=s64-c-mo"
            alt="Profile"
            className="profile-pic"
          />
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
