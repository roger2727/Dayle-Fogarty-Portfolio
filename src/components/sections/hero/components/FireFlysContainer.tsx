'use client';

import React, { useMemo } from 'react';
import Firefly from './Fireflys';
import BushFly from './bushFlys';


interface FirefliesContainerProps {
  visible: boolean;
}

interface FireflyData {
  id: number;
  bottom: string;
  left: string;
  size: number;
  hue: number;
  opacity: number;
  glowSize: number;
  duration: number;
  delay: number;
}

const FirefliesContainer: React.FC<FirefliesContainerProps> = ({ visible }) => {
  const fireflies: FireflyData[] = useMemo(() => 
    Array(3).fill(null).map((_, i) => ({
      id: i + 200,
      bottom: `${Math.random() * 20 + 35}%`,
      left: `${Math.random() * 20 + 5}%`, 
      size: 5,
      hue: Math.floor(Math.random() * 15) + 120,
      opacity: Math.random() * 0.3 + 0.7,
      glowSize: 3,
      duration: Math.floor(Math.random() * 4000) + 7000,
      delay: Math.floor(Math.random() * 300)
    })),
  []);

  const bushflies: FireflyData[] = useMemo(() => 
    Array(4).fill(null).map((_, i) => ({
      id: i + 300,
      bottom: `${Math.random() * 10 + 5}%`,
      left: `${Math.random() * 100}%`,
      size: 4, 
      hue: Math.floor(Math.random() * 15) + 120,
      opacity: Math.random() * 0.3 + 0.6,
      glowSize: 3,
      duration: Math.floor(Math.random() * 5000) + 9000,
      delay: Math.floor(Math.random() * 400)
    })),
  []);

  return (
    <div className="absolute w-full h-full z-20 pointer-events-none">
      {fireflies.map(firefly => (
        <Firefly
          key={`firefly-${firefly.id}`}
          bottom={firefly.bottom}
          left={firefly.left}
          size={firefly.size}
          hue={firefly.hue}
          glowSize={firefly.glowSize}
          duration={firefly.duration}
          delay={firefly.delay}
          visible={visible}
        />
      ))}
      
      {bushflies.map(bushfly => (
        <BushFly
          key={`bushfly-${bushfly.id}`}
          bottom={bushfly.bottom}
          left={bushfly.left}
          size={bushfly.size}
          hue={bushfly.hue}
          glowSize={bushfly.glowSize}
          duration={bushfly.duration}
          delay={bushfly.delay}
          visible={visible}
        />
      ))}
    </div>
  );
};

export default FirefliesContainer;