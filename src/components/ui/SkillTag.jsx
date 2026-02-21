// src/components/ui/SkillTag.jsx
import React from 'react';
import { motion } from 'framer-motion';

const SkillTag = ({ 
  name, 
  color = 'cyan',
  size = 'md',
  animated = true 
}) => {
  const colorClasses = {
    cyan: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20 hover:border-cyan-400',
    purple: 'bg-purple-500/10 text-purple-400 border-purple-500/20 hover:border-purple-400',
    pink: 'bg-pink-500/10 text-pink-400 border-pink-500/20 hover:border-pink-400',
    green: 'bg-green-500/10 text-green-400 border-green-500/20 hover:border-green-400',
    yellow: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20 hover:border-yellow-400'
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base'
  };

  const Component = animated ? motion.span : 'span';

  return (
    <Component
      className={`inline-block rounded-full border ${colorClasses[color]} ${sizeClasses[size]} transition-all cursor-default ${animated ? 'hover:scale-105' : ''}`}
      {...(animated && {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 }
      })}
    >
      {name}
    </Component>
  );
};

export default SkillTag;