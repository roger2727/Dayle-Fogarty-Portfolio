'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import backMountain from '../../../../../public/widerforparalaxscrolling.png';
import middleMountain from '../../../../../public/upscalemedia-transformed.png';
import lastMountain from '../../../../../public/treecave.png';
import bushes from '../../../../../public/grass.png';

interface LandscapesProps {
  isLoading: boolean;
  animationStarted: boolean;
}

const Landscapes: React.FC<LandscapesProps> = ({ isLoading, animationStarted }) => {
  const [scrollY, setScrollY] = useState(0);
  const requestRef = useRef<number | null>(null);
  const previousScrollRef = useRef(0);
  const [initialAnimationDone, setInitialAnimationDone] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoadedImages(prev => prev + 1);
  };

  useEffect(() => {
    if (loadedImages === 4) {
      setAllImagesLoaded(true);
    }
  }, [loadedImages]);

  const animateScroll = () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll !== previousScrollRef.current) {
      setScrollY(currentScroll);
      previousScrollRef.current = currentScroll;
    }
    
    requestRef.current = requestAnimationFrame(animateScroll);
  };

  useEffect(() => {
    if (animationStarted && allImagesLoaded) {
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
  }, [animationStarted, allImagesLoaded]);

  if (isLoading) return null;

  const speeds = {
    backMountain: 0.3,
    middleMountain: 0.5,
    lastMountain: 0.7,
    bushes: 0.9
  };

  const getTransform = (speed: number, initialOffset: string) => {
    if (!initialAnimationDone) {
      return (animationStarted && allImagesLoaded) ? 'translateY(0)' : `translateY(${initialOffset})`;
    }
    const scrollEffect = scrollY * speed;
    return `translateY(${scrollEffect}px)`;
  };

  const shouldAnimate = animationStarted && allImagesLoaded;

  return (
    <>
      <Image 
        src={backMountain} 
        alt='back mountains' 
        onLoad={handleImageLoad}
        className={`w-full h-120 md:h-auto absolute bottom-0 transition-transform duration-[1200ms] ease-out ${
          shouldAnimate ? 'translate-y-0' : 'translate-y-full'
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
      
      <Image 
        src={middleMountain} 
        alt='middle mountains'
        onLoad={handleImageLoad}
        className={`w-full h-120 md:h-auto absolute bottom-0 transition-transform duration-[1200ms] ease-out ${
          shouldAnimate ? 'translate-y-0 delay-[100ms]' : 'translate-y-full'
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
      
      <Image 
        src={lastMountain} 
        alt='last mountains'
        onLoad={handleImageLoad}
        className={`w-full h-70 md:h-auto absolute bottom-0 transition-transform duration-[1200ms] ease-out ${
          shouldAnimate ? 'translate-y-0 delay-[600ms]' : 'translate-y-full'
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
      
      <Image 
        src={bushes} 
        alt='bushes'
        onLoad={handleImageLoad}
        className={`w-full h-auto absolute bottom-0 transition-transform duration-[1200ms] ease-out ${
          shouldAnimate ? 'translate-y-0 delay-[700ms]' : 'translate-y-full'
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