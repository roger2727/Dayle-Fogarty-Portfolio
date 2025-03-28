'use client';
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [animationStarted, setAnimationStarted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setAnimationStarted(true);
    }, 10);
    
    return () => clearTimeout(animationTimer);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={`absolute w-full px-6 py-4 flex justify-between items-center z-50 transition-opacity duration-1000 ${
      animationStarted ? 'opacity-100 delay-500' : 'opacity-0'
    }`}>
      {/* Logo */}
      <div className="relative group">
        <span className="text-6xl md:text-7xl font-lancelot bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-shimmer">
          DF
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-indigo-400/30 to-purple-400/30 blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex space-x-8 items-center">
        <NavLink href="#about">About Me</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#">Blog</NavLink>
        <NavLink href="#">Contact</NavLink>
      </div>

      {/* Mobile Hamburger */}
      <button 
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg hover:bg-indigo-900/20 transition-colors"
        aria-label="Open menu"
      >
        <svg className="w-10 h-10 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-screen w-64 bg-slate-900/95 backdrop-blur-lg z-50 transform transition-transform duration-300 ease-in-out ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="p-6 flex flex-col h-full">
          <button 
            onClick={toggleMenu}
            className="self-end mb-8 p-2 hover:text-purple-400 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="flex flex-col space-y-6">
            <MobileNavLink href="#about" onClick={toggleMenu}>About Me</MobileNavLink>
            <MobileNavLink href="#projects" onClick={toggleMenu}>Projects</MobileNavLink>
            <MobileNavLink href="#" onClick={toggleMenu}>Blog</MobileNavLink>
            <MobileNavLink href="#" onClick={toggleMenu}>Contact</MobileNavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Modern desktop link with subtle hover effect
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href}
    className="relative text-indigo-100/90 font-medium tracking-wide hover:text-white transition-all duration-300
      group overflow-hidden"
  >
    <span className="relative inline-block py-1.5 px-1 rounded-lg hover:bg-indigo-900/10 transition-colors duration-300">
      {children}
      <span className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 
        opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-500" />
    </span>
  </Link>
);

// Modern mobile link with elegant interaction
const MobileNavLink = ({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) => (
  <Link 
    href={href}
    onClick={onClick}
    className="text-indigo-100/90 text-xl py-3 px-4 rounded-lg transition-all duration-300
      hover:bg-indigo-900/30 hover:pl-6 relative"
  >
    <span className="absolute left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full
      opacity-0 hover:opacity-100 transition-opacity duration-300" />
    {children}
  </Link>
);

export default Navbar;