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
  const [isMobile, setIsMobile] = useState(false);
  const requestRef = useRef<number | null>(null);
  const previousScrollRef = useRef(0);
  const [initialAnimationDone, setInitialAnimationDone] = useState(false);

  useEffect(() => {
    // Check if mobile device
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Standard mobile breakpoint
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

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
    bushes: isMobile ? 0 : 0.9 // Disable scroll effect for bushes on mobile
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
        className={`w-full h-auto absolute bottom-0 transition-transform duration-[1200ms] ease-out ${
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
        className={`w-full h-auto absolute bottom-0 transition-transform duration-[1200ms] ease-out ${
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
        className={`w-full h-auto absolute bottom-0 transition-transform duration-[1200ms] ease-out ${
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
      
      {/* Bushes - No scroll effect on mobile */}
      <Image 
        src={bushes} 
        alt='bushes' 
        className={`w-full h-auto absolute bottom-0 transition-transform duration-[1200ms] ease-out ${
          animationStarted ? 'translate-y-0 delay-[700ms]' : 'translate-y-full'
        }`}
        style={{ 
          zIndex: 4,
          transform: isMobile && initialAnimationDone 
            ? 'translateY(0)' 
            : getTransform(speeds.bushes, '100%'),
          willChange: 'transform',
          transition: initialAnimationDone 
            ? isMobile 
              ? 'none' 
              : 'transform 0.1s linear' 
            : 'transform 1200ms ease-out 700ms'
        }}
      />
      
      <div className="to-pink-950 w-full h-24"></div>
    </>
  );
};

export default Landscapes;