import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/LandingHeader.css";

const LandingHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <>
      <div className="header-banner">
        🎉 Current Deal: Get 20% off all lunch combos from 12–3PM!
      </div>

      <header className="landing-header">
        <div className="header-content">
          <Link
            to="/"
            className="restaurant-name"
            onClick={() => setMenuOpen(false)}
          >
            Chai n Chill
          </Link>
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`bar ${menuOpen ? "open" : ""}`}></span>
            <span className={`bar ${menuOpen ? "open" : ""}`}></span>
            <span className={`bar ${menuOpen ? "open" : ""}`}></span>
          </button>

          <div className={`header-titles ${menuOpen ? "show" : ""}`}>
            <div className="sub-headline-row">
              <Link to="/menu" className="sub-title" onClick={toggleMenu}>
                Menu
              </Link>
              <Link to="/about" className="sub-title" onClick={toggleMenu}>
                About
              </Link>
              <Link to="/reserve" className="sub-title" onClick={toggleMenu}>
                Gallery
              </Link>
            </div>
          </div>

          <div className="social-icons">
            <a href="#" className="icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="icon" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="icon" aria-label="TikTok">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default LandingHeader;
