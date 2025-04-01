'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import backMountain from '../../../../../public/widerforparalaxscrolling.png';
import middleMountain from '../../../../../public/upscalemedia-transformed.png';
import lastMountain from '../../../../../public/treecave.png';
import bushes from '../../../../../public/fuck.png';

interface LandscapesProps {
  isLoading: boolean;
  animationStarted: boolean;
}

const Landscapes: React.FC<LandscapesProps> = ({ isLoading, animationStarted }) => {
  const [scrollY, setScrollY] = useState(0);
  const requestRef = useRef<number | null>(null);
  const previousScrollRef = useRef(0);
  const [initialAnimationDone, setInitialAnimationDone] = useState(false);



  const animateScroll = () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll !== previousScrollRef.current) {
      setScrollY(currentScroll);
      previousScrollRef.current = currentScroll;
    }
    
    requestRef.current = requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    if (animationStarted) {
      const timer = setTimeout(() => {
        setInitialAnimationDone(true);
        requestRef.current = requestAnimationFrame(animateScroll);
      }, 2000);

      return () => {
        clearTimeout(timer);
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
      };
    }
  }, [animationStarted]);

  if (isLoading) return null;

  const speeds = {
    backMountain: 0.3,
    middleMountain: 0.5,
    lastMountain: 0.7,
    bushes: 0.9 // Now applying scroll effect for bushes on all devices
  };

  const getTransform = (speed: number, initialOffset: string) => {
    if (!initialAnimationDone) {
      return animationStarted ? 'translateY(0)' : `translateY(${initialOffset})`;
    }
    const scrollEffect = scrollY * speed;
    return `translateY(${scrollEffect}px)`;
  };

  return (
    <>
      {/* Back Mountains */}
      <Image 
        src={backMountain} 
        alt='back mountains' 
        className={`w-full h-120 md:h-auto absolute bottom-0 transition-transform duration-[1200ms] ease-out ${
          animationStarted ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{ 
          zIndex: 1,
          transform: getTransform(speeds.backMountain, '100%'),
          willChange: 'transform',
          transition: initialAnimationDone 
            ? 'transform 0.1s linear' 
            : 'transform 1200ms ease-out'
        }}
      />
      
      {/* Middle Mountains */}
      <Image 
        src={middleMountain} 
        alt='middle mountains' 
        className={`w-full h-120 md:h-auto absolute bottom-0 transition-transform duration-[1200ms] ease-out ${
          animationStarted ? 'translate-y-0 delay-[100ms]' : 'translate-y-full'
        }`}
        style={{ 
          zIndex: 2,
          transform: getTransform(speeds.middleMountain, '100%'),
          willChange: 'transform',
          transition: initialAnimationDone 
            ? 'transform 0.1s linear' 
            : 'transform 1200ms ease-out 100ms'
        }}
      />
      
      {/* Last Mountains */}
      <Image 
        src={lastMountain} 
        alt='last mountains' 
        className={`w-full h-70 md:h-auto absolute bottom-0 transition-transform duration-[1200ms] ease-out ${
          animationStarted ? 'translate-y-0 delay-[600ms]' : 'translate-y-full'
        }`}
        style={{ 
          zIndex: 3,
          transform: getTransform(speeds.lastMountain, '100%'),
          willChange: 'transform',
          transition: initialAnimationDone 
            ? 'transform 0.1s linear' 
            : 'transform 1200ms ease-out 600ms'
        }}
      />
      
      {/* Bushes - Now part of the scrolling animation on all devices */}
      <Image 
        src={bushes} 
        alt='bushes' 
        className={`w-full h-auto absolute bottom-0 transition-transform duration-[1200ms] ease-out ${
          animationStarted ? 'translate-y-0 delay-[700ms]' : 'translate-y-full'
        }`}
        style={{ 
          zIndex: 4,
          transform: getTransform(speeds.bushes, '100%'),
          willChange: 'transform',
          transition: initialAnimationDone 
            ? 'transform 0.1s linear' 
            : 'transform 1200ms ease-out 700ms'
        }}
      />
    </>
  );
};

export default Landscapes;