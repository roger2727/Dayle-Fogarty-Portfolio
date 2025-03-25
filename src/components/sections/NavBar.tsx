'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  
  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setAnimationStarted(true);
    }, 10);
    
    return () => {
      clearTimeout(animationTimer);
    };
  }, []);

  return (
    <nav className={`absolute top-0 left-0 w-full px-6 py-4 flex justify-between items-center z-50 transition-opacity duration-1000 ${animationStarted ? 'opacity-100 delay-[3000ms]' : 'opacity-0'}`}>
      <span className="text-6xl text-white font-lancelot">DF</span>
      <div className="flex space-x-6">
        <Link href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Home</Link>
        <Link href="#about" className="text-white hover:text-yellow-200 transition-colors duration-300">About</Link>
        <Link href="#projects" className="text-white hover:text-yellow-200 transition-colors duration-300">Projects</Link>
        <Link href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">blog</Link>
        <Link href="#" className="text-white hover:text-yellow-200 transition-colors duration-300">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;