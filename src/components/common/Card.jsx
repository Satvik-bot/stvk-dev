import React from 'react';

export const Card = ({ children, className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`glass-container p-6 space-y-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card; 