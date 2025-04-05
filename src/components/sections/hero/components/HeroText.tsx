import React from 'react';

const HeroText: React.FC = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-20">
      <div 
        className="backdrop-blur-sm bg-black/30 px-14 md:px-8 py-6 rounded-lg border border-amber-300/30 opacity-0 animate-fade-in"
      >
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

          {/* Acknowledgement of Country */}
 
        </div>
      </div>
      <p className="text-md opacity-0 animate-acknowledgement text-amber-300/70 italic mt-4 max-w-[300px] md:max-w-[300px] mx-auto">
  I acknowledge the Traditional Custodians of this land, and pay respect to Elders past, present and emerging.
</p>
    </div>
  );
};

export default HeroText;