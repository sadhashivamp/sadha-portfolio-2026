import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import '../../styles/contact.css';

const Contact = () => {
  const contactCards = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,  // Opens email app
      color: 'cyan',
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,  // Opens phone dialer on mobile
      color: 'purple',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: 'https://www.google.com/maps/search/Hyderabad,+India',  // Opens Google Maps
      color: 'pink',
      gradient: 'from-pink-500 to-orange-500'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin, color: '#0077b5' },
    { icon: Github, label: 'GitHub', href: personalInfo.github, color: '#333' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        
        <div className="contact__header">
          <h2 className="contact__title">
            Let's <span className="contact__title--gradient">Connect</span>
          </h2>
          <p className="contact__subtitle">
            Open to new opportunities and collaborations
          </p>
        </div>

        <div className="contact__cards-row">
          {contactCards.map((card, index) => (
            <a 
              key={card.label}
              href={card.href}
              className="contact__square-card"
              style={{ animationDelay: `${index * 0.1}s` }}
              // Open maps in new tab for location
              target={card.label === 'Location' ? '_blank' : undefined}
              rel={card.label === 'Location' ? 'noopener noreferrer' : undefined}
            >
              <div className={`contact__card-bg bg-gradient-to-br ${card.gradient}`} />
              <div className="contact__card-icon">
                <card.icon size={40} strokeWidth={1.5} />
              </div>
              <div className="contact__card-content">
                <div className="contact__card-label">{card.label}</div>
                <div className="contact__card-value">{card.value}</div>
              </div>
              <div className="contact__card-arrow">
                <ExternalLink size={20} />
              </div>
              <div className="contact__card-glow" />
            </a>
          ))}
        </div>

        <div className="contact__social-section">
          <div className="contact__social-line" />
          <p className="contact__social-text">Follow me on</p>
          <div className="contact__social-row">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-btn"
                style={{ '--social-color': social.color }}
              >
                <div className="contact__social-icon">
                  <social.icon size={28} />
                </div>
                <span className="contact__social-label">{social.label}</span>
              </a>
            ))}
          </div>
          <div className="contact__social-line" />
        </div>

      </div>
    </section>
  );
};

export default Contact;