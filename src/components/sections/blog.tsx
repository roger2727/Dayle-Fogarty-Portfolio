import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import defaultCoverImage from '../../../public/cover.jpeg';

interface SubstackPost {
  title: string;
  content: string;
  pubDate: string;
  categories?: string[];
  link: string;
  creator?: string;
  imageUrl?: string;
}

interface ProcessedPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string | StaticImageData;
  readTime: string;
  link: string;
}

// Helper functions defined before they're used
const calculateReadTime = (content: string): string => {
  if (!content) return '2 min read';
  const plainText = content.replace(/<[^>]+>/g, '');
  const words = plainText.split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
};

const extractExcerpt = (content: string, length = 150): string => {
  if (!content) return '';
  const plainText = content.replace(/<[^>]+>/g, '');
  return plainText.length > length ? 
    `${plainText.substring(0, length)}...` : 
    plainText;
};

const extractImage = (content: string): string | StaticImageData => {
  if (!content) return defaultCoverImage;

  // First try to find a direct image URL
  const directImgRegex = /<img[^>]+src="(https:\/\/[^">]+)"/i;
  const directMatch = content.match(directImgRegex);
  if (directMatch?.[1]) return directMatch[1];

  // Then look for Substack CDN pattern
  const cdnPattern = /https:\/\/substackcdn\.com\/image\/fetch\/[^"']+/i;
  const cdnMatch = content.match(cdnPattern);
  if (cdnMatch?.[0]) return cdnMatch[0];

  // Finally look for S3 direct URL
  const s3Pattern = /https:\/\/substack-post-media\.s3\.amazonaws\.com\/public\/images\/[^"']+/i;
  const s3Match = content.match(s3Pattern);
  
  return s3Match?.[0] || defaultCoverImage;
};

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState<SubstackPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubstackPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/get-substack-posts');
        
        if (!response.ok) {
          throw new Error('Failed to fetch Substack posts');
        }
        
        const data = await response.json();
        console.log('API response:', data);
        setBlogPosts(data.items || []);
      } catch (err) {
        console.error('Error fetching Substack posts:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchSubstackPosts();
  }, []);

  const processedPosts: ProcessedPost[] = blogPosts.map((post, index) => ({
    id: index + 1,
    title: post.title,
    excerpt: extractExcerpt(post.content),
    date: new Date(post.pubDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    category: post.categories?.[0] || 'Uncategorized',
    image: post.imageUrl || extractImage(post.content),
    readTime: calculateReadTime(post.content),
    link: post.link
  }));

  const featuredPost = processedPosts[0] || null;
  const regularPosts = processedPosts.slice(1, 3);

  if (loading) {
    return <LoadingState />;
  }

  if (error || processedPosts.length === 0) {
    return <ErrorState error={error} />;
  }
  
  return (
    <section id="blog" className="bg-slate-950 text-gray-200 py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader />
        
        {featuredPost && <FeaturedPost post={featuredPost} />}
        
        {regularPosts.length > 0 && (
          <div className="mb-8">
            <h3 className="flex items-center text-2xl font-semibold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400">More Insights</span>
              <span className="ml-3 h-px w-12 bg-indigo-400"></span>
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {regularPosts.map(post => (
                <RegularPost key={post.id} post={post} />
              ))}
            </div>
          </div>
        )}
        
        <ViewAllButton />
      </div>
    </section>
  );
};

// Sub-components remain the same as in your original code
const LoadingState = () => (
  <section id="blog" className="bg-slate-950 text-gray-200 py-16">
    <div className="container mx-auto px-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6">Loading blog posts...</h2>
      </div>
    </div>
  </section>
);

const ErrorState = ({ error }: { error: string | null }) => (
  <section id="blog" className="bg-slate-950 text-gray-200 py-16">
    <div className="container mx-auto px-6">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-6">Storytellers Chronicle</h2>
        <p className="text-lg">{error || 'No blog posts found.'}</p>
      </div>
    </div>
  </section>
);

const SectionHeader = () => (
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-2">Storytellers Chronicle</h2>
    <p className="text-lg font-light text-blue-300 italic mb-3">Musings of a fantasy writer</p>
    <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"></div>
  </div>
);

const FeaturedPost = ({ post }: { post: ProcessedPost }) => (
  <div className="mb-16">
    <div className="bg-gray-900 bg-opacity-60 rounded-lg overflow-hidden shadow-xl border border-blue-900 transition-all duration-300 hover:shadow-blue-900/20 hover:shadow-2xl">
      <div className="md:flex">
        <div className="md:w-1/2 relative overflow-hidden">
          <div className="relative h-64 md:h-full">
            <PostImage post={post} className="object-cover w-full h-full transition-transform duration-700 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 opacity-60"></div>
          </div>
        </div>
        
        <div className="md:w-1/2 p-8">
          <PostMeta post={post} />
          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-400 mb-4 hover:from-blue-200 hover:to-indigo-300 transition-all duration-300">
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              {post.title}
            </a>
          </h3>
          <p className="text-gray-300 mb-6">{post.excerpt}</p>
          <PostFooter post={post} />
        </div>
      </div>
    </div>
  </div>
);

const RegularPost = ({ post }: { post: ProcessedPost }) => (
  <div className="bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden shadow-lg border-l-2 border-blue-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-900/20 hover:shadow-xl">
    <div className="relative h-56 overflow-hidden">
      <PostImage post={post} className="object-cover w-full h-full transition-transform duration-700 hover:scale-105" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 opacity-60"></div>
      <div className="absolute top-4 left-4">
        <span className="bg-indigo-900 bg-opacity-70 text-indigo-300 text-xs px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>
    </div>
    
    <div className="p-6">
      <div className="flex items-center text-sm text-gray-400 mb-3">
        <span>{post.date}</span>
        <span className="mx-3">•</span>
        <span>{post.readTime}</span>
      </div>
      <p className="font-medium text-indigo-300 mb-3">✧ {post.title}</p>
      <p className="text-gray-300 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
      <PostFooter post={post} isSmall />
    </div>
  </div>
);

const PostImage = ({ post, className }: { post: ProcessedPost, className?: string }) => {
  const [imgSrc, setImgSrc] = useState(post.image);
  const [loading, setLoading] = useState(true);

  if (typeof imgSrc === 'string') {
    return (
      <div className="relative w-full h-full">
        {loading && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
        )}
        <Image
          src={imgSrc}
          alt={post.title}
          fill
          className={`${className} ${loading ? 'opacity-0' : 'opacity-100'}`}
          unoptimized={true}
          priority={true}
          onLoad={() => setLoading(false)}
          onError={() => {
            console.warn('Image failed to load, using fallback');
            setImgSrc(defaultCoverImage);
            setLoading(false);
          }}
        />
      </div>
    );
  }
  return (
    <Image
      src={imgSrc}
      alt={post.title}
      width={800}
      height={600}
      className={className}
      priority={true}
    />
  );
};

const PostMeta = ({ post }: { post: ProcessedPost }) => (
  <div className="flex items-center mb-4">
    <span className="bg-indigo-900 bg-opacity-50 text-indigo-300 text-xs px-3 py-1 rounded-full">
      {post.category}
    </span>
    <span className="mx-3 text-gray-500">•</span>
    <span className="text-gray-400 text-sm">{post.date}</span>
  </div>
);

const PostFooter = ({ post, isSmall = false }: { post: ProcessedPost, isSmall?: boolean }) => (
  <div className={`flex items-center justify-between ${isSmall ? 'text-sm' : ''}`}>
    <span className="text-gray-400">{post.readTime}</span>
    <a 
      href={post.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
    >
      {isSmall ? 'Continue Reading' : 'Read Full Article'}
      <svg xmlns="http://www.w3.org/2000/svg" className={`${isSmall ? 'h-4 w-4 ml-1' : 'h-5 w-5 ml-2'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </a>
  </div>
);

const ViewAllButton = () => (
  <div className="text-center mt-10">
    <a 
      href="https://dayfog.substack.com/" 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-indigo-500/30"
    >
      View All Articles
    </a>
  </div>
);

export default BlogSection;