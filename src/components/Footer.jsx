import React from "react";
import "../assets/styles/Footer.css";

function Footer() {
  return (
    <footer className="pfooter-light">
      <div className="pfooter-light-container">
        <div className="pfooter-light-brand">
          <h2>Akshay A</h2>
          <p>
            Passionate full-stack developer focused on clean UIs and automation-ready backend solutions.
          </p>
          <a href="mailto:akshay.anilkumar244@gmail.com" className="pfooter-light-cta">
            📧 Hire Me
          </a>
        </div>

        <div className="pfooter-light-contact">
          <h4>Contact</h4>
          <ul>
            <li>📍 Kollam, Kerala</li>
            <li>📞 +91 9497068332</li>
            <li>
              ✉️ <a href="mailto:akshay.anilkumar244@gmail.com">akshay.anilkumar244@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className="pfooter-light-socials">
          <h4>Connect</h4>
          <div className="pfooter-light-icons">
            <a href="https://github.com/me32face" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" />
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/akshay-a-023a472a4" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" />
              LinkedIn
            </a>
            <a href="https://instagram.com/ak.s_hey" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" />
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="pfooter-light-bottom">
        <p>© {new Date().getFullYear()} Akshay A. Crafted with 💡 using React</p>
      </div>
    </footer>
  );
}

export default Footer;
