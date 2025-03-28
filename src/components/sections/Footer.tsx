'use client';

import React from 'react';
// import GoodReadsLogo from '../../../public/application.svg'
// import ThreadsLogo from '../../../public/threads.svg'
const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-200 py-8 relative z-10 border-t border-blue-900/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 font-bold text-xl mb-2">
            Dayle Fogarty
            </div>
            <p className="text-sm text-blue-300 italic">
              Fantasy Writer | World Builder | Storyteller
            </p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a href="#" className="text-indigo-300 hover:text-indigo-200 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href="#" className="text-indigo-300 hover:text-indigo-200 transition-colors duration-300">
            <svg role="img" width="21" height="21" viewBox="0 0 21 24" fill="currentColor" stroke="none" xmlns="http://www.w3.org/2000/svg" >
        <g>
            <path d="M20.9991 5.40625H0V8.24275H20.9991V5.40625Z"/>
            <path d="M0 10.8125V24.0004L10.4991 18.1187L21 24.0004V10.8125H0Z"/>
            <path d="M20.9991 0H0V2.83603H20.9991V0Z"/>
        </g>
    </svg>
            </a>
            <a href="#" className="text-indigo-300 hover:text-indigo-200 transition-colors duration-300">
            <div className="w-5 h-5 flex items-center justify-center">
            {/* <GoodReadsLogo className="w-full h-full" /> */}
            </div>
            </a>
            <a href="#" className="text-indigo-300 hover:text-indigo-200 transition-colors duration-300">
            <div className="w-5 h-5flex items-center justify-center">
            {/* <ThreadsLogo className="w-full h-full" /> */}
            </div>
            </a>
          </div>
          
          <div className="flex flex-col items-end">
            <div className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Dayle Fogarty. All rights reserved.
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
  );
};

export default Footer;