import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
          <div className="title-underline"></div>
        </motion.div>

        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <p>
              Hi, I'm <strong>Manish Gupta</strong>, a Java Full Stack Developer with a passion for building robust backend systems and modern web applications. I specialize in designing and developing scalable APIs and microservices using Spring Boot and Java.
            </p>
            <p>
              I'm currently pursuing my B.Tech in Computer Science at Sushila Devi Bansal College of Technology (2024 - 2028), where I focus on software engineering, data structures, algorithms, and database management systems.
            </p>
            <p>
              I enjoy solving complex problems with clean, maintainable code and I'm committed to best practices in the Java ecosystem. My journey involves continuous learning and contributing to open-source projects while building real-world applications.
            </p>
            <p>
              When I'm not coding, I'm exploring new technologies, contributing to open source, or leveling up my system design skills. I'm always open to new opportunities and collaborations!
            </p>
          </motion.div>

          <motion.div className="about-stats" variants={itemVariants}>
            <motion.div className="stat" whileHover={{ y: -5, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <h3>2+</h3>
              <p>Years Learning</p>
            </motion.div>
            <motion.div className="stat" whileHover={{ y: -5, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <h3>8+</h3>
              <p>Projects Built</p>
            </motion.div>
            <motion.div className="stat" whileHover={{ y: -5, scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
              <h3>100%</h3>
              <p>Dedication</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;