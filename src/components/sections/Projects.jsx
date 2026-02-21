import React from 'react';
import { projects } from '../../data/personalInfo';
import '../../styles/projects.css';

const Projects = () => (
  <section id="projects" className="projects">
    <div className="projects__container">
      <div className="projects__header">
        <h2 className="projects__title">Featured <span className="projects__title--gradient">Projects</span></h2>
        <p className="projects__subtitle">Enterprise-scale applications delivering real business value</p>
      </div>
      
      <div className="projects__grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card__image">
              <div className={`project-card__gradient bg-gradient-to-br ${project.color}`} />
              <div className="project-card__icon">{project.icon}</div>
              <div className="project-card__overlay">
                <div className="project-card__tech">
                  {project.technologies.slice(0, 3).map(t => (
                    <span key={t} className="project-card__tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="project-card__content">
              <div className="project-card__client">
                {project.client}
                <span className="project-card__category">{project.category}</span>
              </div>
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="projects__more">
        And <span>10+</span> more projects across various domains...
      </div>
    </div>
  </section>
);

export default Projects;