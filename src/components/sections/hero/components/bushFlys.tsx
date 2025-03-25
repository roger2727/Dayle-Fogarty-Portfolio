'use client';

import React from 'react';

interface BushFlyProps {
  bottom: string;
  left: string;
  size: number;
  hue: number;
  glowSize: number;
  duration: number;
  delay: number;
  visible: boolean;
}

const BushFly: React.FC<BushFlyProps> = ({ 
  bottom, 
  left, 
  size, 
  hue, 
  glowSize, 
  duration, 
  delay, 
  visible 
}) => {
  const sizeNum = parseFloat(size.toString());
  
  return (
    <div 
      className="absolute transition-opacity duration-1000"
      style={{
        bottom,
        left,
        width: `${sizeNum * 1.5}px`,
        height: `${sizeNum}px`,
        zIndex: 5,
        opacity: visible ? 1 : 0,
        transition: 'opacity 1000ms ease-in'
      }}
    >
      <div 
        className="relative w-full h-full animate-firefly-float"
        style={{
          ['--duration' as string]: '15s',
          ['--delay' as string]: `${delay}ms`
        }}
      >
        <div 
          className="absolute rounded-full animate-firefly-pulse"
          style={{
            width: `${sizeNum}px`,
            height: `${sizeNum}px`, 
            background: `radial-gradient(circle, hsla(${hue}, 100%, 75%, 0.95) 0%, hsla(${hue}, 100%, 50%, 0) 70%)`,
            boxShadow: `0 0 ${sizeNum * glowSize}px ${sizeNum}px hsla(${hue}, 100%, 65%, 0.6)`,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            ['--duration' as string]: `${duration}ms`,
            ['--delay' as string]: `${delay}ms`
          }}
        />
        
        <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
          <div 
            className="absolute rounded-full"
            style={{
              width: `${sizeNum * 1.1}px`,
              height: `${sizeNum * 0.5}px`,
              background: `radial-gradient(ellipse, hsla(${hue}, 80%, 85%, 0.3) 0%, hsla(${hue}, 90%, 80%, 0) 70%)`,
              left: `-${sizeNum * 0.35}px`,
              top: '0',
              transform: 'rotate(15deg)',
            }}
          />
          <div 
            className="absolute rounded-full"
            style={{
              width: `${sizeNum * 1.1}px`,
              height: `${sizeNum * 0.5}px`,
              background: `radial-gradient(ellipse, hsla(${hue}, 80%, 85%, 0.3) 0%, hsla(${hue}, 90%, 80%, 0) 70%)`,
              left: `${sizeNum * 0.35}px`,
              top: '0',
              transform: 'rotate(-15deg)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BushFly;