import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
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
      description: 'Freelancing platform that provides a learning and real-time working projects and given part time jobs.',
      technologies: ['Java', 'Spring-Boot', 'React'],
      status: 'Completed',
      github: 'https://github.com/Mr-Manish-gupta',
      live: '#'
    },
    {
      id: 7,
      title: 'Cloud Share',
      description: 'Cloud share platform is a file share and secure your file, documentation, pdf, photo etc. High level secure your data.',
      technologies: ['Java', 'Spring-Boot', 'React'],
      status: 'Completed',
      github: 'https://github.com/Mr-Manish-gupta',
      live: '#'
    },
    {
      id: 8,
      title: 'Creator_Hub',
      description: 'A full-stack creator marketplace for digital product selling, automated licensing, and secure payments built with Spring Boot and React.',
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
      badge: '🚀 Hackathon Project'
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 14 }
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured <span>Projects</span></h2>
          <div className="title-underline"></div>
        </motion.div>

        {/* Completed Projects */}
        <div className="projects-section">
          <motion.h3 
            className="projects-subtitle"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Completed Projects
          </motion.h3>
          <motion.div 
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {completedProjects.map((project) => (
              <motion.div 
                key={project.id} 
                className="project-card"
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
              >
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
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* In Progress Projects */}
        <div className="projects-section">
          <motion.h3 
            className="projects-subtitle"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            In Progress
          </motion.h3>
          <motion.div 
            className="projects-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {inProgressProjects.map((project) => (
              <motion.div 
                key={project.id} 
                className="project-card in-progress"
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
              >
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
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;