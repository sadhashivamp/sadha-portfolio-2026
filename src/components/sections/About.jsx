import React, { useState } from 'react';
import { MapPin, Mail, Phone, ArrowRight } from 'lucide-react';
import { personalInfo } from '../../data/personalInfo';
import '../../styles/about.css';

import myImg from '../../images/profile_sadha.png'

const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const stats = [
    { value: `${personalInfo.yearsOfExperience}+`, label: 'Years Exp.' },
    { value: `${personalInfo.projectsCompleted}+`, label: 'Projects' },
    { value: `${personalInfo.companiesWorked}`, label: 'Companies' }
  ];

  const floatingCards = [
    { icon: '🏆', label: 'Awards', value: '2+', position: '1' },
    { icon: '💼', label: 'Clients', value: '5+', position: '2' },
    { icon: '⚡', label: 'Skills', value: '15+', position: '3' }
  ];

  return (<section id="about" className="about">

    ```
    <div className="about__container">

      {/* Section Header */}
      <div className="about__header">
        <h2 className="about__title">
          About <span className="about__title--gradient">Me</span>
        </h2>
        <p className="about__subtitle">
          Passionate about creating exceptional digital experiences with modern technologies
        </p>
      </div>

      {/* Main Grid */}
      <div className="about__grid">

        {/* LEFT - Image Section */}
        <div className="about__image-section">
          <div className="about__image-frame">

            {/* Experience Badge */}
            <div className="about__exp-badge">
              <div className="about__exp-number">{personalInfo.yearsOfExperience}+</div>
              <div className="about__exp-text">Years Exp.</div>
            </div>

            {/* IMAGE WRAPPER (IMPORTANT FOR FLOATING CARDS) */}
            <div className="about__image-wrapper">
              <img
                src={myImg}
                alt="Sadashiva Profile"
                onLoad={() => setImageLoaded(true)}
              />
            </div>

            {/* Floating Cards */}
            {floatingCards.map((card) => (
              <div
                key={card.position}
                className={`about__float-card about__float-card--${card.position}`}
              >
                <div className="about__float-icon">{card.icon}</div>
                <div className="about__float-content">
                  <span className="about__float-label">{card.label}</span>
                  <span className="about__float-value">{card.value}</span>
                </div>
              </div>
            ))}

          </div>
        </div>

        {/* RIGHT - Content Section */}
        <div className="about__content">

          {/* Bio */}
          <div className="about__bio">
            <p className="about__paragraph">
              I'm a <span className="about__highlight">React Developer</span> with {personalInfo.yearsOfExperience}+ years of hands-on experience
              building modern web applications using <span className="about__highlight--purple">React.js</span>,
              <span className="about__highlight--purple"> Next.js</span>, and
              <span className="about__highlight--pink"> TypeScript</span>.
            </p>
            <p className="about__paragraph">
              Currently working as an <span className="about__highlight--white">{personalInfo.role} at {personalInfo.company}</span> in {personalInfo.location},
              I specialize in developing user-friendly interfaces with
              <span className="about__highlight"> Redux Toolkit</span> for state management, creating reusable components, and optimizing application performance.
            </p>
            <p className="about__paragraph">
              Recognized with the <span className="about__highlight--yellow">Best Performer Insta Award</span> for outstanding
              contributions and consistently receiving commendable feedback from management for proactive problem-solving and dedication.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="about__tech-section">
            <div className="about__tech-tags">
              {['React.js', 'Next.js', 'Redux Toolkit', 'TypeScript', 'Material-UI', 'Tailwind CSS'].map((tech) => (
                <span key={tech} className="about__tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="about__contact">
            {[
              { icon: MapPin, text: personalInfo.location },
              { icon: Mail, text: personalInfo.email },
              { icon: Phone, text: personalInfo.phone }
            ].map((item, index) => (
              <div key={index} className="about__contact-item">
                <div className="about__contact-icon">
                  <item.icon size={18} />
                </div>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="about__stats">
            {stats.map((stat) => (
              <div key={stat.label} className="about__stat-card">
                <div className="about__stat-number">{stat.value}</div>
                <div className="about__stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="about__cta">
            <a href="#contact" className="about__btn">
              Let's Work Together
              <ArrowRight size={18} />
            </a>
          </div>

        </div>
      </div>
    </div>
  </section>
  )
}

export default About;