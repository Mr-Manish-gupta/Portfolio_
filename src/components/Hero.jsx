import React, { useState, useRef, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

// Typewriter static words config
const typewriterWords = [
  "Java Full Stack Developer",
  "Spring Boot & Backend Specialist",
  "Scalable API & Microservices Builder"
];

const Hero = () => {
  const terminalRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [showResume, setShowResume] = useState(false);

  // Typewriter state variables
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    let timer;
    const handleType = () => {
      const fullText = typewriterWords[currentWordIndex];
      if (!isDeleting) {
        // Typing text
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(70);
        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        // Deleting text
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(35);
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length);
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);


  const [activeTab, setActiveTab] = useState('profile.js');

  // Terminal tab mock data
  const terminalTabs = {
    'profile.js': `const developer = {
  name: "Manish Gupta",
  role: "Full Stack Dev",
  core: ["Java", "Spring Boot", "React"],
  databases: ["SQL", "MongoDB"],
  passion: "Clean Architecture",
  status: "Building the future..."
};`,
    'stack.json': `{
  "backend": {
    "language": "Java",
    "frameworks": ["Spring Boot", "JPA", "Hibernate"],
    "security": ["Spring Security", "JWT"]
  },
  "frontend": {
    "frameworks": ["React.js", "JavaScript"],
    "styling": ["CSS3", "HTML5"]
  }
}`,
    'objective.txt': `OBJECTIVE:
To design, develop, and deliver highly scalable backend 
microservices and interactive user interfaces. Committed 
to writing clean, maintainable code using robust design 
patterns, automated unit testing, and performant query 
management.`
  };

  const handleMouseMove = (e) => {
    if (!terminalRef.current) return;
    const card = terminalRef.current;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Calculate rotation: max 25 degrees
    const rX = -(mouseY / height) * 25;
    const rY = (mouseX / width) * 25;
    
    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
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
    <section id="home" className="hero">
      {/* Floating 3D Background Particles */}
      <div className="bg-grid"></div>
      <div className="floating-glow glow-1"></div>
      <div className="floating-glow glow-2"></div>
      
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-text">
          <motion.div variants={itemVariants} className="badge">
            🚀 Open For Collaborations
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Hi, I'm <span>Manish Gupta</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-subtitle">
            I am a <span className="typewriter-text">{currentText}</span>
            <span className="typewriter-cursor">|</span>
          </motion.p>

          <motion.p variants={itemVariants} className="hero-description">
            Passionate about building scalable backend systems and modern web applications.
            Crafting code with clean architecture and high-performance APIs.
          </motion.p>

          <motion.div variants={itemVariants} className="hero-cta">
            <a href="#projects" className="cta-button primary">
              View Work <FaChevronRight className="cta-icon" />
            </a>
            <button className="cta-button secondary" onClick={() => setShowResume(true)}>
              View CV / Resume
            </button>
            <a href="#contact" className="cta-button secondary">
              Get In Touch
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-socials">
            <a href="https://github.com/Mr-Manish-gupta" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/manishgupta-dev" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:guptamani214@gmail.com" rel="noopener noreferrer" className="social-link" title="Email Me">
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 60, delay: 0.4 }}
        >
          <div 
            className="code-block-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={terminalRef}
            style={{
              transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              transition: 'transform 0.1s ease-out'
            }}
          >
            <div className="code-block">
              <div className="code-header">
                <div className="dot-group">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="terminal-tabs">
                  {Object.keys(terminalTabs).map((tab) => (
                    <button
                      key={tab}
                      className={`terminal-tab-btn ${activeTab === tab ? 'active' : ''}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              <pre className="code-text">
                <code key={activeTab}>
                  {terminalTabs[activeTab]}
                </code>
              </pre>
            </div>
            {/* Hologram shine effect */}
            <div className="hologram-shine"></div>
          </div>
        </motion.div>
      </motion.div>

      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
        <p>Scroll to explore</p>
      </div>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div 
            className="resume-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowResume(false)}
          >
            <motion.div 
              className="resume-modal-container"
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="resume-modal-header">
                <h2>Manish Gupta &mdash; CV / Resume</h2>
                <button className="resume-close-btn" onClick={() => setShowResume(false)}>&times;</button>
              </div>
              <div className="resume-modal-body">
                <div id="print-resume" className="resume-print-area">
                  <div className="resume-print-header">
                    <h1>MANISH GUPTA</h1>
                    <p className="resume-print-subtitle">Java Full Stack Developer</p>
                    <div className="resume-print-meta">
                      <span>guptamani214@gmail.com</span> | 
                      <span> github.com/Mr-Manish-gupta</span> | 
                      <span> linkedin.com/in/manishgupta-dev</span>
                    </div>
                  </div>

                  <div className="resume-print-section">
                    <h3>EDUCATION</h3>
                    <div className="resume-print-item">
                      <div className="resume-print-item-title">
                        <strong>Bachelor of Technology &mdash; Computer Science (B.Tech)</strong>
                        <span>2024 - 2028</span>
                      </div>
                      <p>Sushila Devi Bansal College of Technology, Indore</p>
                    </div>
                  </div>

                  <div className="resume-print-section">
                    <h3>TECHNICAL SKILLS</h3>
                    <p>
                      <strong>Backend Stack:</strong> Java, Spring Boot, Spring Security, JPA, Hibernate, REST APIs, JWT tokens. <br />
                      <strong>Frontend Stack:</strong> React.js, JavaScript, HTML5, CSS3, Responsive Layouts. <br />
                      <strong>Databases:</strong> MySQL, PostgreSQL, MongoDB. <br />
                      <strong>Tools & DevOps:</strong> Git, GitHub, Maven, Postman, VS Code, IntelliJ, Render.
                    </p>
                  </div>

                  <div className="resume-print-section">
                    <h3>FEATURED PROJECTS</h3>
                    <div className="resume-print-item">
                      <div className="resume-print-item-title">
                        <strong>Collaboration Portal (Java, Spring Boot, React)</strong>
                        <span>2025</span>
                      </div>
                      <p>Freelancing platform that coordinates project collaboration, real-time workload schedules, and gig distribution.</p>
                    </div>
                    <div className="resume-print-item">
                      <div className="resume-print-item-title">
                        <strong>Cloud Share Platform (Java, Spring Boot, React)</strong>
                        <span>2025</span>
                      </div>
                      <p>Full-stack file-hosting service that encrypts and securely stores documentation files, PDFs, and media assets.</p>
                    </div>
                    <div className="resume-print-item">
                      <div className="resume-print-item-title">
                        <strong>Creator Hub Marketplace (Java, Spring Boot, React)</strong>
                        <span>2024</span>
                      </div>
                      <p>E-commerce product licensing and digital delivery system integrating secure gateways and order tracking.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="resume-modal-footer">
                <button className="resume-action-btn primary" onClick={() => window.print()}>
                  Save / Print PDF
                </button>
                <button className="resume-action-btn secondary" onClick={() => setShowResume(false)}>
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
