import React from 'react';
import { Heart, ArrowUp, Linkedin, Github, Mail, Phone } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import '../../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
    { icon: Github, href: personalInfo.github, label: 'GitHub' },
    { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' },
    { icon: Phone, href: `tel:${personalInfo.phone}`, label: 'Phone' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Top Wave Decoration */}
      <div className="footer__wave">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" 
            fill="#050508"
          />
        </svg>
      </div>

      <div className="footer__container">
        
        {/* Main Footer Content */}
        <div className="footer__main">
          
          {/* Brand Column */}
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <span className="footer__logo-text">SSP</span>
              <span className="footer__logo-dot">.</span>
            </a>
            <p className="footer__tagline">
              Building digital experiences with passion and precision. Let's create something amazing together.
            </p>
            <div className="footer__social">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  className="footer__social-link"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__links">
            <h4 className="footer__title">Quick Links</h4>
            <ul className="footer__list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer__link">
                    <span className="footer__link-arrow">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__contact">
            <h4 className="footer__title">Get In Touch</h4>
            <div className="footer__contact-list">
              <a href={`mailto:${personalInfo.email}`} className="footer__contact-item">
                <Mail size={16} />
                <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className="footer__contact-item">
                <Phone size={16} />
                <span>{personalInfo.phone}</span>
              </a>
              <div className="footer__contact-item footer__contact-item--static">
                <span className="footer__location-icon">📍</span>
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* CTA Column */}
          <div className="footer__cta">
            <h4 className="footer__title">Let's Work Together</h4>
            <p className="footer__cta-text">
              Have a project in mind? I'm always open to discussing new opportunities.
            </p>
            <a href="#contact" className="footer__cta-btn">
              Start a Conversation
            </a>
          </div>

        </div>

        {/* Divider */}
        <div className="footer__divider" />

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} <span>{personalInfo.name}</span>. All rights reserved.
          </p>
          
          <p className="footer__made-with">
            Made with <Heart size={14} className="footer__heart" fill="currentColor" /> using React
          </p>

          <button onClick={scrollToTop} className="footer__top-btn" aria-label="Scroll to top">
            <ArrowUp size={20} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;