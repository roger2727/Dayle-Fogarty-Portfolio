'use client';

import React, { useState, useEffect, ReactNode } from 'react';

interface FireflyBackgroundProps {
  children: ReactNode;
}

const FireflyBackground = ({ children }: FireflyBackgroundProps) => {
  const [firefly, setFirefly] = useState<any>(null);
  const [animationStarted, setAnimationStarted] = useState(false);
  
  useEffect(() => {
    // Generate a single golden firefly
    const newFirefly = {
      id: 0,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: 6, // Slightly larger size for better visibility
      animationDuration: '3s',
      animationDelay: '0.5s',
      hue: 45, // Golden hue
      opacity: 0.9,
      glowSize: 3,
    };
    
    setFirefly(newFirefly);
    
    // Start animation after a short delay
    const timer = setTimeout(() => {
      setAnimationStarted(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="relative">
      {/* Children content */}
      {children}
      
      {/* Single Golden Firefly overlay */}
      {animationStarted && firefly && (
        <div className="firefly-container absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            key={`firefly-${firefly.id}`}
            className="absolute"
            style={{
              top: firefly.top,
              left: firefly.left,
              width: `${firefly.size * 1.5}px`,
              height: `${firefly.size}px`,
              zIndex: 10,
              opacity: 0,
              ['--pulse-duration' as string]: firefly.animationDuration,
              ['--pulse-delay' as string]: firefly.animationDelay,
              ['--initial-rotation' as string]: `${Math.random() * 360}deg`,
              ['--max-opacity' as string]: `${firefly.opacity}`,
              ['--rotation-start' as string]: `${Math.random() * 10}deg`,
              ['--rotation-end' as string]: `-${Math.random() * 10}deg`,
              animationName: 'fireflyPulse, fireflyFloat',
              animationDuration: `var(--pulse-duration), 15s`,
              animationTimingFunction: 'ease-in-out, ease-in-out',
              animationIterationCount: 'infinite, infinite',
              animationDirection: 'alternate, alternate',
              animationDelay: 'var(--pulse-delay), var(--pulse-delay)',
              transform: 'rotate(var(--initial-rotation))',
              position: 'absolute',
            }}
          >
            {/* Bug body - golden color */}
            <div 
              className="absolute rounded-full"
              style={{
                width: `${firefly.size}px`,
                height: `${firefly.size}px`, 
                background: `radial-gradient(circle, rgba(255, 215, 0, 0.95) 0%, rgba(255, 215, 0, 0) 70%)`,
                boxShadow: `0 0 ${firefly.size * firefly.glowSize}px ${firefly.size}px rgba(255, 215, 0, 0.7)`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
            
            {/* Wings */}
            <div 
              className="absolute rounded-full"
              style={{
                width: `${firefly.size * 1.2}px`,
                height: `${firefly.size * 0.6}px`,
                background: `radial-gradient(ellipse, rgba(255, 223, 80, 0.4) 0%, rgba(255, 223, 80, 0) 70%)`,
                left: '30%',
                top: '50%',
                transform: 'translate(-50%, -50%) rotate(20deg)',
              }}
            />
            <div 
              className="absolute rounded-full"
              style={{
                width: `${firefly.size * 1.2}px`,
                height: `${firefly.size * 0.6}px`,
                background: `radial-gradient(ellipse, rgba(255, 223, 80, 0.4) 0%, rgba(255, 223, 80, 0) 70%)`,
                left: '70%',
                top: '50%',
                transform: 'translate(-50%, -50%) rotate(-20deg)',
              }}
            />
          </div>
        </div>
      )}

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fireflyPulse {
          0% { opacity: 0; }
          50% { opacity: var(--max-opacity); }
          100% { opacity: 0; }
        }
        
        @keyframes fireflyFloat {
          0% { 
            transform: translate(0, 0) rotate(var(--rotation-start)); 
          }
          100% { 
            transform: translate(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 100 + 50}px, 
                               ${Math.random() > 0.5 ? '' : '-'}${Math.random() * 100 + 50}px) 
                      rotate(var(--rotation-end)); 
          }
        }
      `}</style>
    </div>
  );
};

export default FireflyBackground;