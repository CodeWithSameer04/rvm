import React from 'react';
import './Hero.css';
import bgVideo from '../assets/heroVid.mp4'; 
import rvmLogoCenter from '../assets/rvmLogo2.png'; 

const Hero = () => {
  return (
    <div className="hero-section">
      <video autoPlay loop muted playsInline className="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="video-overlay"></div>

      <div className="hero-content-center">
        <img src={rvmLogoCenter} alt="rvm" className="hero-center-logo" />

        <div className="hero-text-block">
          <h1 className="hero-heading">
            Confident Sound <br />
            Timeless Vibes
          </h1>

          <div className="hero-divider"></div>

          <p className="hero-subtext">Modern music with a classic soul</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;