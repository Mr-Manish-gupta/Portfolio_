import React from 'react';
import { motion } from 'framer-motion';
import { FaUserTie, FaRocket, FaBriefcase, FaCalendarCheck, FaFileDownload } from 'react-icons/fa';
import './Recruitment.css';

const Recruitment = () => {
  const recruiterCards = [
    {
      id: 1,
      icon: <FaCalendarCheck />,
      title: "Immediate Start",
      text: "Available to join immediately for summer/winter internships or junior developer roles. Zero notice period constraint."
    },
    {
      id: 2,
      icon: <FaRocket />,
      title: "Modern Tech Alignment",
      text: "Proficient in writing production-ready Spring Boot microservices, building secure JWT auth, and coding clean React layouts."
    },
    {
      id: 3,
      icon: <FaBriefcase />,
      title: "Clean Code Philosophy",
      text: "Striving for clean, self-documenting code. Practicing standardized workflows with Git branching, pull requests, and automated testing."
    }
  ];

  const quickMetrics = [
    { label: "Target Positions", value: "Java Full Stack Developer, Backend Intern, Spring Boot Developer" },
    { label: "Availability Status", value: "Immediate (0 Days Notice)" },
    { label: "Relocation & Work Preference", value: "Open to Relocation / Hybrid / Remote" },
    { label: "Location Base", value: "Indore, Madhya Pradesh, India" },
    { label: "Academic Standings", value: "Pursuing B.Tech in Computer Science & Engineering" },
    { label: "Key Strengths", value: "REST API Design, Database Normalization, State Management" }
  ];

  return (
    <section id="recruitment" className="recruitment">
      <div className="recruitment-container">
        <motion.div 
          className="recruitment-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Hiring &amp; <span>Placements</span></h2>
          <p className="recruitment-subtitle">A quick reference hub detailing why I am a strong candidate for your engineering team.</p>
          <div className="title-underline"></div>
        </motion.div>

        {/* Pillars of Competence */}
        <div className="recruitment-grid">
          {recruiterCards.map((card) => (
            <motion.div 
              key={card.id}
              className="recruitment-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: card.id * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="recruitment-card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Direct Metrics Block */}
        <div className="placement-details-wrapper">
          <motion.div 
            className="placement-metrics-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="placement-card-header">
              <FaUserTie className="placement-header-icon" />
              <h3>Recruitment Scorecard</h3>
            </div>
            
            <div className="metrics-list">
              {quickMetrics.map((metric, index) => (
                <div key={index} className="metric-row">
                  <span className="metric-label">{metric.label}</span>
                  <span className="metric-value">{metric.value}</span>
                </div>
              ))}
            </div>

            <div className="placement-cta-group">
              <a href="#contact" className="placement-btn primary-btn">
                Initiate Interview / Send Offer
              </a>
              <a href="#home" className="placement-btn secondary-btn">
                <FaFileDownload /> View &amp; Print CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;
