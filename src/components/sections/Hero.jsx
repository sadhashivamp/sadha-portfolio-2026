import React, { useState } from 'react';
import { Download, ChevronDown, Linkedin, Github, Mail } from 'lucide-react';
import { personalInfo, heroData } from '../../data/personalInfo';
import '../../styles/hero.css';
import myImg from '../../images/profile_sadha.png'
const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="hero">
      {/* Background Grid */}
      <div className="hero__grid" />
      
      <div className="hero__container">
        
        {/* LEFT - Content */}
        <div className="hero__content">
          
          {/* Badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span className="hero__badge-text">{heroData.badge}</span>
          </div>

          {/* Title */}
          <h1 className="hero__title">
            <span className="hero__title-line">{heroData.title[0]}</span>
            <span className="hero__title-line hero__title-line--gradient">
              {heroData.title[1]}
            </span>
          </h1>

          {/* Tech Stack */}
          <div className="hero__tech-stack">
            {heroData.techStack.map((tech) => (
              <span key={tech} className="hero__tech-badge">
                {tech}
              </span>
            ))}
          </div>

          <p className="hero__subtitle">{heroData.subtitle}</p>
          <p className="hero__description">{heroData.description}</p>

          {/* Buttons */}
          <div className="hero__buttons">
            <a href="/MyResume.pdf" download className="hero__btn hero__btn--primary">
              <Download size={18} />
              Download Resume
            </a>
            <a href="#projects" className="hero__btn hero__btn--secondary">
              View Projects
            </a>
          </div>

          {/* Social Links */}
          <div className="hero__social">
            <a href={personalInfo.linkedin} className="hero__social-link">
              <Linkedin size={24} />
            </a>
            <a href={personalInfo.github} className="hero__social-link">
              <Github size={24} />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hero__social-link">
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* RIGHT - Creative Image Display */}
        <div className="hero__image-wrapper">
          
          {/* Animated Background Blob */}
          <div className="hero__blob-bg" />
          
          {/* Rotating Ring */}
          <div className="hero__ring" />
          
          {/* Main Image Card */}
          <div className="hero__image-card">
            
            {/* Actual Image */}
            <img 
              src={myImg} 
              alt={personalInfo.name}
              className={`hero__image ${imageLoaded ? 'hero__image--loaded' : ''}`}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            
            {/* Fallback Initials */}
            {!imageLoaded && (
              <div className="hero__fallback">
                <span className="hero__fallback-text">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}

            {/* Corner Decorations */}
            <div className="hero__corner hero__corner--tl" />
            <div className="hero__corner hero__corner--br" />
          </div>

          {/* Floating Badges */}
          <div className="hero__floating-badge hero__floating-badge--1">
            🏆 Best Performer
          </div>
          <div className="hero__floating-badge hero__floating-badge--2">
            ⭐ Insta Award
          </div>
          <div className="hero__floating-badge hero__floating-badge--3">
            3+ Years Exp
          </div>
          
        </div>

      </div>

      {/* Scroll Down */}
      <div className="hero__scroll">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;