import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <h2 className="section-title reveal">
          I'm <span className="highlight">Pratiti</span>, a
          <br />
          Data Analyst & Visualization Specialist.
        </h2>
        
        <p className="about-description reveal">
          Data Analyst & Visualization Specialist turning complex datasets into actionable intelligence. I build scalable models and dashboards.
        </p>

        <div className="about-buttons reveal">
          <a href="https://github.com/Pratiti-paul" className="btn icon-btn">
             Github
          </a>
          <a href="https://www.linkedin.com/in/pratiti-paul/" className="btn icon-btn">
             LinkedIn
          </a>
          <a href="https://www.instagram.com/paul_pratiti23/" className="btn icon-btn">
             Instagram
          </a>
          {/* <a href="#" className="btn icon-btn">
             Download CV
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
