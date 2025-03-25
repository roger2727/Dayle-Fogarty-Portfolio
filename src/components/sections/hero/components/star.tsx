// components/hero/Star.tsx
'use client';

import React from 'react';

interface StarProps {
  top: string;
  left: string;
  size: string;
  opacity: number;
  id?: number; 
}

const Star: React.FC<StarProps> = ({ top, left, size, opacity }) => {
  return (
    <div 
      className="absolute bg-white rounded-full"
      style={{
        top,
        left,
        width: size,
        height: size,
        opacity,
        zIndex: 0
      }}
    />
  );
};

export default Star;