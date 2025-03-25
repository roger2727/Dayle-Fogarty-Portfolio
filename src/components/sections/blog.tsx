import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import blogImage1 from '../../../public/cover.jpeg';

const BlogSection = () => {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Art of World-Building: Creating Believable Fantasy Realms",
      excerpt: "Discover the essential elements that make fantasy worlds feel real and immersive. From geography to magic systems, learn how to craft a world that readers can get lost in.",
      date: "March 15, 2025",
      category: "Craft of Writing",
      image: blogImage1,
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Character Development in Fantasy: Beyond the Chosen One Trope",
      excerpt: "Explore fresh approaches to character development that move beyond the tired 'chosen one' narrative and create more nuanced, relatable protagonists for modern fantasy.",
      date: "February 22, 2025",
      category: "Character Design",
      image: blogImage1,
      readTime: "12 min read"
    },
    {
      id: 3,
      title: "Weaving Mythology Into Your Fantasy Narrative",
      excerpt: "How to research, adapt, and integrate mythological elements into your storytelling without falling into cliché. Create rich backstories using ancient myths as inspiration.",
      date: "January 30, 2025",
      category: "Worldbuilding",
      image: blogImage1,
      readTime: "10 min read"
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);
  
  // Fixed animation values - no randomization
  const rotateValue1 = 5; // Replace Math.random() * 10
  const rotateValue2 = 8; // Replace Math.random() * 10
  const opacityValue = 0.8; // Replace Math.random() * 0.3 + 0.7

  return (
    <section id="blog" className="bg-slate-950 text-gray-200 py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header with matching gradient styling */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-2">Storyteller's Journal</h2>
          <p className="text-lg font-light text-blue-300 italic mb-3">Musings on the craft of fantasy writing</p>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gray-900 bg-opacity-60 rounded-lg overflow-hidden shadow-xl border border-blue-900 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-2xl">
            <div className="md:flex">
              {/* Featured Image */}
              <div className="md:w-1/2 relative overflow-hidden">
                <div className="relative h-64 md:h-full">
                  <Image 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                    width={800}
                    height={600}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 opacity-60"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="md:w-1/2 p-8">
                <div className="flex items-center mb-4">
                  <span className="bg-indigo-900 bg-opacity-50 text-indigo-300 text-xs px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <span className="mx-3 text-gray-500">•</span>
                  <span className="text-gray-400 text-sm">{featuredPost.date}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 mb-4 hover:from-blue-200 hover:to-indigo-300 transition-all duration-300">
                  <Link href={`/blog/${featuredPost.id}`}>
                    {featuredPost.title}
                  </Link>
                </h3>
                
                <p className="text-gray-300 mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                  
                  <Link href={`/blog/${featuredPost.id}`} className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300">
                    Read Full Article
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Posts Grid - with section heading styled like "My Creative Quest" */}
        <div className="mb-8">
          <h3 className="flex items-center text-2xl font-semibold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">More Insights</span>
            <span className="ml-3 h-px w-12 bg-indigo-400"></span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {regularPosts.map(post => (
              <div key={post.id} className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg border-l-2 border-blue-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-900/20 hover:shadow-xl">
                {/* Post Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                    width={600}
                    height={350}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 opacity-60"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-900 bg-opacity-70 text-indigo-300 text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                {/* Post Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-400 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-3">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <p className="font-medium text-indigo-300 mb-3">✧ {post.title}</p>
                  
                  <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <Link href={`/blog/${post.id}`} className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300 text-sm">
                    Continue Reading
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* View All Posts Button */}
        <div className="mt-12 text-center">
          <Link href="/blog" className="inline-block">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-900/50 hover:shadow-xl">
              View All Articles
            </button>
          </Link>
        </div>
      </div>

   
    </section>
  );
};

export default BlogSection;