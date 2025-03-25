'use client';

import React from 'react';

interface StarProps {
  top: string;
  left: string;
  size: string;
  opacity: number;
  id?: number;
  pulse?: boolean;
  color?: string;
}

const Star: React.FC<StarProps> = ({ top, left, size, opacity, pulse = false, color = 'white' }) => {
  return (
    <div 
      className={`absolute rounded-full ${pulse ? 'animate-pulse' : ''}`}
      style={{
        top,
        left,
        width: size,
        height: size,
        opacity,
        backgroundColor: color,
        zIndex: 0
      }}
    />
  );
};

export default Star;
