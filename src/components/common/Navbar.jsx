import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import '../../styles/navbar.css';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll for background and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = navLinks.map(link => link.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container">
          {/* Logo with animation */}
          <a href="#" className="navbar__logo">
            <span className="navbar__logo-bracket">[</span>
            <span className="navbar__logo-text">SADHA SHIVAM</span>
            <span className="navbar__logo-bracket">]</span>
          </a>

          {/* Desktop Menu */}
          <div className="navbar__menu">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`navbar__link ${activeSection === link.href.slice(1) ? 'navbar__link--active' : ''}`}
              >
                <span className="navbar__link-num">0{navLinks.indexOf(link) + 1}</span>
                <span className="navbar__link-text">{link.name}</span>
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <a href="#contact" className="navbar__cta">
            Let's Talk
          </a>

          {/* Mobile Toggle */}
          <button 
            className={`navbar__toggle ${isOpen ? 'navbar__toggle--open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className="navbar__toggle-line" />
            <div className="navbar__toggle-line" />
            <div className="navbar__toggle-line" />
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div className={`navbar__mobile ${isOpen ? 'navbar__mobile--open' : ''}`}>
        <div className="navbar__mobile-bg" />
        
        <div className="navbar__mobile-content">
          <div className="navbar__mobile-header">
            <span className="navbar__mobile-label">Navigation</span>
          </div>
          
          <nav className="navbar__mobile-nav">
            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`navbar__mobile-link ${activeSection === link.href.slice(1) ? 'navbar__mobile-link--active' : ''}`}
                onClick={handleLinkClick}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="navbar__mobile-num">0{index + 1}</span>
                <span className="navbar__mobile-text">{link.name}</span>
              </a>
            ))}
          </nav>

          <div className="navbar__mobile-footer">
            <a href={`mailto:${'your-email@example.com'}`} className="navbar__mobile-email">
              Get in touch
            </a>
            <div className="navbar__mobile-socials">
              <span>LinkedIn</span>
              <span>•</span>
              <span>GitHub</span>
              <span>•</span>
              <span>Twitter</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div 
        className={`navbar__overlay ${isOpen ? 'navbar__overlay--visible' : ''}`}
        onClick={() => setIsOpen(false)}
      />
    </>
  );
};

export default Navbar;