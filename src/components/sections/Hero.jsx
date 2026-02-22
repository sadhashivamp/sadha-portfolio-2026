import React, { useState, useEffect } from 'react';
import { Download, ChevronDown, Linkedin, Github, Mail, ArrowRight } from 'lucide-react';
import { personalInfo, heroData } from '../../data/personalInfo';
import '../../styles/hero.css';
import myImg from '../../images/sadha1.png';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax effect for floating badges
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="hero">
      {/* Enhanced Background */}
      <div className="hero__grid" />
      <div className="hero__glow hero__glow--1" />
      <div className="hero__glow hero__glow--2" />
      
      <div className="hero__container">
        
        {/* LEFT - Content */}
        <div className="hero__content">
          
          {/* Animated Badge */}
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            <span className="hero__badge-text">{heroData.badge}</span>
          </div>

          {/* Title with stagger animation */}
          <h1 className="hero__title">
            <span className="hero__title-line">{heroData.title[0]}</span>
            <span className="hero__title-line hero__title-line--gradient">
              {heroData.title[1]}
            </span>
          </h1>

          {/* Tech Stack with icons */}
          <div className="hero__tech-stack">
            {heroData.techStack.map((tech, index) => (
              <span 
                key={tech} 
                className="hero__tech-badge"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </span>
            ))}
          </div>

          <p className="hero__subtitle">{heroData.subtitle}</p>
          <p className="hero__description">{heroData.description}</p>

          {/* Enhanced Buttons */}
          <div className="hero__buttons">
            <a href="/MyResume.pdf" download className="hero__btn hero__btn--primary">
              <Download size={18} />
              <span>Download Resume</span>
              <ArrowRight size={16} className="hero__btn-arrow" />
            </a>
            <a href="#projects" className="hero__btn hero__btn--secondary">
              View Projects
            </a>
          </div>

          {/* Enhanced Social Links with tooltips */}
          <div className="hero__social">
            <a href={personalInfo.linkedin} className="hero__social-link" aria-label="LinkedIn">
              <Linkedin size={22} />
              <span className="hero__social-tooltip">LinkedIn</span>
            </a>
            <a href={personalInfo.github} className="hero__social-link" aria-label="GitHub">
              <Github size={22} />
              <span className="hero__social-tooltip">GitHub</span>
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hero__social-link" aria-label="Email">
              <Mail size={22} />
              <span className="hero__social-tooltip">Email</span>
            </a>
          </div>
        </div>

        {/* RIGHT - Enhanced Image Display */}
        <div className="hero__image-wrapper">
          
          {/* Multiple Animated Blobs */}
          <div className="hero__blob-bg hero__blob-bg--1" />
          <div className="hero__blob-bg hero__blob-bg--2" />
          
          {/* Rotating Rings */}
          <div className="hero__ring hero__ring--1" />
          <div className="hero__ring hero__ring--2" />
          
          {/* Main Image Card */}
          <div className="hero__image-card">
            <img 
              src={myImg} 
              alt={personalInfo.name}
              className={`hero__image ${imageLoaded ? 'hero__image--loaded' : ''}`}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            
            {!imageLoaded && (
              <div className="hero__fallback">
                <span className="hero__fallback-text">
                  {personalInfo.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            )}

            {/* Corner Decorations */}
            <div className="hero__corner hero__corner--tl" />
            <div className="hero__corner hero__corner--tr" />
            <div className="hero__corner hero__corner--bl" />
            <div className="hero__corner hero__corner--br" />
          </div>

          {/* Floating Badges with Parallax */}
          <div 
            className="hero__floating-badge hero__floating-badge--1"
            style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
          >
            <span>🏆</span>
            <span>Best Performer</span>
          </div>
          <div 
            className="hero__floating-badge hero__floating-badge--2"
            style={{ transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
          >
            <span>⭐</span>
            <span>Insta Award</span>
          </div>
          <div 
            className="hero__floating-badge hero__floating-badge--3"
            style={{ transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)` }}
          >
            <span>3+</span>
            <span>Years Exp</span>
          </div>
          
        </div>

      </div>

      {/* Enhanced Scroll Indicator */}
      <a href="#about" className="hero__scroll">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span className="hero__scroll-text">Scroll</span>
        <ChevronDown size={20} />
      </a>
    </section>
  );
};

export default Hero;