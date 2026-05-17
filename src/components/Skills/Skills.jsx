import React from "react";
import "./Skills.css";

import {
  FaDatabase,
  FaPython,
  FaChartLine,
  FaChartBar,
  FaGithub,
  FaFileExcel
} from "react-icons/fa";

import {
  SiGooglesheets,
  SiPandas,
  SiNumpy,
  SiTableau,
  SiMysql,
  SiPostgresql,
  SiJupyter
} from "react-icons/si";

const skills = [
  { name: "Excel", icon: <FaFileExcel /> },
  { name: "Google Sheets", icon: <SiGooglesheets /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Pandas", icon: <SiPandas /> },
  { name: "NumPy", icon: <SiNumpy /> },
  { name: "Tableau", icon: <SiTableau /> },
  { name: "Matplotlib", icon: <FaChartLine /> },
  { name: "Seaborn", icon: <FaChartBar /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "Git/GitHub", icon: <FaGithub /> },
  { name: "Jupyter Notebook", icon: <SiJupyter /> },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <p className="skills-subtitle">MY SKILLSET</p>
        <h2 className="skills-title">
          The Magic <span className="highlight">Behind</span>
        </h2>

        <div className="skills-grid stagger-container">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item stagger-item">
              <div className="skill-icon">{skill.icon}</div>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
