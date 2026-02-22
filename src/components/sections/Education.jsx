import React from 'react';
import { education } from '../../data/personalInfo';
import '../../styles/education.css';

const Education = () => (
  <section id="education" className="education">
    <div className="education__container">
      <div className="education__header">
        <h2 className="education__title">
          Education & <span className="education__title--gradient">Training</span>
        </h2>
      </div>
      
      <div className="education__list">
        {education.map((edu) => (
          <div 
            key={edu.id} 
            className={`edu-card ${edu.type === 'ongoing' ? 'edu-card--ongoing' : ''}`}
          >
            <div className="edu-card__icon">
              {edu.icon}
              {edu.type === 'ongoing' && <span className="edu-card__status" />}
            </div>
            
            <div className="edu-card__content">
              <div className="edu-card__header">
                <h3 className="edu-card__degree">{edu.degree}</h3>
                {edu.type === 'ongoing' && (
                  <span className="edu-card__badge">{edu.status}</span>
                )}
              </div>
              
              {/* Institution with partner badges */}
              <div className="edu-card__institution">
                {edu.partners ? (
                  <div className="edu-card__partners">
                    <span className="edu-card__partner edu-card__partner--iit">
                      {edu.partners[0]}
                    </span>
                    <span className="edu-card__plus">×</span>
                    <span className="edu-card__partner edu-card__partner--masai">
                      {edu.partners[1]}
                    </span>
                  </div>
                ) : (
                  edu.institution
                )}
              </div>
              
              <div className="edu-card__meta">
                {edu.type === 'completed' 
                  ? `Graduated: ${edu.year} | CGPA: ${edu.score}` 
                  : `Duration: ${edu.duration}`
                }
              </div>
              
              {edu.description && (
                <div className="edu-card__desc">{edu.description}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;