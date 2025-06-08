import React from "react";
import "../assets/styles/Home2.css";
import profilePic from "../assets/images/dark-alone-loneliness-sad-wallpaper-preview.jpg"; // Replace with your actual image

function HomePage() {
  return (
    <div className="homepage-container">
      <img src={profilePic} alt="Profile" className="homepage-profile" />
      
      <h1 className="homepage-name">
        ― Akshay A ―
      </h1>

      <p className="homepage-subtitle">
        FullStack Developer ⚡ Electrical Engineer
      </p>

      <div className="homepage-icons">
        <a href="https://wa.me/919497068332" target="_blank" rel="noreferrer" aria-label="WhatsApp">📱</a>
        <a href="mailto:akshay.anilkumar244@gmail.com" aria-label="Email">✉️</a>
        <a href="https://instagram.com/ak.s_hey" target="_blank" rel="noreferrer" aria-label="Instagram">📸</a>
        <a href="https://facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">📘</a>
        <a href="https://linkedin.com/in/akshay-a-023a472a4" target="_blank" rel="noreferrer" aria-label="LinkedIn">💼</a>
        <a href="https://github.com/me32face" target="_blank" rel="noreferrer" aria-label="GitHub">🐱</a>
      </div>
    </div>
  );
}

export default HomePage;
