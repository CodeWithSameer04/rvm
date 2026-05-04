import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Add this import
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import logo from '../assets/logo2.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // Close menu when a link is clicked
  };

  return (
    <nav className="navbar">
      {/* Top Bar - Always visible */}
      <div className="nav-header">
        <div className="nav-logo">
          {/* Use Link instead of a tag */}
          <Link to="/" onClick={() => handleLinkClick('home')}>
            <img src={logo} alt="Alvaro Logo" className="logo-img" />
          </Link>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </div>
      </div>

      {/* Desktop Links - Hidden on Mobile */}
      <ul className="nav-links-desktop">
        <li className={activeLink === 'home' ? 'active' : ''}><Link to="/" onClick={() => handleLinkClick('home')}>Home</Link></li>
        <li className={activeLink === 'about' ? 'active' : ''}><Link to="/about" onClick={() => handleLinkClick('about')}>About</Link></li>
        <li className={activeLink === 'projects' ? 'active' : ''}><Link to="/projects" onClick={() => handleLinkClick('projects')}>Projects</Link></li>
        <li className={activeLink === 'contact' ? 'active' : ''}><Link to="/contact" onClick={() => handleLinkClick('contact')}>Contact</Link></li>
        <Link to="/book" className="nav-book-btn" onClick={() => handleLinkClick('book')}>Book Now</Link>
      </ul>

      {/* Mobile Overlay Menu */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li className={activeLink === 'home' ? 'active' : ''}><Link to="/" onClick={() => handleLinkClick('home')}>Home</Link></li>
          <li className={activeLink === 'about' ? 'active' : ''}><Link to="/about" onClick={() => handleLinkClick('about')}>About</Link></li>
          <li className={activeLink === 'projects' ? 'active' : ''}><Link to="/projects" onClick={() => handleLinkClick('projects')}>Projects</Link></li>
          <li className={activeLink === 'contact' ? 'active' : ''}><Link to="/contact" onClick={() => handleLinkClick('contact')}>Contact</Link></li>
        </ul>
        <Link to="/book" className="mobile-book-btn-rect" onClick={() => setIsMenuOpen(false)}>
          Book Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;