import React from 'react';
import './AboutUs.css';
// Replace with your actual image filename
import rvmGearImg from '../assets/sideImg.png'; 

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <h2 className="about-heading">About Us</h2>
        
        <p className="about-text">
          At RVM, we believe music production is more than just recording — it’s a ritual of creativity and sonic perfection. Our engineers bring years of experience, precision, and genuine connection to every beat, mix, and master.
        </p>
        
        <p className="about-text">
          Rooted in analog tradition but designed for today’s artist, our studio blends old-school warmth with modern technology to create a sound that’s both timeless and innovative.
        </p>
        
        <button className="about-btn">Learn more</button>
      </div>

      <div className="about-image-container">
        <img src={rvmGearImg} alt="RVM Music Studio Gear" className="about-image" />
      </div>
    </section>
  );
};

export default AboutUs;