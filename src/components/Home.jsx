import React from 'react';
import '../assets/styles/Home.css';

function Home() {
  return (
    <main className="home-main-content">
      <section id="home" className="home-section">
        <h1 className="home-heading">
          Hi, I'm <span className="highlight">Akshay A</span>
        </h1>
        <p className="home-subheading">
          Passionate full-stack developer focused on building scalable web applications and crafting intuitive user experiences.
        </p>
        <button
          className="cta-button"
          onClick={() =>
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          View My Work
        </button>
      </section>
    </main>
  );
}

export default Home;
