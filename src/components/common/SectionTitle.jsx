// src/components/common/SectionTitle.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ 
  title, 
  highlight, 
  subtitle = null,
  align = 'center',
  className = '' 
}) => {
  const alignClasses = {
    center: 'text-center',
    left: 'text-left',
    right: 'text-right'
  };

  return (
    <motion.div 
      className={`mb-16 ${alignClasses[align]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
        {title}{' '}
        <span className="gradient-text">{highlight}</span>
      </h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;