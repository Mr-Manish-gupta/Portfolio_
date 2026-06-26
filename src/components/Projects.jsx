import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'Eduford University Website',
      description: 'A comprehensive university website showcasing college information, courses, admissions, and more.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      status: 'Completed',
      github: 'https://github.com/Mr-Manish-gupta',
      live: '#'
    },
    {
      id: 6,
      title: 'Collaboration',
      description: 'Freelanceing platform that provides a learning and real-time working projects and given part time jobs.',
      technologies: ['Java', 'Spring-Boot', 'React'],
      status: 'Completed',
      github: 'https://github.com/Mr-Manish-gupta',
      live: '#'
    },
    {
      id: 7,
      title: 'Cloud Share',
      description: 'Cloud share platform is a tha file share and secure your file , documention, pdf, phote etc. High level secure your data.',
      technologies: ['Java', 'Spring-Boot', 'React'],
      status: 'Completed',
      github: 'https://github.com/Mr-Manish-gupta',
      live: '#'
    },
   
    {
      id: 2,
      title: 'Currency Converter',
      description: 'Real-time currency conversion tool that provides live exchange rates and converts between different countries.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
      status: 'Completed',
      github: 'https://github.com/Mr-Manish-gupta',
      live: '#'
    },
    {
      id: 3,
      title: 'NeuroNotesAI',
      description: 'AI-powered learning platform that provides structured syllabus, course roadmaps, and intelligent learning suggestions.',
      technologies: ['PowerShell', 'AI System', 'Web Tech'],
      status: 'Completed',
      github: 'https://github.com/Mr-Manish-gupta',
      live: '#',
      badge: '🏆 Hackathon Project'
    },
    {
      id: 4,
      title: 'Employee Management System',
      description: 'Backend system for managing employee records, departments, and payroll with role-based access control.',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
      status: 'In Progress',
      github: 'https://github.com/Mr-Manish-gupta',
      live: '#'
    },
    {
      id: 5,
      title: 'E-Commerce Website',
      description: 'Full-featured e-commerce platform with product catalog, shopping cart, payment integration, and user management.',
      technologies: ['Java', 'React', 'Spring Boot', 'MongoDB', 'JWT'],
      status: 'In Progress',
      github: 'https://github.com/Mr-Manish-gupta',
      live: '#'
    }
  ];

  const completedProjects = projectsData.filter(p => p.status === 'Completed');
  const inProgressProjects = projectsData.filter(p => p.status === 'In Progress');

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="title-underline"></div>
        </div>

        {/* Completed Projects */}
        <div className="projects-section">
          <h3 className="projects-subtitle">Completed Projects</h3>
          <div className="projects-grid">
            {completedProjects.map((project, index) => (
              <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
                {project.badge && <div className="project-badge">{project.badge}</div>}
                <div className="project-header">
                  <h3>{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> GitHub
                  </a>
                  {project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* In Progress Projects */}
        <div className="projects-section">
          <h3 className="projects-subtitle">In Progress</h3>
          <div className="projects-grid">
            {inProgressProjects.map((project, index) => (
              <div key={project.id} className="project-card in-progress" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="project-badge in-progress-badge">⏳ In Progress</div>
                <div className="project-header">
                  <h3>{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;