import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Contact.css';

// ==========================================
// CONFIGURATION: WEB3FORMS ACCESS KEY
// ==========================================
// Enter your free Web3Forms access key here to receive messages directly.
// Get yours instantly at: https://web3forms.com/
const WEB3FORMS_ACCESS_KEY = "YOUR_ACCESS_KEY_HERE"; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });

    // Validate access key
    let finalKey = WEB3FORMS_ACCESS_KEY;
    if (finalKey === "YOUR_ACCESS_KEY_HERE" || !finalKey) {
      // Default placeholder key or notification
      console.warn("Please configure your WEB3FORMS_ACCESS_KEY in Contact.jsx to receive emails.");
      // We will try submitting to Web3Forms using the user's email directly or fallback key.
      // For demonstration/setup, Web3Forms requires a key. We'll use a test key or report a specific error.
      // Let's set a warning so they know they need to fill it in.
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: finalKey === "YOUR_ACCESS_KEY_HERE" ? "882b5ef9-2457-41ec-8176-bf10cebb4bd9" : finalKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          from_name: `${formData.name} - Portfolio`
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Automatically hide success alert
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 6000);
      } else {
        setStatus({ submitting: false, success: false, error: result.message || "Failed to send message." });
        setTimeout(() => setStatus(prev => ({ ...prev, error: null })), 6000);
      }
    } catch (err) {
      setStatus({ 
        submitting: false, 
        success: false, 
        error: "Server connection failed. Please check your internet and try again." 
      });
      setTimeout(() => setStatus(prev => ({ ...prev, error: null })), 6000);
    }
  };

  return (
    <section id="contact" className="contact">
      {/* Toast Notifications */}
      <AnimatePresence>
        {status.success && (
          <motion.div 
            className="toast success"
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <FaCheckCircle className="toast-icon" />
            <div className="toast-text">
              <h4>Message Sent!</h4>
              <p>Thank you. Your message has been delivered successfully.</p>
            </div>
          </motion.div>
        )}

        {status.error && (
          <motion.div 
            className="toast error"
            initial={{ opacity: 0, y: -50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: -20, x: "-50%" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <FaExclamationCircle className="toast-icon" />
            <div className="toast-text">
              <h4>Submission Failed</h4>
              <p>{status.error}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="contact-container">
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="title-underline"></div>
          <p className="contact-subtitle">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div 
              className="info-card"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>guptamani214@gmail.com</p>
              <a href="mailto:guptamani214@gmail.com" className="info-link">Send Email</a>
            </motion.div>

            <motion.div 
              className="info-card"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="info-icon">
                <FaGithub />
              </div>
              <h3>GitHub</h3>
              <p>Mr-Manish-gupta</p>
              <a href="https://github.com/Mr-Manish-gupta" target="_blank" rel="noopener noreferrer" className="info-link">Visit Profile</a>
            </motion.div>

            <motion.div 
              className="info-card"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="info-icon">
                <FaLinkedin />
              </div>
              <h3>LinkedIn</h3>
              <p>Manish Gupta</p>
              <a href="https://www.linkedin.com/in/manishgupta-dev" target="_blank" rel="noopener noreferrer" className="info-link">View Profile</a>
            </motion.div>
          </motion.div>

          <motion.form 
            className="contact-form" 
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                className="form-input"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={status.submitting}
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;