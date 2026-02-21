// src/components/ui/TimelineItem.jsx
import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ 
  children, 
  position = 'left',
  index = 0 
}) => {
  const isLeft = position === 'left';
  
  return (
    <motion.div
      className={`relative flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-8`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="flex-1">
        {children}
      </div>
      <div className="hidden md:block w-4 h-4 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 relative z-10" />
      <div className="hidden md:block flex-1" />
    </motion.div>
  );
};

export default TimelineItem;