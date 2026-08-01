import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaCode } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTheme, setActiveTheme] = useState('cyan');
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const themes = [
    { name: 'cyan', primary: '#64c8ff', secondary: '#00ff88', accent: '#ff007f' },
    { name: 'rose', primary: '#ff007f', secondary: '#7928ca', accent: '#00ff88' },
    { name: 'emerald', primary: '#00ff88', secondary: '#ffea00', accent: '#64c8ff' }
  ];

  const changeAccent = (theme) => {
    setActiveTheme(theme.name);
    const root = document.documentElement;
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--secondary', theme.secondary);
    root.style.setProperty('--accent', theme.accent);
    
    // Convert hex to rgb for glow variable
    const rgb = hexToRgb(theme.primary);
    root.style.setProperty('--border-glow', `rgba(${rgb}, 0.15)`);
  };

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
      `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
      : '100, 200, 255';
  };

  useEffect(() => {
    const handleScroll = () => {
      // Scroll Progress Bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // scrolled background toggle
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Viewport Spy
      const sections = ['home', 'about', 'timeline', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (click) {
      const timer = setTimeout(() => {
        setClick(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [click]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Scroll indicator bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>

      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <FaCode className="logo-icon" />
          <span>MG</span>.dev
        </a>

        {/* Accent Color theme Switcher */}
        <div className="theme-selector" title="Choose Accent Color">
          {themes.map((theme) => (
            <button
              key={theme.name}
              className={`theme-dot ${theme.name} ${activeTheme === theme.name ? 'active' : ''}`}
              onClick={() => changeAccent(theme)}
              aria-label={`Switch to ${theme.name} accent`}
              style={{ backgroundColor: theme.primary }}
            />
          ))}
        </div>
        
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <a href="#home" className={`nav-links ${activeSection === 'home' ? 'active' : ''}`} onClick={closeMobileMenu}>
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className={`nav-links ${activeSection === 'about' ? 'active' : ''}`} onClick={closeMobileMenu}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#timeline" className={`nav-links ${activeSection === 'timeline' ? 'active' : ''}`} onClick={closeMobileMenu}>
              Timeline
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className={`nav-links ${activeSection === 'skills' ? 'active' : ''}`} onClick={closeMobileMenu}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className={`nav-links ${activeSection === 'projects' ? 'active' : ''}`} onClick={closeMobileMenu}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-links-mobile" onClick={closeMobileMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

