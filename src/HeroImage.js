import React from "react";
import "./styles/HeroImage.css";

const HeroImage = ({ height = "600px", width = "100%" }) => {
  return (
    <div className="hero-container" style={{ width, height }}>
      <img src="/dum_1.jpg" alt="Hero" className="hero-image" />
    </div>
  );
};

export default HeroImage;
