import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Import placeholder book cover - replace with your actual book cover
import bookCover from '../../../public/cover.jpeg';

const ProjectsSection = () => {
  // Define the type for fireflies
  type Firefly = {
    id: number;
    top: string;
    left: string;
    size: number;
    animationDuration: string;
    animationDelay: string;
    hue: number;
    opacity: number;
    glowSize: number;
  };

  const [animationStarted, setAnimationStarted] = useState(false);
  
  // As a new writer, let's modify the book data to reflect work-in-progress rather than published
  const featuredProject = {
    title: "Echoes of the Ancient Realm",
    description: "In a world where magic and technology collide, an unlikely hero discovers an ancient artifact that could either save humanity or unleash its doom.",
    coverImage: bookCover,
    status: "Primary Project - Draft in Progress",
    completion: 40, // percentage complete
    link: "#" // Replace with actual link to learn more
  };

  // Placeholder data for other projects
  const otherProjects = [
    {
      title: "Whispers in the Forgotten Woods",
      status: "Concept Development",
      description: "A tale of mystery and ancient power hidden within a forest that appears on maps but has been lost to human memory for centuries.",
      completion: 15 // percentage complete
    },
    {
      title: "Guardians of the Crystal Spire",
      status: "Initial Outline",
      description: "First book in a potential series exploring the conflict between elemental forces and those chosen to maintain the balance between worlds.",
      completion: 5 // percentage complete
    }
  ];

  return (
    <section id="projects" className="bg-slate-950 text-gray-200 py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with modern styling */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium tracking-wider text-blue-400 uppercase mb-2">Writing Journey</span>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-2">Current Projects</h2>
          <p className="text-lg text-blue-300/80 max-w-2xl mx-auto">Worlds under construction, stories taking shape</p>
        </div>

        {/* Featured Project Section - modernized design */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Book Cover with In Progress Overlay - glass morphism style */}
            <div className="lg:w-1/3 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-2xl group-hover:opacity-100 opacity-70 transition-all duration-500"></div>
              <div className="relative w-64 h-96 mx-auto overflow-hidden rounded-xl backdrop-blur-sm border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-blue-900/40"></div>
                {/* Blurred image */}
                <div className="relative w-full h-full">
                  <Image 
                    src={featuredProject.coverImage} 
                    alt={featuredProject.title}
                    className="w-full h-full object-cover blur-sm filter brightness-75"
                    width={256}
                    height={384}
                  />
                  {/* "In Progress" overlay */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="mt-4 bg-black/30 backdrop-blur-md px-5 py-3 rounded-full border border-indigo-500/30">
                      <p className="text-blue-200 text-sm font-medium">{featuredProject.completion}% Complete</p>
                    </div>
                  </div>
                </div>
                {/* Modern glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-400/20 to-purple-600/20 transition-opacity duration-500"></div>
              </div>
            </div>
            
            {/* Project Details - simplified modern design */}
            <div className="lg:w-2/3">
              <span className="inline-block text-blue-400 text-sm font-medium tracking-wider mb-2">{featuredProject.status}</span>
              <h3 className="text-3xl font-bold text-white mb-4">{featuredProject.title}</h3>
              
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {featuredProject.description}
              </p>
              
              <div className="space-y-6">
                <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-400 max-w-xl">
                  "This story has been developing in my imagination for years. I'm excited to finally bring these characters and their world to life through words."
                </blockquote>
                
                <Link href={featuredProject.link} className="inline-block group">
                  <span className="relative inline-flex overflow-hidden items-center rounded-full bg-black/20 px-8 py-3 border border-indigo-500/30 hover:border-indigo-500/50 backdrop-blur-xl transition-all duration-300">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center text-white font-medium">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects - modern card design */}
        <div className="mb-8">
          <div className="flex items-center mb-8">
            <h3 className="text-2xl font-semibold text-white">Other Developing Stories</h3>
            <span className="ml-3 h-px w-12 bg-indigo-400"></span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="group relative">
                {/* Background blur effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                {/* Card content */}
                <div className="relative bg-gray-900/40 backdrop-blur-sm rounded-2xl border border-white/5 p-6 h-full flex flex-col transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_20px_70px_-15px_rgba(80,70,200,0.15)]">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-white">{project.title}</h4>
                    <span className="px-3 py-1 text-xs rounded-full bg-black/20 border border-indigo-500/20 text-indigo-300">{project.status}</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-800/50 rounded-full h-1.5 mb-1 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1.5 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${project.completion}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400 mb-6">
                    {project.completion}% Complete
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-6 flex-grow">{project.description}</p>
                  
                  <button className="mt-auto w-full relative overflow-hidden rounded-lg">
                    <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/20 group-hover:to-purple-500/20 transition-all duration-300"></span>
                    <span className="relative block text-indigo-300 font-medium py-2.5 border border-indigo-500/10 group-hover:border-indigo-500/30 rounded-lg transition-all duration-300">
                      Follow Development Updates
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;