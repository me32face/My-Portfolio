import React from "react";
import "../assets/styles/Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrapper">
        <h2 className="contact-title">Contact Me</h2>

        <div className="contact-info-card">
          <p>
            📍 <strong>Location:</strong> Kollam, Kerala
          </p>
          <p>
            📞 <strong>Phone:</strong> +91 9497068332
          </p>
          <p>
            ✉️ <strong>Email:</strong>{" "}
            <a
              href="mailto:akshay.anilkumar244@gmail.com"
              className="contact-email"
            >
              akshay.anilkumar244@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
