'use client';
import Hero from "../components/sections/hero/Hero";
import AboutMePlain from "../components/sections/AboutMePlain";
import Projects from "../components/sections/Projects";
import Blog from "../components/sections/blog";
import Contact from "../components/sections/Contact";
import { useEffect } from "react";
import Navbar from "../components/sections/NavBar";
import Footer from "@/components/sections/Footer";


export default function Home() {
  useEffect(() => {
    // Keep your animation keyframes definition here
    const style = document.createElement('style');
    style.textContent = `
      @keyframes fireflyPulse {
        0% {
          opacity: 0.2;
          transform: scale(0.9) rotate(var(--rotation-start, 10deg));
        }
        50% {
          opacity: var(--max-opacity, 0.8);
          transform: scale(1.1) rotate(0deg);
        }
        100% {
          opacity: 0.4;
          transform: scale(0.95) rotate(var(--rotation-end, -10deg));
        }
      }
      
      @keyframes fireflyFloat {
        0% {
          transform: translate(0, 0) rotate(0deg);
        }
        25% {
          transform: translate(10px, -10px) rotate(5deg);
        }
        50% {
          transform: translate(15px, -5px) rotate(-5deg);
        }
        75% {
          transform: translate(-5px, 7px) rotate(8deg);
        }
        100% {
          transform: translate(5px, -10px) rotate(-3deg);
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className='min-h-screen overflow-x-hidden relative'>

        <Navbar />

      <Hero />
 

      <AboutMePlain />
      <Projects/>
      <Blog/>
      <Contact/>
      <Footer/>



    </div>
  );
}