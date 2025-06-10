import React from "react";
import "../assets/styles/HireMe.css";

function HireMe() {
  return (
    <div className="hireme-main">
      <div className="hireme-container">
        <div className="hireme-left">
          <h2 className="hireme-title">
            Hire <span>Me</span>
          </h2>
          <p className="hireme-description">
            Skilled MERN Stack Developer open to freelance, remote, or full-time opportunities — delivering clean, efficient, and scalable web solutions          </p>

          <div className="hireme-buttons">
            <a
              href="/Akshay_A_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hireme-btn hireme-view"
            >
              View Resume
            </a>
            <a
              href="/Akshay_A_Resume.pdf"
              download
              className="hireme-btn hireme-download"
            >
              Download Resume
            </a>
            <a
                href="https://wa.me/919497068332?text=Hello%20Akshay%2C%20I%20came%20across%20your%20portfolio%20and%20was%20really%20impressed.%20I'd%20like%20to%20connect%20and%20discuss%20further."
                target="_blank"
                rel="noreferrer"
                className="hireme-btn hireme-whatsapp"
            >
                <i className="fab fa-whatsapp"></i> WhatsApp Me
            </a>
          </div>
        </div>

        <div className="hireme-right">
          <div className="hireme-card">
            <h3 className="hireme-card-title">Why Choose Me?</h3>
            <ul className="hireme-list">
              <li><strong>Experience:</strong> In MERN Stack</li>
              <li><strong>Specialty:</strong> Clean UI, REST APIs, full-stack apps</li>
              <li><strong>Location:</strong> Kollam, India</li>
              <li><strong>Available:</strong> Freelance / Remote / Full-time</li>
              <li><strong>Timezone:</strong> IST (GMT+5:30)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireMe;
