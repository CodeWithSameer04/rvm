import React from 'react';
import './Contact.css';
import { FaFacebookF, FaInstagram } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Left Side: Info */}
        <div className="contact-info">
          <h2 className="contact-heading">Let's Get In Touch</h2>
          <p className="contact-subtext">Have a question? We're here to help.</p>
          
          <div className="contact-details">
            <div className="detail-item">
              <h4>Phone</h4>
              <p>+91 98765 43210</p>
            </div>
            <div className="detail-item">
              <h4>Email</h4>
              <p>hello@rvmstudio.com</p>
            </div>
          </div>

          <div className="contact-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="contact-form-container">
          <form className="contact-form">
            <div className="form-group">
              <label>NAME*</label>
              <input type="text" placeholder="YOUR NAME" required />
            </div>
            
            <div className="form-group">
              <label>LAST NAME*</label>
              <input type="text" placeholder="YOUR LAST NAME" required />
            </div>

            <div className="form-group">
              <label>EMAIL*</label>
              <input type="email" placeholder="YOUR EMAIL ADDRESS" required />
            </div>

            <div className="form-group">
              <label>MESSAGE*</label>
              <textarea placeholder="ENTER YOUR MESSAGE" rows="4" required></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;