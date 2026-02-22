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
    { icon: '🏆', label: 'Awards', value: '2+' },
    { icon: '💼', label: 'Clients', value: '5+' },
    { icon: '⚡', label: 'Skills', value: '15+' }
  ];

  return (
    <section id="about" className="about">
      <div className="about__container">

        {/* Section Header */}
        <div className="about__header">
          <span className="about__overline">Get To Know Me</span>
          <h2 className="about__title">
            About <span className="about__title--gradient">Me</span>
          </h2>
        </div>

        {/* Main Layout - Image Left | Content Right */}
        <div className="about__layout">

          {/* LEFT - Big Image Section */}
          <div className="about__visual">
            <div className="about__image-box">

              {/* Main Image */}
              <div className="about__image-frame">
                <img
                  src={myImg}
                  alt="Sadashiva Profile"
                  className="about__img"
                  onLoad={() => setImageLoaded(true)}
                />

                {/* Fallback */}
                {!imageLoaded && (
                  <div className="about__fallback">
                    <span>SP</span>
                  </div>
                )}
              </div>

              {/* Experience Badge - Floating */}
              <div className="about__badge-exp">
                <span className="about__badge-num">{personalInfo.yearsOfExperience}+</span>
                <span className="about__badge-text">Years<br />Experience</span>
              </div>

              {/* Floating Info Cards */}
              {floatingCards.map((card, index) => (
                <div
                  key={card.label}
                  className={`about__float about__float--${index + 1}`}
                >
                  <span className="about__float-icon">{card.icon}</span>
                  <div className="about__float-info">
                    <span className="about__float-val">{card.value}</span>
                    <span className="about__float-lab">{card.label}</span>
                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* RIGHT - Content Section */}
          <div className="about__info">

            {/* Bio Text */}
            <div className="about__story">
              <p className="about__text">
                I’m a <span className="about__highlight">Frontend / React Developer</span> with {personalInfo.yearsOfExperience}+ years of hands-on experience crafting modern, scalable web applications using <span className="about__highlight-purple">React.js</span>, <span className="about__highlight-purple">Next.js</span>, and <span className="about__highlight-purple">TypeScript</span>. I enjoy turning complex ideas into clean, intuitive user experiences that feel fast, accessible, and reliable.
              </p>

              <p className="about__text">
                Currently working as an <span className="about__highlight-white">{personalInfo.role}</span> at <span className="about__highlight-white">{personalInfo.company}</span> in {personalInfo.location}, where I design and build responsive interfaces, develop reusable component architectures, and manage application state efficiently using <span className="about__highlight">Redux Toolkit</span>. My focus is not just writing code — but building maintainable systems that improve developer productivity and long-term product stability.
              </p>

              <p className="about__text">
                I have been honored with the <span className="about__highlight-gold">Best Performer Insta Award</span> for my contributions, and I consistently receive positive feedback for my problem-solving mindset, ownership, and ability to deliver high-quality features within tight timelines.
              </p>

              <p className="about__text">
                I strongly believe great software is a balance of performance, usability, and thoughtful design and that’s the standard I aim for in every project I work on.
              </p>


            </div>

            {/* Tech Stack */}
            <div className="about__stack">
              <h4 className="about__stack-title">Tech Stack</h4>
              <div className="about__stack-tags">
                {['React.js', 'Next.js', 'Redux Toolkit', 'TypeScript', 'Material-UI', 'Tailwind CSS', 'Node.js'].map((tech) => (
                  <span key={tech} className="about__stack-tag">{tech}</span>
                ))}
              </div>
            </div>

            {/* Contact Row */}
            <div className="about__reach">
              <div className="about__reach-item">
                <div className="about__reach-icon"><MapPin size={18} /></div>
                <span>{personalInfo.location}</span>
              </div>
              <div className="about__reach-item">
                <div className="about__reach-icon"><Mail size={18} /></div>
                <span>{personalInfo.email}</span>
              </div>
              <div className="about__reach-item">
                <div className="about__reach-icon"><Phone size={18} /></div>
                <span>{personalInfo.phone}</span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="about__numbers">
              {stats.map((stat) => (
                <div key={stat.label} className="about__stat">
                  <span className="about__stat-val">{stat.value}</span>
                  <span className="about__stat-lab">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="#contact" className="about__cta">
              <span>Let's Work Together</span>
              <ArrowRight size={20} />
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About;