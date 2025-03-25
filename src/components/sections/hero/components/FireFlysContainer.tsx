// components/hero/FirefliesContainer.tsx
'use client';

import React, { useMemo, useState, useEffect } from 'react';
import Firefly from './Fireflys';
import BushFly from './bushFlys';


interface FirefliesContainerProps {
  visible: boolean;
}

// Generate deterministic firefly positions
const createFireflies = () => {
  return Array(3).fill(null).map((_, i) => ({
    id: i + 200,
    bottom: `${35 + (i * 6)}%`,
    left: `${5 + (i * 7)}%`, 
    size: 5,
    hue: 120 + (i * 5),
    opacity: 0.7 + (i * 0.1),
    glowSize: 3,
    duration: 7000 + (i * 1000),
    delay: i * 100
  }));
};

// Generate deterministic bushfly positions
const createBushflies = () => {
  return Array(4).fill(null).map((_, i) => ({
    id: i + 300,
    bottom: `${5 + (i * 2)}%`,
    left: `${(i * 25)}%`,
    size: 4, 
    hue: 120 + (i * 2),
    opacity: 0.6 + (i * 0.05),
    glowSize: 3,
    duration: 9000 + (i * 1000),
    delay: i * 100
  }));
};

const FirefliesContainer: React.FC<FirefliesContainerProps> = ({ visible }) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  const fireflies = createFireflies();
  const bushflies = createBushflies();

  if (!isClient) {
    return null;
  }

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