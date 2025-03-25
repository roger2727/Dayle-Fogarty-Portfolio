import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Import placeholder book cover - replace with your actual book cover
import bookCover from '../../../public/cover.jpeg'; // You'll need to add this image

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
      <div className="container mx-auto px-6 relative z-10"> {/* Higher z-index to keep content above fireflies */}
        {/* Section Header with matching gradient styling */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-2">Current Projects</h2>
          <p className="text-lg font-light text-blue-300 italic mb-3">Worlds under construction, stories taking shape</p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Featured Project Section - styled to match the About section */}
        <div className="bg-gray-900 bg-opacity-60 rounded-lg p-6 mb-16 shadow-xl border border-blue-900">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Book Cover with In Progress Overlay */}
            <div className="lg:w-1/3 mb-8 lg:mb-0 transform transition-transform duration-500 hover:scale-105">
              <div className="relative w-64 h-96 mx-auto shadow-2xl rounded-md overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900 to-blue-900 opacity-30"></div>
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
                 
                    <div className="mt-4 bg-indigo-900/70 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <p className="text-blue-200 text-sm">{featuredProject.completion}% Complete</p>
                    </div>
                  </div>
                </div>
                {/* Magic glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-600 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
            </div>
            
            {/* Project Details */}
            <div className="lg:w-2/3 lg:pl-12">
              <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 mb-3">{featuredProject.title}</h3>
              {/* Remove the duplicate progress information since it's now in the overlay */}
              <div className="flex gap-4 mb-4">
                <div className="bg-blue-900 bg-opacity-50 px-3 py-1 rounded-full text-blue-200 text-sm">
                  {featuredProject.status}
                </div>
              </div>
              
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                {featuredProject.description}
              </p>
              
              <div className="space-y-4">
                <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-400">
                  "This story has been developing in my imagination for years. I'm excited to finally bring these characters and their world to life through words."
                </blockquote>
                
                <Link href={featuredProject.link} className="inline-block group">
                  <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-900/50 hover:shadow-xl">
                    <span className="flex items-center">
                      Learn More About This Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects - styled to match "My Creative Quest" section */}
        <div className="mb-8">
          <h3 className="flex items-center text-2xl font-semibold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">Other Developing Stories</span>
            <span className="ml-3 h-px w-12 bg-indigo-400"></span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg border-l-2 border-blue-400 transition-transform duration-300 hover:-translate-y-2">
                <div className="p-6">
                  <div className="h-full flex flex-col">
                    <p className="font-medium text-indigo-300 mb-1">✧ {project.title}</p>
                    <div className="mb-3">
                      <span className="text-purple-300 text-sm">{project.status}</span>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-700 rounded-full h-2 mb-1">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full" 
                        style={{ width: `${project.completion}%` }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-400 mb-4">
                      {project.completion}% Complete
                    </div>
                    
                    <p className="text-sm text-gray-300 mb-6 flex-grow">{project.description}</p>
                    
                    <div className="mt-auto">
                      <button className="w-full bg-gray-700 hover:bg-gray-600 text-indigo-300 font-semibold py-2 px-4 rounded-lg transition duration-300">
                        Follow Development Updates
                      </button>
                    </div>
                  </div>
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