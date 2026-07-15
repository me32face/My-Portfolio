import React from "react";
import "../assets/styles/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer-main">
      <div className="section-container footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo gradient-text">Akshay A</h2>
            <p className="footer-tagline">
              Building modern, scalable web applications.
            </p>
          </div>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#hire">Contact</a>
          </div>

          <div className="footer-socials">
            <a
              href="https://github.com/me32face"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/akshay-a-023a472a4"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a href="mailto:akshay.anilkumar244@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/919497068332"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Akshay A. All rights reserved.
          </p>
          <div className="footer-built">
            Built with React & <span className="heart">♥</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
