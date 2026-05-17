import React from 'react';
import './Projects.css';
import spotifyImg from '../../assets/spotify.png';
import swiggyImg from '../../assets/swiggy.png';
import airbnbImg from '../../assets/airbnb.png';

const projects = [
  {
    title: "Spotify_Analysis",
    description: "Built an end-to-end Spotify analytics project analyzing 114k+ tracks across 125 genres to uncover music trends, popularity drivers, and listener preferences. Performed data cleaning and preprocessing using Python and Excel, then designed interactive Tableau dashboards with KPI-focused visualizations to deliver actionable insights through data storytelling and trend analysis.",
    tags: ["Tableau", "Excel", "Python", "Pandas"],
    githubLink: "https://github.com/Pratiti-paul/Spotify_Analysis",
    image: spotifyImg
  },
  {
    title: "SwiggyAnalysis",
    description: "Developed a comprehensive Swiggy sales and operations analytics dashboard to analyze customer behavior, restaurant performance, delivery trends, and revenue insights across multiple cities. Performed data cleaning, KPI analysis, and visualization using Excel and Power BI/Tableau to identify high-performing categories, order patterns, and business opportunities, enabling data-driven decision-making through interactive dashboards and analytical storytelling.",
    tags: ["Tableau", "Jupyter Notebook", "Pandas"],
    githubLink: "https://github.com/Pratiti-paul/B_G19_SwiggyAnalysis",
    image: swiggyImg
  },
  {
    title: "AirbnbPriceOptimization",
    description: "Built an end-to-end Airbnb pricing optimization project analyzing listing performance, occupancy rates, pricing patterns, and estimated revenue across thousands of properties. Performed data cleaning, KPI calculation, and exploratory analysis using Excel and Google Sheets, then designed interactive dashboards with pivot tables and visualizations to identify optimal price bands, high-performing room types, and revenue-driving market trends for data-driven pricing strategy recommendations.",
    tags: ["Google Sheets", "Excel"],
    githubLink: "https://github.com/Pratiti-paul/AirbnbPriceOptimization",
    image: airbnbImg
  }
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="section-title reveal">Featured <span className="highlight">Projects</span></h2>
        
        <div className="projects-grid stagger-container">
          {projects.map((project) => (
            <div className="project-card stagger-item" key={project.id}>
              <div className="project-preview">
                {project.image && <img src={project.image} alt={project.title} />}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
                
                <div className="project-links">
                  {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="link-btn">
                        Live Demo <span className="arrow">↗</span>
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="link-btn outline">
                        GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
