'use client';

import React from 'react';
import Image from 'next/image';
import backMountain from '../../../../../public/upscalemedia-transformedBackMountain.png';
import middleMountain from '../../../../../public/upscalemedia-transformed.png';
import lastMountain from '../../../../../public/Untitled.png';
import bushes from '../../../../../public/fuck.png';

interface LandscapesProps {
  isLoading: boolean;
  animationStarted: boolean;
}

const Landscapes: React.FC<LandscapesProps> = ({ isLoading, animationStarted }) => {
  if (isLoading) return null;
  
  return (
    <>
      <Image 
        src={backMountain} 
        alt='back mountains' 
        className={`w-full h-auto absolute bottom-0 transition-transform duration-[1200ms] ease-out ${
          animationStarted ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ zIndex: 1 }}
      />
      
      <Image 
        src={middleMountain} 
        alt='middle mountains' 
        className={`w-full h-auto absolute bottom-0 transition-transform duration-[1200ms] ease-out ${
          animationStarted ? 'translate-y-0 delay-[100ms]' : 'translate-y-full'
        }`}
        style={{ zIndex: 2 }}
      />
      
      <Image 
        src={lastMountain} 
        alt='last mountains' 
        className={`w-full h-auto absolute bottom-0 transition-transform duration-[1200ms] ease-out ${
          animationStarted ? 'translate-y-0 delay-[600ms]' : 'translate-y-full'
        }`}
        style={{ zIndex: 3 }}
      />
      
      <Image 
        src={bushes} 
        alt='bushes' 
        className={`w-full h-auto absolute bottom-0 transition-transform duration-[1200ms] ease-out ${
          animationStarted ? 'translate-y-0 delay-[700ms]' : 'translate-y-full'
        }`}
        style={{ zIndex: 4 }}
      />
    </>
  );
};

export default Landscapes;