import React, { useState } from 'react';
import { MapPin, Calendar, Award, ChevronDown, ExternalLink } from 'lucide-react';
import { experiences } from '../../data/personalInfo';
import '../../styles/experience.css';


const Experience = () => {
  const [expandedId, setExpandedId] = useState(1);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="exp-section">
      <div className="exp-container">
      

         {/* Section Header */}
      <div className="exp__header">
        <h1 className="exp__title">
          Work <span className="exp__title--gradient">Experience</span>
        </h1>
      </div>

        {/* Bento Grid */}
        <div className="exp-grid">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;
            
            return (
              <div 
                key={exp.id} 
                className={`exp-card ${isExpanded ? 'exp-expanded' : ''}`}
                onClick={() => toggleExpand(exp.id)}
              >
                {/* Top Row */}
                <div className="exp-card-top">
                  <div className="exp-company-badge">
                    <span className="exp-initial">{exp.company[0]}</span>
                  </div>
                  
                  {exp.award && (
                    <div className="exp-award-mini">
                      <Award size={14} />
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="exp-info">
                  <h3 className="exp-role">{exp.role}</h3>
                  <p className="exp-company">{exp.company}</p>
                  
                  <div className="exp-meta-row">
                    <span className="exp-meta">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="exp-meta">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Expandable Content */}
                <div className={`exp-content ${isExpanded ? 'exp-show' : ''}`}>
                  <div className="exp-divider" />
                  
                  <ul className="exp-list">
                    {exp.achievements.slice(0, 4).map((item, i) => (
                      <li key={i} className="exp-item">{item}</li>
                    ))}
                  </ul>

                  <div className="exp-tech-row">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="exp-tech">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Expand Icon */}
                <div className={`exp-icon ${isExpanded ? 'exp-rotate' : ''}`}>
                  <ChevronDown size={20} />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;