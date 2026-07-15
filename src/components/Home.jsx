import React from "react";
import myPic from "../assets/images/my-pic.png";
import "../assets/styles/Home.css";
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

function Home() {
  return (
    <div className="section-container" id="home">
      <div className="hero-content">
        <div className="hero-text-content">
          <span className="hero-greeting">Hi there, I'm</span>
          <h1 className="hero-name gradient-text">Akshay A</h1>
          <h2 className="hero-role">Full Stack & RPA Developer</h2>

          <p className="hero-bio">
            I build scalable web applications and automate complex workflows.
            Passionate about creating seamless user experiences and robust
            backend architectures bridging the gap between design and
            functionality.
          </p>

          <div className="hero-cta-group">
            <a href="#projects" className="btn btn-primary">
              View My Work <FaArrowRight />
            </a>
            <a href="/Akshay_A_Resume.pdf" download className="btn btn-outline">
              Download CV <FaDownload />
            </a>
          </div>

          <div className="hero-social-links">
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
            <a
              href="mailto:akshay.anilkumar244@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email"
            >
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

        <div className="hero-image-content">
          <div className="hero-image-wrapper">
            <img src={myPic} alt="Akshay A" className="hero-image" />
            <div className="hero-glow"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
