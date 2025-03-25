import React from 'react';
import Image from 'next/image';
import image from '../../../public/rounded (1).png';

const AboutSection = () => {
  return (
    <section id="about" className="bg-slate-950 text-gray-200 py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Author Image with circular frame */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="relative">
              {/* Decorative elements for the profile */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-blue-400 opacity-40 rounded-full blur-xl "></div>
              {/* Image container - circle with colored background */}
              <div className="relative z-10 mx-auto w-100 h-100 ">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image 
                    src={image} 
                    alt="Fantasy Writer" 
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* About Content */}
          <div className="md:w-2/3 md:pl-12">
            {/* Improved main heading with fantasy-inspired design */}
            <div className="mb-6">
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">The Storyteller</h2>
              <p className="text-lg font-light text-blue-300 italic">Crafting new worlds, one page at a time</p>
              <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-500 mt-3 rounded-full"></div>
            </div>
            
            <div className="space-y-4 mb-8">
              <p className="leading-relaxed">
                Welcome to my world of imagination! As an emerging fantasy writer, I'm on a journey to craft realms where dragons soar over ancient forests, where magic flows through forgotten ruins, and where heroes rise from the unlikeliest of beginnings. My passion for storytelling began with dusty tomes discovered in my grandmother's attic and continues to grow with each word I write.
              </p>
            </div>
            
            {/* Writer's Journey Section with improved subheading */}
            <div className="mb-8">
              <h3 className="flex items-center text-2xl font-semibold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">My Creative Quest</span>
                <span className="ml-3 h-px w-12 bg-indigo-400"></span>
              </h3>
              <div className="bg-gray-800 bg-opacity-50 p-5 rounded-lg border-l-2 border-blue-400">
                <p className="italic text-gray-300 mb-3">"Every great writer was once a beginner. The path to creating worlds begins with a single word."</p>
                
                <div className="mb-3 border-b border-gray-700 pb-2">
                  <p className="font-medium text-indigo-300">✧ First Fantasy Novel</p>
                  <p className="text-sm text-gray-300">Currently drafting my debut work with a focus on immersive worldbuilding</p>
                </div>
                
                <div className="mb-3 border-b border-gray-700 pb-2">
                  <p className="font-medium text-purple-300">✧ Magic System Development</p>
                  <p className="text-sm text-gray-300">Creating unique magical concepts rooted in ancient mythologies</p>
                </div>
                
                <div className="mb-3 border-b border-gray-700 pb-2">
                  <p className="font-medium text-blue-300">✧ Character-Driven Narratives</p>
                  <p className="text-sm text-gray-300">Crafting complex heroes and villains that readers can connect with</p>
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