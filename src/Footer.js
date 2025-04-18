import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>
            123 Chai Street
            <br />
            Austin, TX 78701
          </p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@chaiandchill.com</p>
        </div>

        <div className="footer-map">
          <h4>Find Us</h4>
          <iframe
            title="Map location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11071.120287511592!2d-97.7473429!3d30.2680425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5062642eefd%3A0x98eaf824dbb96a2b!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1614718927650!5m2!1sen!2sus"
            width="100%"
            height="150"
            style={{ border: "none" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="footer-hours">
          <h4>Store Hours</h4>
          <ul>
            <li>Monday: 8am – 9pm</li>
            <li>Tuesday: 8am – 9pm</li>
            <li>Wednesday: 8am – 9pm</li>
            <li>Thursday: 8am – 9pm</li>
            <li>Friday: 8am – 9pm</li>
            <li>Saturday: 9am – 11pm</li>
            <li>Sunday: 9am – 11pm</li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="footer-icons">
            <a href="#" className="footer-icon" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="footer-icon" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="footer-icon" aria-label="TikTok">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-left">
          <p>
            &copy; {new Date().getFullYear()} Chai n Chill. All rights reserved.
          </p>
        </div>
        <div className="footer-left">
          <p>Designed by AWE LLC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
