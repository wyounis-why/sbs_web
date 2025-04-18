import React from "react";
import "./styles/Gallery.css";

const Gallery = () => {
  const images = Array.from({ length: 16 }).map((_, i) => ({
    src: "/dum_1.jpg", // Replace with actual image paths later
    alt: `Gallery Image ${i + 1}`,
  }));

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img.src} alt={img.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
