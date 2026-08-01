import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      id: 6,
      title: 'Collaboration Portal',
      description: 'Engineered a full-stack freelance workspace facilitating secure real-time collaboration, project milestones tracking, and role-based workspace allocation.',
      technologies: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
      status: 'Completed',
      github: 'https://github.com/Mr-Manish-gupta',
      live: '#'
    },
    {
      id: 7,
      title: 'Cloud Share Platform',
      description: 'Developed a secure file-sharing service implementing data encryption pipelines, automated user quotas, and instant preview tools for PDFs and media.',
      technologies: ['Java', 'Spring Boot', 'React.js', 'MongoDB', 'REST API'],
      status: 'Completed',
      github: 'https://github.com/Mr-Manish-gupta',
      live: '#'
    },
    {
      id: 8,
      title: 'Creator Hub Marketplace',
      description: 'Designed a digital product store featuring automatic license key generation, digital product delivery pipelines, and secure order billing integration.',
      technologies: ['Java', 'Spring Boot', 'React.js', 'PostgreSQL', 'JWT'],
      status: 'Completed',
      github: 'https://github.com/Mr-Manish-gupta',
      live: '#'
    },
    {
      id: 3,
      title: 'NeuroNotesAI Dashboard',
      description: 'Built an AI-driven educational portal analyzing collegiate syllabi to generate customized learning paths, roadmap timelines, and semantic course search.',
      technologies: ['React.js', 'Spring Boot', 'Generative AI', 'Tailwind CSS'],
      status: 'Completed',
      github: 'https://github.com/Mr-Manish-gupta',
      live: '#',
      badge: '🚀 Hackathon Project'
    },
    {
      id: 4,
      title: 'Employee Management ERP',
      description: 'Engineered an ERP backend module for tracking organizational units, automated payroll schedules, and role-based authorization scopes (RBAC).',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'Spring Security'],
      status: 'Completed',
      github: 'https://github.com/Mr-Manish-gupta',
      live: '#'
    },
    {
      id: 5,
      title: 'E-Commerce Web Suite',
      description: 'Designed a high-throughput storefront featuring catalog caching, transactional shopping cart flows, JWT-secured checkouts, and inventory control panels.',
      technologies: ['Java', 'React.js', 'Spring Boot', 'MongoDB', 'JWT', 'Spring Security'],
      status: 'Completed',
      github: 'https://github.com/Mr-Manish-gupta',
      live: '#'
    }
  ];

  const [filter, setFilter] = React.useState('All');

  const filteredProjects = projectsData.filter(project => {
    if (filter === 'All') return true;
    if (filter === 'Java') {
      return project.technologies.some(tech => 
        tech.toLowerCase().includes('java') || tech.toLowerCase().includes('spring')
      );
    }
    if (filter === 'React') {
      return project.technologies.some(tech => tech.toLowerCase().includes('react'));
    }
    if (filter === 'WebTech') {
      return project.technologies.some(tech => 
        ['html', 'css', 'javascript', 'api'].includes(tech.toLowerCase()) && 
        !tech.toLowerCase().includes('java') && 
        !tech.toLowerCase().includes('spring')
      );
    }
    return true;
  });

  const filterCategories = [
    { id: 'All', label: 'All Projects' },
    { id: 'Java', label: 'Java & Spring Boot' },
    { id: 'React', label: 'React.js' },
    { id: 'WebTech', label: 'Web UI / API' }
  ];

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

        {/* Filter Categories Bar */}
        <motion.div 
          className="filter-buttons"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {filterCategories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div 
          layout 
          className="projects-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 30 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
                key={project.id} 
                className={`project-card ${project.status === 'In Progress' ? 'in-progress' : ''}`}
                whileHover={{ y: -8 }}
              >
                {project.status === 'In Progress' ? (
                  <div className="project-badge in-progress-badge">⏳ In Progress</div>
                ) : (
                  project.badge && <div className="project-badge">{project.badge}</div>
                )}
                
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
                  {project.status === 'Completed' && project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
