import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">
          <span>PRATITI</span>
          <br />
          <span>PAUL</span>
        </h1>
        <p className="hero-subtitle">
          I TURN COMPLEX DATA INTO
          <br />
          <span className="highlight">meaningful business insights</span>
        </p>
        
        <div className="hero-glow"></div>
      </div>
    </section>
  );
};

export default Hero;
