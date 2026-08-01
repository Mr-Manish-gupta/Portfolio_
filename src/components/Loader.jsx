import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

const Loader = () => {
  const [percent, setPercent] = useState(0);
  const [show, setShow] = useState(true);
  const [logText, setLogText] = useState('> Initializing MG.dev...');

  useEffect(() => {
    // Percentage counter
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (percent === 30) {
      setLogText('> Loading systems & configurations...');
    } else if (percent === 60) {
      setLogText('> Establishing cyber security layers...');
    } else if (percent === 85) {
      setLogText('> Loading styling engines...');
    } else if (percent === 100) {
      setLogText('> Compilation successful. Starting...');
      // Hold loader for a brief moment at 100%
      const timeout = setTimeout(() => setShow(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [percent]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader-wrapper"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: -100,
            transition: { duration: 0.6, ease: [0.77, 0, 0.175, 1] } 
          }}
        >
          <div className="loader-container">
            <motion.div 
              className="loader-logo"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span className="loader-brackets">&lt;</span>
              <span className="loader-logo-text">Manish Gupta</span>
              <span className="loader-brackets">/&gt;</span>
            </motion.div>

            <div className="loader-terminal">
              <div className="terminal-logs">{logText}</div>
              <div className="terminal-bar-wrapper">
                <div className="terminal-bar" style={{ width: `${percent}%` }} />
              </div>
              <div className="terminal-percent">{percent}%</div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
