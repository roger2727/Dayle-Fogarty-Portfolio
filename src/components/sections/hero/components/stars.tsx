// components/hero/Stars.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Star from './star';


// This guarantees consistent star positioning between server and client
const createStars = () => {
  // Use a fixed seed, or pre-calculated array
  return Array(100).fill(null).map((_, i) => ({
    id: i,
    top: `${Math.floor((i * 137.5) % 100)}%`,
    left: `${Math.floor((i * 271.8) % 100)}%`,
    size: `${1 + (i % 3)}px`,
    opacity: 0.3 + ((i % 7) / 10)
  }));
};

const Stars: React.FC = () => {
  // Initially render nothing
  const [isClient, setIsClient] = useState(false);
  const starsData = createStars();

  // Only hydrate after component has mounted
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on server
  }

  return (
    <>
      {starsData.map(star => (
        <Star 
          key={star.id}
          id={star.id}
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