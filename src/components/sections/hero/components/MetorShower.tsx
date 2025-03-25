'use client';

import React from 'react';

interface MeteorShowerProps {
  active: boolean;
}

const MeteorShower: React.FC<MeteorShowerProps> = ({ active }) => {
  if (!active) return null;
  
  return (
    <>
      <div className="absolute w-1 h-1 top-[10%] left-[10%] bg-white rounded-full z-0 opacity-0 animate-meteor1" />
      <div className="absolute w-1 h-1 top-[15%] left-[15%] bg-white rounded-full z-0 opacity-0 animate-meteor2" />
      <div className="absolute w-1 h-1 top-[20%] left-[20%] bg-white rounded-full z-0 opacity-0 animate-meteor3" />
    </>
  );
};

export default MeteorShower;
