import React from 'react';
import { FaJava, FaDatabase, FaTools, FaBook } from 'react-icons/fa';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: 'Backend',
      icon: <FaJava />,
      skills: ['Java', 'Spring Boot', 'REST API', 'JWT', 'JPA', 'Hibernate']
    },
    {
      category: 'Frontend',
      icon: <FaTools />,
      skills: ['React', 'HTML', 'CSS', 'JavaScript']
    },
    {
      category: 'Database',
      icon: <FaDatabase />,
      skills: ['MySQL', 'PostgreSQL', 'MongoDB']
    },
    {
      category: 'Tools & Others',
      icon: <FaBook />,
      skills: ['Git', 'GitHub', 'Maven', 'Postman', 'VS Code', 'IntelliJ', 'Render']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <div className="title-underline"></div>
        </div>

        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="skill-icon">
                {skillGroup.icon}
              </div>
              <h3>{skillGroup.category}</h3>
              <div className="skill-tags">
                {skillGroup.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    {skill}
                    </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="proficiency-section">
          <h3>Proficiency Level</h3>
          <div className="proficiency-grid">
            <div className="proficiency-item">
              <div className="proficiency-header">
                <span>Java</span>
                <span>80%</span>
              </div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="proficiency-item">
              <div className="proficiency-header">
                <span>React</span>
                <span>75%</span>
              </div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="proficiency-item">
              <div className="proficiency-header">
                <span>Spring Boot</span>
                <span>80%</span>
              </div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="proficiency-item">
              <div className="proficiency-header">
                <span>Databases</span>
                <span>85%</span>
              </div>
              <div className="proficiency-bar">
                <div className="proficiency-fill" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;