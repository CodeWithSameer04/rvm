import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">
        
        {/* Left Column: Branding & Intro */}
        <div className="footer-branding">
          <h2 className="footer-logo">RVM Studio</h2>
          <div className="footer-intro">
            <h3 className="footer-tagline">Where sound meets soul.</h3>
            <p className="footer-description">
              More than just music, we craft a tailored sonic experience that blends 
              timeless artistry with a modern edge. Whether you’re here to record a 
              single or produce a full project, you’ll leave sounding polished, 
              confident, and unmistakably you.
            </p>
          </div>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaXTwitter /></a>
          </div>
        </div>

        {/* Right Columns: Navigation & Info */}
        <div className="footer-links-group">
          <div className="footer-column">
            <h4 className="footer-label">Navigation</h4>
            <ul className="footer-list">
              <li><a href="/">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="#book">Book a Session</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4 className="footer-label">Address</h4>
            <p className="footer-text">
              Sector 21, Gurugram<br />
              Haryana, India
            </p>
          </div>

          <div className="footer-column">
            <h4 className="footer-label">Contacts</h4>
            <p className="footer-text">
              +91 98765 43210<br />
              hello@rvmstudio.com
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;