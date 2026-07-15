import React from "react";
import "../assets/styles/HireMe.css";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaFileDownload,
} from "react-icons/fa";

function HireMe() {
  return (
    <div className="section-container" id="hire">
      <div className="contact-wrapper glass-card">
        <div className="contact-info">
          <h2 className="contact-title">Let's Work Together</h2>
          <p className="contact-description">
            I'm currently available for freelance projects, remote work, or
            full-time opportunities. If you're looking for a developer to build
            clean, efficient, and scalable web solutions, let's connect!
          </p>

          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div className="contact-text">
                <span className="contact-label">Email</span>
                <a href="mailto:akshay.anilkumar244@gmail.com">
                  akshay.anilkumar244@gmail.com
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaWhatsapp />
              </div>
              <div className="contact-text">
                <span className="contact-label">WhatsApp</span>
                <a
                  href="https://wa.me/919497068332"
                  target="_blank"
                  rel="noreferrer"
                >
                  +91 94970 68332
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="contact-text">
                <span className="contact-label">Location</span>
                <span>Kollam, Kerala, India (IST)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-action">
          <div className="action-card">
            <h3>Get My Resume</h3>
            <p>
              Download my comprehensive resume to see my full experience and
              skill set.
            </p>
            <a
              href="/Akshay_A_Resume.pdf"
              download
              className="btn btn-primary d-inline-flex"
            >
              Download CV <FaFileDownload />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireMe;
