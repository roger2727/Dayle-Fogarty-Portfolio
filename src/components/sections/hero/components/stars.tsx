'use client';

import React, { useState, useEffect } from 'react';
import Star from './star';

interface StarsProps {
  count?: number;
  density?: 'low' | 'medium' | 'high';
  twinkle?: boolean;
  colorVariation?: boolean;
}

// This creates truly random star positioning while keeping it consistent between renders
const createStars = (count: number, shouldTwinkle: boolean, useColorVariation: boolean) => {
  // Colors for variation
  const starColors = ['white', '#E6E6FA', '#FFF8DC', '#FFFACD'];
  
  // Create a seeded random function to ensure consistency between server/client
  const seededRandom = (seed: number) => {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
  };
  
  return Array(count).fill(null).map((_, i) => {
    // Use different seeds for each property to avoid patterns
    const topSeed = i * 0.123;
    const leftSeed = i * 0.456;
    const sizeSeed = i * 0.789;
    const opacitySeed = i * 0.321;
    
    // Get truly random positions
    const top = `${Math.floor(seededRandom(topSeed) * 100)}%`;
    const left = `${Math.floor(seededRandom(leftSeed) * 100)}%`;
    
    // Make some stars larger for more depth perception
    const sizeBase = seededRandom(sizeSeed);
    const sizeVariation = sizeBase > 0.95 ? 3 : sizeBase > 0.85 ? 2 : 1;
    const size = `${sizeVariation + (sizeBase > 0.5 ? 1 : 0)}px`;
    
    // Add pulsing effect to some stars if twinkle is enabled
    const shouldPulse = shouldTwinkle && (seededRandom(i + 50) > 0.85);
    
    // Vary the opacity more for depth
    const opacityBase = 0.3 + (seededRandom(opacitySeed) * 0.7);
    
    // Choose color if variation is enabled
    const colorIndex = Math.floor(seededRandom(i + 100) * starColors.length);
    const color = useColorVariation ? starColors[colorIndex] : 'white';
    
    return {
      id: i,
      top,
      left,
      size,
      opacity: opacityBase,
      pulse: shouldPulse,
      color
    };
  });
};

const Stars: React.FC<StarsProps> = ({ 
  count = 200, 
  density = 'medium',
  twinkle = true,
  colorVariation = false
}) => {
  // Initially render nothing
  const [isClient, setIsClient] = useState(false);
  
  // Adjust star count based on density
  const actualCount = density === 'low' ? count / 2 : 
                     density === 'high' ? count * 2 : 
                     count;
  
  const starsData = createStars(actualCount, twinkle, colorVariation);

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
          pulse={star.pulse}
          color={star.color}
        />
      ))}
    </>
  );
};

export default Stars;