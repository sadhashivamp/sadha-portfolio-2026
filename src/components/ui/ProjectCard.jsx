// src/components/ui/ProjectCard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import SkillTag from './SkillTag';

const ProjectCard = ({ 
  project, 
  index = 0 
}) => {
  const { title, client, description, technologies, icon, color, category } = project;

  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass mb-6">
        <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-80`} />
        
        <div className="absolute inset-0 flex items-center justify-center text-6xl transform group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span 
                key={tech} 
                className="px-2 py-1 rounded bg-white/10 text-xs text-white border border-white/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-gray-500 font-mono tracking-wider uppercase">{client}</span>
          <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs border border-cyan-500/20">
            {category}
          </span>
        </div>
        
        <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;