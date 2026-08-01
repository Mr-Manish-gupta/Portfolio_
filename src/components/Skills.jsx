import React from 'react';
import { FaJava, FaDatabase, FaTools, FaBook } from 'react-icons/fa';
import { motion } from 'framer-motion';
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

  const proficiencyData = [
    { name: 'Java', level: '80%' },
    { name: 'React', level: '75%' },
    { name: 'Spring Boot', level: '80%' },
    { name: 'Databases', level: '85%' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 12 }
    }
  };

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical <span>Skills</span></h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillsData.map((skillGroup, index) => (
            <motion.div 
              key={index} 
              className="skill-card"
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(100, 200, 255, 0.25)' }}
            >
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
            </motion.div>
          ))}
        </motion.div>

        <div className="proficiency-section">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Proficiency Level
          </motion.h3>
          <div className="proficiency-grid">
            {proficiencyData.map((item, index) => (
              <div key={index} className="proficiency-item">
                <div className="proficiency-header">
                  <span>{item.name}</span>
                  <span>{item.level}</span>
                </div>
                <div className="proficiency-bar">
                  <motion.div 
                    className="proficiency-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: item.level }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: index * 0.1 }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;