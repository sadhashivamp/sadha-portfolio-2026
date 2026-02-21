import React from 'react';
import { skills } from '../../data/personalInfo';
import '../../styles/skills.css';

const iconMap = { 'Frontend Core': '⚡', 'UI Frameworks': '🎨', 'Tools & Platforms': '🛠️', 'Testing': '✓' };
const colorMap = { cyan: 'skill-card__icon--cyan', purple: 'skill-card__icon--purple', pink: 'skill-card__icon--pink', green: 'skill-card__icon--green' };

const Skills = () => (
  <section id="skills" className="skills">
    <div className="skills__container">
      <div className="skills__header">
        <h2 className="skills__title">Technical <span className="skills__title--gradient">Skills</span></h2>
        <p className="skills__subtitle">Modern frontend stack focused on performance and scalability</p>
      </div>
      
      <div className="skills__grid">
        {skills.map((skill) => (
          <div key={skill.category} className="skill-card">
            <div className={`skill-card__icon ${colorMap[skill.color]}`}>{iconMap[skill.category]}</div>
            <h3 className="skill-card__title">{skill.category}</h3>
            <div className="skill-card__tags">
              {skill.items.map(item => <span key={item} className="skill-card__tag">{item}</span>)}
            </div>
          </div>
        ))}
      </div>
      
      <div className="skills__competencies">
        <h3 className="skills__comp-title">Core Competencies</h3>
        <div className="skills__comp-grid">
          {[
            { num: '01', title: 'React.js & Next.js', desc: 'Building scalable applications with modern React patterns and SSR', color: 'cyan' },
            { num: '02', title: 'Redux Toolkit', desc: 'Complex state management with optimized performance', color: 'purple' },
            { num: '03', title: 'TypeScript', desc: 'Type-safe development with enhanced code quality', color: 'pink' },
            { num: '04', title: 'API Integration', desc: 'RESTful APIs, Axios, error handling and optimization', color: 'cyan' },
            { num: '05', title: 'UI/UX Implementation', desc: 'Material-UI, Tailwind CSS, responsive design systems', color: 'purple' },
            { num: '06', title: 'Agile Development', desc: 'Scrum, code reviews, cross-functional collaboration', color: 'pink' }
          ].map((item) => (
            <div key={item.num} className="skill-item">
              <div className={`skill-item__num skill-item__num--${item.color}`}>{item.num}</div>
              <div>
                <div className="skill-item__title">{item.title}</div>
                <div className="skill-item__desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;