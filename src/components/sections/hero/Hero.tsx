// components/sections/Hero.tsx
'use client';

import { useEffect, useState } from "react";

import HeroText from '../hero/components/HeroText';
import Landscapes from '../hero/components/Landscapes';
import Stars from "./components/stars";
import MeteorShower from "./components/MetorShower";
import Moon from "./components/Moon";
import FirefliesContainer from "./components/FireFlysContainer";

const Hero: React.FC = () => {
  const [hydrated, setHydrated] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [meteorShowerStarted, setMeteorShowerStarted] = useState(false);
  const [fireflyAnimationStarted, setFireflyAnimationStarted] = useState(false);
  
  // Ensure client-side hydration completes before rendering content
  useEffect(() => {
    setHydrated(true);
  }, []);
  
  useEffect(() => {
    if (!hydrated) return;
    
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    // Add a small delay before starting animations to ensure DOM is ready
    const animationTimer = setTimeout(() => {
      setAnimationStarted(true);
    }, 300);
    
    // Timer for fireflies to begin after mountains and text animations complete
    const fireflyTimer = setTimeout(() => {
      setFireflyAnimationStarted(true);
    }, 3000);
    
    // Timer for meteor shower to begin after other animations
    const meteorShowerTimer = setTimeout(() => {
      setMeteorShowerStarted(true);
    }, 4500);
    
    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(animationTimer);
      clearTimeout(fireflyTimer);
      clearTimeout(meteorShowerTimer);
    };
  }, [hydrated]);

  // Render nothing during server-side rendering
  if (!hydrated) {
    return <div className='bg-gradient-to-t from-blue-800 via-indigo-900 to-slate-950 min-h-screen'></div>;
  }

  return (
    <div className='bg-gradient-to-t from-blue-800 via-indigo-900 to-slate-950 min-h-screen flex items-center justify-center overflow-hidden relative'>
      <div className="relative w-full h-screen overflow-hidden">
        <Stars />
        <MeteorShower active={meteorShowerStarted} />
        <Moon animationStarted={animationStarted} />
        <FirefliesContainer visible={fireflyAnimationStarted} />
        <HeroText animationStarted={animationStarted} />
        <Landscapes isLoading={isLoading} animationStarted={animationStarted} />
      </div>
    </div>
  );
};

export default Hero;