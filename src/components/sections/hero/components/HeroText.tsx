'use client';

import React from 'react';

interface HeroTextProps {
  animationStarted: boolean;
}

const HeroText: React.FC<HeroTextProps> = ({ animationStarted }) => {
  return (
    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20`}>
      <div className={`backdrop-blur-sm bg-black/20 px-8 py-6 rounded-lg border border-amber-300/30 transition-opacity duration-1000 ${
        animationStarted ? 'opacity-100 delay-[3000ms]' : 'opacity-0'
      }`}>
        <div className="relative">
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-[0_4px_8px_rgba(0,0,0,0.9)]">
            <div className="mb-1">
              <span className="font-serif tracking-wide text-white">DAYLE</span>
            </div>
            <div className="relative">
              <span className="font-serif tracking-wide text-white">FOGARTY</span>
              <div className="h-px bg-gradient-to-r from-transparent via-amber-300 to-transparent w-3/4 mx-auto mt-2"></div>
            </div>
          </div>
          
          <p className="text-xl md:text-3xl text-sky-200 mb-3 font-serif italic drop-shadow-[0_3px_5px_rgba(0,0,0,0.9)]">
            Weaver of Fantastical Realms
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;