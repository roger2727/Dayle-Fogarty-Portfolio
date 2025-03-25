'use client';
import Hero from "../components/sections/hero/Hero";
import AboutMePlain from "../components/sections/AboutMePlain";
import Projects from "../components/sections/Projects";
import Blog from "../components/sections/blog";
import Contact from "../components/sections/Contact";
import { useEffect } from "react";
import Navbar from "../components/sections/NavBar";


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


      {/* Footer */}
{/* Footer */}
<footer className="bg-slate-950 text-gray-200 py-8 relative z-10 border-t border-blue-900/30">
  <div className="container mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="mb-6 md:mb-0">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-bold text-xl mb-2">Your Name</div>
        <p className="text-sm text-blue-300 italic">Fantasy Writer | World Builder | Storyteller</p>
      </div>
      
      <div className="flex space-x-6 mb-6 md:mb-0">
        <a href="#" className="text-indigo-300 hover:text-indigo-200 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </a>
        <a href="#" className="text-indigo-300 hover:text-indigo-200 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </a>
        <a href="#" className="text-indigo-300 hover:text-indigo-200 transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 448 512">
            <path d="M299.9 191.2c5.1 37.3-4.7 79-35.9 100.7-22.3 15.5-52.8 14.1-70.8 5.7-37.1-17.3-49.5-58.6-46.8-97.2 4.3-60.9 40.9-87.9 75.3-87.5 46.9-.2 71.8 31.8 78.2 78.3zM448 88v336c0 30.9-25.1 56-56 56H56c-30.9 0-56-25.1-56-56V88c0-30.9 25.1-56 56-56h336c30.9 0 56 25.1 56 56zM330 313.2s-.1-34-.1-217.3h-29v40.3c-.8.3-18.2-17.6-48.8-17.6-66.1 0-79.7 60.2-79.7 122.4 0 79.9 23.4 134.7 83.9 134.7 31.1 0 42.9-11.4 49.4-20.2v20.2h24.3v-62.5z"/>
          </svg>
        </a>
      </div>
      
      <div className="flex flex-col items-end">
        <div className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
        <div className="text-xs text-gray-500 mt-1">
          <span className="text-indigo-400">✧</span> Weaving tales and building worlds
        </div>
      </div>
    </div>
  </div>
  
  {/* Subtle decorative element */}
  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
</footer>
    </div>
  );
}