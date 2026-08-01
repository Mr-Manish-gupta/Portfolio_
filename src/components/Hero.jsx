import React, { useState, useRef, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
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
              View My Work <FaChevronRight className="cta-icon" />
            </a>
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
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
                <span className="terminal-title">bash - manish@portfolio</span>
              </div>
              <pre className="code-text">
                <code>
{`const developer = {
  name: "Manish Gupta",
  role: "Full Stack Dev",
  core: ["Java", "Spring Boot", "React"],
  databases: ["SQL", "MongoDB"],
  passion: "Clean Architecture",
  status: "Building the future..."
};`}
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
    </section>
  );
};

export default Hero;