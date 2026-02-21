import React, { useState } from 'react';
import { ChevronDown, Building2, MapPin, Calendar, Check } from 'lucide-react';
import { experiences } from '../../data/personalInfo';
import '../../styles/experience.css';

const Experience = () => {
  const [openId, setOpenId] = useState(1);

  const toggleCard = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const getIcon = (company) => {
    if (company.includes('Infosys')) return '🏢';
    if (company.includes('Extended')) return '💻';
    return '💼';
  };

  return (
    <section id="experience" className="experience">
      <div className="experience__container">
        
        {/* Header */}
        <div className="experience__header">
          <h2 className="experience__title">
            Work <span className="experience__title--gradient">Experience</span>
          </h2>
          <p className="experience__subtitle">
            Professional journey building scalable frontend solutions for enterprise clients
          </p>
        </div>

        {/* Timeline */}
        <div className="experience__timeline">
          {experiences.map((exp, index) => {
            const isOpen = openId === exp.id;
            
            return (
              <div key={exp.id} className="experience__item">
                
                {/* Timeline Dot */}
                <div className="experience__dot">
                  {getIcon(exp.company)}
                </div>

                {/* Card */}
                <div className="experience__card">
                  
                  {/* Card Header (Clickable) */}
                  <button 
                    className="experience__card-header"
                    onClick={() => toggleCard(exp.id)}
                  >
                    <div className="experience__card-title-row">
                      <h3 className="experience__role">{exp.role}</h3>
                      {exp.award && (
                        <span className="experience__award-badge">
                          🏆 {exp.award}
                        </span>
                      )}
                    </div>
                    
                    <div className="experience__company">{exp.company}</div>
                    
                    <div className="experience__meta">
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                    </div>

                    {/* Tech Preview */}
                    <div className="experience__tech-preview">
                      {exp.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="experience__tech-tag">{tech}</span>
                      ))}
                      {exp.technologies.length > 4 && (
                        <span className="experience__tech-tag">+{exp.technologies.length - 4}</span>
                      )}
                    </div>

                    {/* Toggle Icon */}
                    <div className={`experience__toggle ${isOpen ? 'experience__toggle--open' : ''}`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>

                  {/* Expandable Content */}
                  <div className={`experience__card-content ${isOpen ? 'experience__card-content--open' : ''}`}>
                    
                    {/* Achievements */}
                    <ul className="experience__achievements">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="experience__achievement">
                          <Check size={16} className="experience__achievement-icon" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* All Technologies */}
                    <div className="experience__technologies">
                      <div className="experience__tech-label">Technologies Used</div>
                      <div className="experience__tech-list">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="experience__tech-item">{tech}</span>
                        ))}
                      </div>
                    </div>

                  </div>
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