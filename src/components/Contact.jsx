import React, { useState } from 'react';
import {FaEnvelope,FaLinkedin,FaGithub } from 'react-icons/fa';  
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="title-underline"></div>
          <p className="contact-subtitle">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">
                <FaEnvelope />
              </div>
              <h3>Email</h3>
              <p>guptamani214@gmail.com</p>
              <a href="mailto:guptamani214@gmail.com" className="info-link">Send Email</a>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaGithub />
              </div>
              <h3>GitHub</h3>
              <p>Mr-Manish-gupta</p>
              <a href="https://github.com/Mr-Manish-gupta" target="_blank" rel="noopener noreferrer" className="info-link">Visit Profile</a>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <FaLinkedin />
              </div>
              <h3>LinkedIn</h3>
              <p>Manish Gupta</p>
              <a href="https://www.linkedin.com/in/manishgupta-dev" target="_blank" rel="noopener noreferrer" className="info-link">View Profile</a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
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

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;