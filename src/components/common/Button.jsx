// src/components/common/Button.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Send } from 'lucide-react';

const iconMap = {
  download: Download,
  external: ExternalLink,
  send: Send
};

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon = null,
  href = null,
  onClick = null,
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseStyles = "relative inline-flex items-center justify-center gap-2 font-semibold rounded-full overflow-hidden transition-all duration-300";
  
  const variants = {
    primary: "bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/25",
    secondary: "border border-white/20 text-white hover:border-cyan-400 hover:text-cyan-400",
    outline: "border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const IconComponent = icon ? iconMap[icon] : null;

  const buttonContent = (
    <>
      {IconComponent && <IconComponent className="w-5 h-5" />}
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500"
          initial={{ x: '100%' }}
          whileHover={{ x: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </>
  );

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {buttonContent}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {buttonContent}
    </motion.button>
  );
};

export default Button;