import React from "react";
import "../assets/styles/Footer.css";

function Footer() {
  return (
    <footer className="footernew-main">
      <div className="footernew-container">
        <ul className="footernew-links">
          <li><a href="#about">About</a></li>
          {/* <li><a href="#hire">Hire Me</a></li> */}
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footernew-icons">
          <a href="https://wa.me/919497068332" target="_blank" rel="noreferrer">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="mailto:akshay.anilkumar244@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/akshay-a/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="footernew-bottom">
        © {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
