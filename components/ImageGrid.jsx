import React from "react";
import "./ImageGrid.css";

const ImageGrid = () => {
  const images = Array(20).fill("https://via.placeholder.com/150");

  return (
    <div className="image-grid">
      {images.map((img, index) => (
        <img key={index} src={img} alt={`Placeholder ${index}`} />
      ))}
    </div>
  );
};

export default ImageGrid;
