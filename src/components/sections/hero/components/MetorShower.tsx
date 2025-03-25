'use client';

import React, { useEffect, useState } from 'react';

interface MeteorShowerProps {
  active: boolean;
}

interface Meteor {
  id: number;
  top: string;
  left: string;
  delay: number;
  duration: number;
  size: number;
}

const MeteorShower: React.FC<MeteorShowerProps> = ({ active }) => {
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  
  // Function to generate random meteor properties
  const createRandomMeteor = (id: number): Meteor => {
    return {
      id,
      top: `${Math.random() * 30}%`,
      left: `${Math.random() * 30}%`,
      delay: Math.random() * 2,
      duration: 0.8 + Math.random() * 0.8,
      size: 1 + Math.random()
    };
  };
  
  // Initialize meteors and set up continuous regeneration
  useEffect(() => {
    if (!active) return;
    
    // Create initial set of meteors
    const initialMeteors = Array.from({ length: 5 }, (_, i) => createRandomMeteor(i));
    setMeteors(initialMeteors);
    
    // Function to randomly regenerate meteors
    const regenerateMeteors = () => {
      setMeteors(prev => {
        // Randomly select 1-3 meteors to replace
        const numToReplace = 1 + Math.floor(Math.random() * 3);
        const newMeteors = [...prev];
        
        for (let i = 0; i < numToReplace; i++) {
          const indexToReplace = Math.floor(Math.random() * newMeteors.length);
          newMeteors[indexToReplace] = createRandomMeteor(prev[indexToReplace].id + 100);
        }
        
        return newMeteors;
      });
    };
    
    // Set up regeneration at random intervals
    const intervalId = setInterval(() => {
      regenerateMeteors();
    }, 1000 + Math.random() * 2000); // Random interval between 1-3 seconds
    
    return () => clearInterval(intervalId);
  }, [active]);
  
  if (!active) return null;
  
  return (
    <>
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute bg-white rounded-full z-0 opacity-0"
          style={{
            width: `${meteor.size}px`,
            height: `${meteor.size}px`,
            top: meteor.top,
            left: meteor.left,
            animation: `meteor${1 + (meteor.id % 3)} ${meteor.duration}s ease-in ${meteor.delay}s forwards`
          }}
        />
      ))}
    </>
  );
};

export default MeteorShower;