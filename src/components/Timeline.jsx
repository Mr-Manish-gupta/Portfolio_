import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaAward } from 'react-icons/fa';
import './Timeline.css';

const Timeline = () => {
  const timelineData = [
    {
      id: 1,
      type: 'education',
      icon: <FaGraduationCap />,
      date: '2024 - 2028',
      title: 'B.Tech in Computer Science',
      institution: 'Sushila Devi Bansal College of Technology',
      description: 'Focusing on Computer Science core topics including Software Engineering, Data Structures & Algorithms, Database Management Systems (DBMS), and Java/Web Tech.'
    },
    {
      id: 2,
      type: 'milestone',
      icon: <FaCode />,
      date: '2024 - Present',
      title: 'Java Full Stack Development Specialization',
      institution: 'Self-Learning & Practical Implementations',
      description: 'Acquired proficiency in building enterprise-grade backend APIs with Spring Boot, Spring Security, Hibernate, MySQL, PostgreSQL, and crafting modern UI layouts in React.'
    },
    {
      id: 3,
      type: 'achievement',
      icon: <FaAward />,
      date: '2025',
      title: 'NeuroNotesAI Hackathon Project',
      institution: 'Hackathon Award Winner',
      description: 'Co-developed and deployed a fully automated AI platform mapping collegiate syllabus blueprints and intelligent course roadmaps, leveraging React, Spring Boot, and AI integrations.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = (index) => ({
    hidden: { 
      opacity: 0, 
      x: index % 2 === 0 ? -40 : 40,
      y: 20 
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 15 }
    }
  });

  return (
    <section id="timeline" className="timeline">
      <div className="timeline-container">
        <motion.div 
          className="timeline-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">My <span>Timeline</span></h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div 
          className="timeline-track"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Vertical Line */}
          <div className="timeline-line" />

          {timelineData.map((item, index) => (
            <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <motion.div 
                className="timeline-card"
                variants={cardVariants(index)}
              >
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-card-header">
                  <div className="timeline-icon-box">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <h4>{item.institution}</h4>
                  </div>
                </div>
                <p className="timeline-desc">{item.description}</p>
                {/* Glow overlay */}
                <div className="timeline-glow" />
              </motion.div>
              
              {/* Central Node */}
              <div className="timeline-node">
                <div className="node-dot" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
