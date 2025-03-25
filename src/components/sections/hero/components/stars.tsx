// components/hero/Stars.tsx
'use client';

import React, { useMemo } from 'react';
import Star from './star';


const Stars: React.FC = () => {
  const stars = useMemo(() => 
    Array(100).fill(null).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${(i % 5) * 20 + Math.random() * 15}%`,
      size: Math.random() < 0.8 ? 
        `${Math.random() * 2 + 1}px` : 
        `${Math.random() * 3 + 2}px`,
      opacity: Math.random() * 0.7 + 0.3
    })),
  []);

  return (
    <>
      {stars.map(star => (
        <Star 
          key={star.id}
          top={star.top}
          left={star.left}
          size={star.size}
          opacity={star.opacity}
        />
      ))}
    </>
  );
};

export default Stars;