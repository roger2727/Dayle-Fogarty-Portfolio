import React from 'react';
import Image from 'next/image';
import image from '../../../public/rounded (1).png';

const AboutSection = () => {
  return (
    <section id="about" className="bg-slate-950 text-gray-200 py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Top section with all text on left and image on right */}
        {/* Reordered layout with image at the top on mobile, side by side on desktop */}
        <div className="flex flex-col-reverse md:flex-row items-center mb-8">
          {/* Left side: Both About Me and Reader Connection text */}
          <div className="md:w-3/5 pr-0 md:pr-8 mt-8 md:mt-0">
            {/* About Me content */}
            <div className="mb-8">
              <span className="inline-block text-sm font-medium tracking-wider text-blue-400 uppercase mb-2">About Me</span>
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-3">The Storyteller</h2>
              <p className="text-lg text-blue-300/80 mb-4">Crafting new worlds, one page at a time</p>
            </div>
            
            <div className="space-y-4 mb-8">
              <p className="leading-relaxed text-gray-300">
                Welcome to my world of imagination! As an emerging fantasy writer, I'm on a journey to craft realms where dragons soar over ancient forests, where magic flows through forgotten ruins, and where heroes rise from the unlikeliest of beginnings. My passion for storytelling began with dusty tomes discovered in my grandmother's attic and continues to grow with each word I write.
              </p>
            </div>
            
            {/* Reader Connection header and quote */}
            <div className="mb-3">
              <div className="flex items-center mb-3">
                <h3 className="text-2xl font-semibold text-blue-300/80">Reader Connection</h3>
                <span className="ml-3 h-px w-12 bg-indigo-400/50"></span>
              </div>
              
              <div className="max-w-lg relative">
                <p className="italic text-gray-400 pl-4 border-l border-indigo-500/30">
                  Stories are bridges between minds. Through my writing, I hope to create worlds that readers can inhabit and characters they'll remember long after closing the book.
                </p>
              </div>
            </div>
          </div>
          
          {/* Image - appears above text on mobile, to the right on desktop */}
          <div className="md:w-2/5 flex justify-center items-center md:self-center mb-6 md:mb-0">
            <div className="relative max-w-md">
              {/* Glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-blue-400 opacity-40 rounded-full blur-xl"></div>
              {/* Image container */}
              <div className="relative z-10 mx-auto">
                <div className="w-64 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden">
                  <Image 
                    src={image} 
                    alt="Fantasy Writer" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Full width timeline below both text and image */}
        <div className="w-full">
          {/* Clean Horizontal Experience Elements */}
          <div className="relative mt-6 mb-8">
            {/* Subtle horizontal path */}
            <div className="absolute left-0 right-0 top-0 h-px bg-gray-700"></div>
            
            {/* Experience Elements */}
            <div className="flex flex-col md:flex-row justify-between items-start">
              {/* Element 1 - Emotional Journey */}
              <div className="relative md:w-1/3 mb-8 md:mb-0 md:pr-6">
                {/* Minimal marker */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 -top-1.5 w-3 h-3 rounded-full bg-indigo-400/70"></div>
                
                {/* Content with subtle hover effect */}
                <div className="group md:text-center pt-6 cursor-default">
                  <h4 className="text-lg font-medium text-indigo-300 mb-2">Emotional Journey</h4>
                  <div className="bg-gray-900/60 p-4 rounded border-t border-indigo-500/30 transform group-hover:border-indigo-500/60 transition-all duration-300">
                    <p className="text-gray-400 text-sm">I strive to create stories that resonate on an emotional level, where readers experience triumph, loss, wonder, and hope alongside characters they grow to care deeply about.</p>
                  </div>
                </div>
              </div>
              
              {/* Element 2 - Thematic Exploration */}
              <div className="relative md:w-1/3 mb-8 md:mb-0 md:px-6">
                {/* Minimal marker */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 -top-1.5 w-3 h-3 rounded-full bg-purple-400/70"></div>
                
                {/* Content with subtle hover effect */}
                <div className="group md:text-center pt-6 cursor-default">
                  <h4 className="text-lg font-medium text-purple-300 mb-2">Thematic Exploration</h4>
                  <div className="bg-gray-900/60 p-4 rounded border-t border-purple-500/30 transform group-hover:border-purple-500/60 transition-all duration-300">
                    <p className="text-gray-400 text-sm">My narratives explore themes of identity, belonging, and the courage to face impossible odds. I believe fantasy allows us to examine real-world questions through new perspectives.</p>
                  </div>
                </div>
              </div>
              
              {/* Element 3 - Immersive Worlds */}
              <div className="relative md:w-1/3 md:pl-6">
                {/* Minimal marker */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 -top-1.5 w-3 h-3 rounded-full bg-blue-400/70"></div>
                
                {/* Content with subtle hover effect */}
                <div className="group md:text-center pt-6 cursor-default">
                  <h4 className="text-lg font-medium text-blue-300 mb-2">Immersive Worlds</h4>
                  <div className="bg-gray-900/60 p-4 rounded border-t border-blue-500/30 transform group-hover:border-blue-500/60 transition-all duration-300">
                    <p className="text-gray-400 text-sm">I craft detailed, believable worlds with unique magic systems, complex societies, and rich histories that readers can lose themselves in, discovering new wonders with each chapter.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;