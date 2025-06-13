import React from 'react';
import '../assets/styles/About.css';

function About() {
  return (
    <main className="aboutnew-main">
      <div className="aboutnew-container">
        <div className="aboutnew-left">
          <h1 className="aboutnew-title">Hello, I'm <span>Akshay A</span></h1>
          <p className="aboutnew-description">
            A passionate <strong>MERN Stack Developer</strong> from Kollam, India. I specialize in building fast, scalable, and visually appealing web applications. I love clean architecture, RESTful APIs, and making complex ideas simple on the frontend.
          </p>
          <p className="aboutnew-description">
            I constantly explore new technologies, refine my skills, and aim to deliver value through every line of code.
          </p>
        </div>
        <div className="aboutnew-right">
          <div className="aboutnew-card">
            <h2 className="aboutnew-card-title">Personal Details</h2>
            <ul className="aboutnew-list">
              <li><strong>Name:</strong> Akshay A</li>
              <li><strong>Email:</strong> <span className='custom-list'>akshay.anilkumar244@gmail.com</span></li>
              <li><strong>Phone:</strong> +91 94970 68332</li>
              <li><strong>Location:</strong> Kollam, India</li>
              <li><strong>Profession:</strong> MERN Stack Developer</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
