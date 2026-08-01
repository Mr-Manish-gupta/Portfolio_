import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaChartBar, FaCode, FaGitAlt } from 'react-icons/fa';
import './GithubStats.css';

const GithubStats = () => {
  // Generate contribution calendar squares (24 weeks * 7 days = 168 squares)
  const generateCalendar = () => {
    const calendar = [];
    const seed = [
      0, 1, 0, 2, 3, 0, 1, 4, 2, 0, 0, 1, 2, 0, 3, 4, 1, 0, 2, 1, 0, 3, 4, 2,
      1, 0, 2, 0, 3, 1, 0, 4, 2, 1, 0, 3, 0, 2, 1, 4, 0, 3, 2, 1, 0, 0, 3, 2,
      4, 1, 0, 2, 3, 0, 1, 4, 2, 0, 0, 1, 2, 0, 3, 4, 1, 0, 2, 1, 0, 3, 4, 2,
      1, 0, 2, 0, 3, 1, 0, 4, 2, 1, 0, 3, 0, 2, 1, 4, 0, 3, 2, 1, 0, 0, 3, 2,
      0, 1, 0, 2, 3, 0, 1, 4, 2, 0, 0, 1, 2, 0, 3, 4, 1, 0, 2, 1, 0, 3, 4, 2,
      1, 0, 2, 0, 3, 1, 0, 4, 2, 1, 0, 3, 0, 2, 1, 4, 0, 3, 2, 1, 0, 0, 3, 2,
      0, 1, 2, 3, 0, 1, 4, 2, 1, 0, 3, 4, 2, 1, 0, 2, 0, 3, 1, 0, 4, 2, 1, 0
    ];
    
    for (let i = 0; i < 168; i++) {
      const level = seed[i % seed.length];
      let count = 0;
      if (level === 1) count = Math.floor(Math.random() * 2) + 1;
      else if (level === 2) count = Math.floor(Math.random() * 3) + 3;
      else if (level === 3) count = Math.floor(Math.random() * 4) + 6;
      else if (level === 4) count = Math.floor(Math.random() * 6) + 10;

      calendar.push({ id: i, level, count });
    }
    return calendar;
  };

  const calendarDays = generateCalendar();

  const mockStats = [
    { label: "Total Commits (2025-2026)", value: "542+", icon: <FaGitAlt /> },
    { label: "Pull Requests Merged", value: "24", icon: <FaCode /> },
    { label: "Public Repositories", value: "14", icon: <FaGithub /> },
    { label: "Contributions Active Ratio", value: "94.2%", icon: <FaChartBar /> }
  ];

  const languageDistribution = [
    { name: "Java", percentage: 65, color: "#b07219" },
    { name: "JavaScript / React", percentage: 25, color: "#f1e05a" },
    { name: "CSS / Web Tech", percentage: 10, color: "#563d7c" }
  ];

  return (
    <section id="github-stats" className="github-stats">
      <div className="stats-container">
        <motion.div 
          className="stats-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">GitHub <span>Activity</span></h2>
          <p className="stats-subtitle">Real-time open source contributions and repository analytics.</p>
          <div className="title-underline"></div>
        </motion.div>

        <div className="stats-grid">
          {/* Calendar simulation card */}
          <motion.div 
            className="stats-card calendar-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="stats-card-header">
              <FaGitAlt className="stats-icon" />
              <h3>Contribution Graph (Last 24 Weeks)</h3>
            </div>
            
            <div className="calendar-scroll-box">
              <div className="calendar-grid">
                {calendarDays.map((day) => (
                  <div 
                    key={day.id} 
                    className={`calendar-day level-${day.level}`}
                    title={`${day.count} contributions`}
                  />
                ))}
              </div>
            </div>

            <div className="calendar-legend">
              <span>Less</span>
              <div className="legend-day level-0"></div>
              <div className="legend-day level-1"></div>
              <div className="legend-day level-2"></div>
              <div className="legend-day level-3"></div>
              <div className="legend-day level-4"></div>
              <span>More</span>
            </div>
          </motion.div>

          {/* Languages distribution & metrics card */}
          <motion.div 
            className="stats-card analytical-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="stats-card-header">
              <FaChartBar className="stats-icon" />
              <h3>Repository Analytics</h3>
            </div>

            <div className="stats-metrics-grid">
              {mockStats.map((stat, index) => (
                <div key={index} className="stat-metric-item">
                  <div className="stat-metric-icon">{stat.icon}</div>
                  <div>
                    <h4>{stat.value}</h4>
                    <p>{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="language-tracker">
              <h4>Primary Code Stack</h4>
              <div className="language-bar-wrapper">
                {languageDistribution.map((lang, index) => (
                  <div 
                    key={index} 
                    className="language-bar-segment"
                    style={{ 
                      width: `${lang.percentage}%`,
                      backgroundColor: lang.color 
                    }}
                    title={`${lang.name}: ${lang.percentage}%`}
                  />
                ))}
              </div>
              <div className="language-labels">
                {languageDistribution.map((lang, index) => (
                  <div key={index} className="language-label-item">
                    <span className="lang-color-dot" style={{ backgroundColor: lang.color }} />
                    <span className="lang-name">{lang.name}</span>
                    <span className="lang-percentage">{lang.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="github-action-wrapper"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="https://github.com/Mr-Manish-gupta" target="_blank" rel="noopener noreferrer" className="github-follow-btn">
            <FaGithub /> View Profile on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;
