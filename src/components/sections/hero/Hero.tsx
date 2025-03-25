'use client';

import { useEffect, useState } from "react";
import Stars from "./components/stars";
import MeteorShower from "./components/MetorShower";
import Moon from "./components/Moon";
import FirefliesContainer from "./components/FireFlysContainer";
import HeroText from "./components/HeroText";
import Landscapes from "./components/Landscapes";

const Hero: React.FC = () => {
  const [animationStarted, setAnimationStarted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [meteorShowerStarted, setMeteorShowerStarted] = useState<boolean>(false);
  const [fireflyAnimationStarted, setFireflyAnimationStarted] = useState<boolean>(false);
  
  useEffect(() => {
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
    }, 3000); // Slightly reduced delay for better transition
    
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
  }, []);

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