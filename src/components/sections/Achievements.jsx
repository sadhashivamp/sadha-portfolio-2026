import React from 'react';
import { achievements } from '../../data/personalInfo';
import '../../styles/achievements.css';

const Achievements = () => (
  <section id="achievements" className="achievements">
    <div className="achievements__container">
      <div className="achievements__header">
        <h2 className="achievements__title">Awards & <span className="achievements__title--gradient">Recognition</span></h2>
      </div>
      
      <div className="achievements__grid">
        {achievements.map((ach) => (
          <div key={ach.id} className={`achievement-card achievement-card--${ach.color}`}>
            <div className="achievement-card__glow" />
            <div className="achievement-card__icon">{ach.icon}</div>
            <h3 className="achievement-card__title">{ach.title}</h3>
            <div className="achievement-card__org">{ach.organization}, {ach.year}</div>
            <p className="achievement-card__desc">{ach.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;