import React from "react";
import "./Filters.css";

const Filters = () => {
  const filters = [
    "Resort",
    "Hill station",
    "Top station",
    "Tree house",
    "Hotel",
    "Weather",
    "Photography",
  ];

  return (
    <div className="filters">
      {filters.map((filter, index) => (
        <button key={index} className="filter-button">
          {filter}
        </button>
      ))}
    </div>
  );
};

export default Filters;
