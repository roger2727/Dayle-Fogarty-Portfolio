import React, { useEffect } from 'react';
import Image from 'next/image';
import image from '../../../public/rounded (1).png';
// Animations now come from global.css

const AboutSection = () => {
  useEffect(() => {
    // Animate elements on page load
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-visible');
        }
      });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(el => observer.observe(el));
    
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" className="bg-slate-950 text-gray-200 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Changed flex-col-reverse to flex-col and adjusted image visibility */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          {/* Left side: Text content with mobile image */}
          <div className="md:w-3/5 pr-0 md:pr-8 mt-8 md:mt-0">
            {/* About Me content with mobile image */}
            <div className="mb-8 animate-on-scroll fade-up flex flex-row items-start justify-between">
              <div className="flex-1">
                <span className="inline-block text-sm font-medium tracking-wider text-blue-400 uppercase mb-2">About Me</span>
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-3 shimmer-text">The Storyteller</h2>
                <p className="text-lg text-blue-300/80 mb-4">Crafting new worlds, one page at a time</p>
              </div>
              {/* Mobile-only mini image */}
              <div className="md:hidden ml-4 w-24 h-24 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-400 opacity-40 rounded-full blur-xl"></div>
                <div className="relative z-10 w-24 h-24 rounded-full overflow-hidden border-2 border-blue-400/20">
                  <Image 
                    src={image} 
                    alt="Fantasy Writer" 
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
            <div className="space-y-4 mb-8 animate-on-scroll fade-up" style={{ animationDelay: '0.2s' }}>
              <p className="leading-relaxed text-gray-300">
             {"As an emerging fantasy writer, I’m on a quest to create realms where ships sail treacherous seas, magic flows through forgotten ruins, and heroes rise from the unlikeliest of beginnings.My passion for storytelling began as a child, escaping into tales like The Famous Five and The Chronicles of Narnia. I wrote my first stories at seven and took writing more seriously at fourteen—when my sister asked me to write her English creative assignment. That moment sparked something in me, and I haven’t stopped writing fantasy since.Now you'll find me writing between all the duties of a parenthood. When I'm not behind a laptop, I'm adding more tales to my TBR pile, birdwatching from my back porch of our home on the east coast of Australia NSW, and playing cosy games to take a load off."}
              </p>
            </div>
          </div>
          

          <div className="hidden md:w-2/5 md:flex justify-center items-center md:self-center mb-6 md:mb-0 animate-on-scroll fade-up " >
            <div className="relative max-w-md"> 
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-55 h-70 md:w-64 md:h-80 bg-blue-400 opacity-40 rounded-full blur-xl"></div>
              {/* Image container */}
              <div className="relative z-10 mx-auto">
                <div className="w92 h-92 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden">
                  <Image 
                    src={image} 
                    alt="Fantasy Writer" 
                    className="w-full h-full object-contain"
                    priority  // Ensures the image loads with high priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full">
  {/* Clean Horizontal Experience Elements */}
  <div className="relative mt-6 mb-8">
    {/* Horizontal timeline line positioned to run through the dots */}
    <div className=" hidden md:block absolute left-0 right-0 top-6.5 h-px bg-gray-700 animate-on-scroll path-draw"></div>
    
    {/* Experience Elements */}
    <div className="flex flex-col md:flex-row justify-between items-start">
      {/* Element 1 - Emotional Journey */}
      <div className="relative md:w-1/3 mb-8 md:mb-0 md:pr-6 animate-on-scroll fade-up" style={{ animationDelay: '0.2s' }}>
        {/* Adjusted dot with controlled ping animation */}
        <div className="hidden md:block absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-3 h-3 rounded-full bg-indigo-400">
          {/* Separate ping element that won't affect the dot visibility */}
          <span className="absolute inset-0 rounded-full bg-indigo-400 ping-animation" style={{ transformOrigin: 'center' }}></span>
        </div>
        
        {/* Content with subtle hover effect */}
        <div className="group md:text-center md:pt-6 cursor-default">
          
          <h4 className="text-lg font-medium text-indigo-300 mb-2">Emotional Journey</h4>
          <div className="bg-gray-900/60 p-4 rounded border-t border-indigo-500/30 transform group-hover:border-indigo-500/60 transition-all duration-300 group-hover:translate-y-[-2px] group-hover:shadow-lg group-hover:shadow-indigo-900/20">
            <p className="text-gray-400 text-sm">I strive to create stories that resonate on an emotional level, where readers experience triumph, loss, wonder, and hope alongside characters they grow to care deeply about.</p>
          </div>
        </div>
      </div>
      
      {/* Element 2 - Thematic Exploration */}
      <div className="relative md:w-1/3 mb-8 md:mb-0 md:px-6 animate-on-scroll fade-up" style={{ animationDelay: '0.4s' }}>
        {/* Adjusted dot with controlled ping animation */}
        <div className="hidden md:block  absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-3 h-3 rounded-full bg-purple-400">
          {/* Separate ping element that won't affect the dot visibility */}
          <span className="absolute inset-0 rounded-full bg-purple-400 ping-animation" style={{ animationDelay: '0.3s', transformOrigin: 'center' }}></span>
        </div>
        
        {/* Content with subtle hover effect */}
        <div className="group md:text-center md:pt-6 cursor-default">
          <h4 className="text-lg font-medium text-purple-300 mb-2">Thematic Exploration</h4>
          <div className="bg-gray-900/60 p-4 rounded border-t border-purple-500/30 transform group-hover:border-purple-500/60 transition-all duration-300 group-hover:translate-y-[-2px] group-hover:shadow-lg group-hover:shadow-purple-900/20">
            <p className="text-gray-400 text-sm">My narratives explore decolonisation and the process of Indigenising the fantasy genre, offering a fresh take on themes of displacement, found family, and dual identities. I write about what it means to exist in places of tension—to be BIPOC in worlds not built for us, to question how we belong, and to reclaim our stories of old and new. </p>
          </div>
        </div>
      </div>
      
      {/* Element 3 - Immersive Worlds */}
      <div className="relative md:w-1/3 md:pl-6 animate-on-scroll fade-up" style={{ animationDelay: '0.6s' }}>
        {/* Adjusted dot with controlled ping animation */}
        <div className="hidden md:block  absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 w-3 h-3 rounded-full bg-blue-400">
          {/* Separate ping element that won't affect the dot visibility */}
          <span className="absolute inset-0 rounded-full bg-blue-400 ping-animation" style={{ animationDelay: '0.6s', transformOrigin: 'center' }}></span>
        </div>
        
        {/* Content with subtle hover effect */}
        <div className="group md:text-center md:pt-6 cursor-default">
          <h4 className="text-lg font-medium text-blue-300 mb-2">Immersive Worlds</h4>
          <div className="bg-gray-900/60 p-4 rounded border-t border-blue-500/30 transform group-hover:border-blue-500/60 transition-all duration-300 group-hover:translate-y-[-2px] group-hover:shadow-lg group-hover:shadow-blue-900/20">
            <p className="text-gray-400 text-sm">I build immersive worlds with unique magic systems, deep histories, and vivid landscapes that readers can lose themselves in, discovering new wonders with each chapter. Fantasy allows us to examine real-world struggles through new perspectives, challenging the past while imagining the future.</p>
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