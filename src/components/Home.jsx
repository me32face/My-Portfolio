import React from 'react';
import myPic from '../assets/images/my-pic.png';
import '../assets/styles/Home.css';

function Home() {
  return (
    <main className="home-main-content">
      <section id="home" className="home-section">
        <div className="home-image-wrapper">
          <img src={myPic} alt="Akshay A" className="home-profile-img" />
        </div>

        <div className="home-icon-content">
          <h2 className="home-name">Akshay A</h2>
          <h2>RPA Developer 🛫 MERN Developer</h2>
          <div className="home-social-icons">
            <a   href="https://wa.me/919497068332?text=Hello%20Akshay%2C%20I%20came%20across%20your%20portfolio%20and%20was%20really%20impressed.%20I'd%20like%20to%20connect%20and%20discuss%20further."
              target="_blank" rel="noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="https://instagram.com/ak.s_hey" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/akshay-a-023a472a4" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/me32face" target="_blank" rel="noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
