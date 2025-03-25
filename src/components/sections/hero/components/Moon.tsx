'use client';

import React from 'react';

interface MoonProps {
  animationStarted: boolean;
}

const Moon: React.FC<MoonProps> = ({ animationStarted }) => {
  return (
    <div 
      className={`
        absolute 
        w-24 h-24 md:w-36 md:h-36 lg:w-48 lg:h-48 
        rounded-full 
        bg-radial from-yellow-50 to-yellow-200 
        left-[75%] -translate-x-1/2 
        transition-all duration-[2000ms] ease-out
        shadow-[0_0_40px_10px_rgba(255,255,220,0.7)]
        ${animationStarted ? 'top-[10%] opacity-100 delay-[1100ms]' : 'bottom-0 translate-y-full opacity-0'}
      `}
    />
  );
};

export default Moon;