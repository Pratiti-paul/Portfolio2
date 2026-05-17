import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaStar, FaChevronUp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Error sending message. Is the server running?');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">
            Let's create <br />
            something <span className="highlight">real.</span>
          </h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Info</h3>
            
            <div className="info-card">
              <div className="info-icon"><FaEnvelope /></div>
              <div className="info-text">
                <span className="label">EMAIL</span>
                <span className="value">paulpratiti23@gmail.com</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><FaPhoneAlt /></div>
              <div className="info-text">
                <span className="label">PHONE</span>
                <span className="value">+91 6290370398</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><FaMapMarkerAlt /></div>
              <div className="info-text">
                <span className="label">LOCATION</span>
                <span className="value">Delhi, India</span>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon"><FaStar /></div>
              <div className="info-text">
                <span className="label">AVAILABLE FOR</span>
                <div className="tags">
                  <span className="tag">Freelance</span>
                  <span className="tag">Internships</span>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Send a Message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
              {status && <p className="status-message">{status}</p>}
            </form>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} Pratiti Paul. All rights reserved.</p>
          <button className="scroll-top" onClick={scrollToTop}>
            <FaChevronUp />
          </button>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
