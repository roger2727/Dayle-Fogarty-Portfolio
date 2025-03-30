import React, { useEffect } from 'react';
import Image from 'next/image';
import bookCover from '../../../public/bookCpver.png';

const ProjectsSection = () => {
  useEffect(() => {
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

  // Tag color configuration
  const tagColors = [
    'bg-blue-900/30 border-blue-500/30 text-blue-300',
    'bg-indigo-900/30 border-indigo-500/30 text-indigo-300',
    'bg-purple-900/30 border-purple-500/30 text-purple-300',
    'bg-cyan-900/30 border-cyan-500/30 text-cyan-300',
    'bg-red-900/30 border-red-500/30 text-red-300',
  ];

  const featuredProject = {
    title: "Current Manuscript",
    description: "A completed novel exploring themes of duality and perception. The full manuscript is available for professional consideration.",
    coverImage: bookCover,
    status: "Primary Project - Completed",
    completion: 100,
    link: "#"
  };

  const otherProjects = [
    {
      title: "Whispers in the Forgotten Woods",
      status: "Concept Development",
      description: "A tale of mystery and ancient power hidden within a forest that appears on maps but has been lost to human memory for centuries.",
      completion: 15,
      tags: ["Mystery", "Adventure", "Folklore"]
    },
    {
      title: "Guardians of the Crystal Spire",
      status: "Initial Outline",
      description: "First book in a potential series exploring the conflict between elemental forces and those chosen to maintain the balance between worlds.",
      completion: 5,
      tags: ["Epic Fantasy", "Elemental Magic", "Series"]
    }
  ];

  return (
    <section id="projects" className="bg-slate-950 text-gray-200 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-on-scroll fade-up">
          <span className="inline-block text-sm font-medium tracking-wider text-blue-400 uppercase mb-2">Writing Journey</span>
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-2 shimmer-text">Current Projects</h2>
          <p className="text-lg text-blue-300/80 max-w-2xl mx-auto">Worlds under construction, stories taking shape</p>
        </div>

        {/* Featured Project Section */}
        <div className="mb-20">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3 relative group animate-on-scroll fade-up">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-2xl group-hover:opacity-100 opacity-70 transition-all duration-500"></div>
              <div className="relative w-64 h-96 mx-auto overflow-hidden rounded-xl backdrop-blur-sm border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/40 to-blue-900/40"></div>
                <div className="relative w-full h-full">
                  <Image 
                    src={featuredProject.coverImage} 
                    alt={featuredProject.title}
                    className="w-full h-full object-cover blur-xs filter brightness-75"
                    width={256}
                    height={384}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="mt-4 bg-black/30 backdrop-blur-md px-5 py-3 rounded-full border border-indigo-500/30">
                      <p className="text-blue-200 text-sm font-medium">In Progress</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-400/20 to-purple-600/20 transition-opacity duration-500"></div>
              </div>
            </div>
            
            <div className="lg:w-2/3 animate-on-scroll fade-up" style={{ animationDelay: '0.2s' }}>
              <span className="inline-block text-blue-400 text-sm font-medium tracking-wider mb-2">{featuredProject.status}</span>
              <h3 className="text-3xl font-bold text-white mb-4">{featuredProject.title}</h3>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-2xl">
                {featuredProject.description}
              </p>
              <div className="space-y-6">
                <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-400 max-w-xl">
                  This story examines how we present different faces to the world and how those personas shape our reality and relationships.
                </blockquote>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-300 text-sm transition-all hover:border-blue-500/50 hover:bg-blue-900/40">
                    Adventure
                  </span>
                  <span className="px-4 py-2 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-sm transition-all hover:border-indigo-500/50 hover:bg-indigo-900/40">
                    Fantasy
                  </span>
                  <span className="px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 text-purple-300 text-sm transition-all hover:border-purple-500/50 hover:bg-purple-900/40">
                    Mystery
                  </span>
                  <span className="px-4 py-2 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-300 text-sm transition-all hover:border-cyan-500/50 hover:bg-cyan-900/40">
                    Psychological
                  </span>
                  <span className="px-4 py-2 rounded-full bg-red-900/30 border border-red-500/30 text-red-300 text-sm transition-all hover:border-red-500/50 hover:bg-red-900/40">
                    Adrenaline-Pumping
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Projects Section with Tags */}
        <div className="mb-8">
          <div className="flex items-center mb-8 animate-on-scroll fade-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-semibold text-blue-300/80">Other Developing Stories</h3>
            <span className="ml-3 h-px w-12 bg-indigo-400/50 extend-line"></span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div key={index} className="group relative animate-on-scroll fade-up" style={{ animationDelay: `${0.6 + index * 0.2}s` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-gray-900/60 backdrop-blur-sm rounded-2xl border border-white/5 p-6 h-full flex flex-col transition-all duration-300 hover:border-indigo-500/30 hover:shadow-[0_20px_70px_-15px_rgba(80,70,200,0.15)] group-hover:translate-y-[-2px]">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-medium text-white">{project.title}</h4>
                    <span className="px-3 py-1 text-xs rounded-full bg-black/20 border border-indigo-500/20 text-indigo-300">
                      {project.status}
                    </span>
                  </div>
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
                  
                  {/* Tags Section */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 text-sm rounded-full border transition-all ${
                          tagColors[tagIndex % tagColors.length]
                        } hover:border-opacity-50`}
                      >
                        {tag}
                      </span>
                    ))}
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