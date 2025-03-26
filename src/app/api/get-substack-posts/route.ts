// app/api/get-substack-posts/route.ts
import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

interface SubstackPost {
  title: string;
  content: string;
  pubDate: string;
  categories?: string[];
  link: string;
  creator?: string;
  imageUrl?: string;
  enclosure?: {
    url?: string;
    type?: string;
  };
}

export async function GET() {
  try {
    const parser = new Parser({
      customFields: {
        item: [
          ['content:encoded', 'content'],
          ['dc:creator', 'creator'],
          ['enclosure', 'enclosure'],
        ],
      },
    });

    const substackUrl = 'https://rogermitch27.substack.com/feed';
    const feed = await parser.parseURL(substackUrl);
    
    const items = feed.items.map(item => {
      // First try to get image from enclosure (featured image)
      const enclosureUrl = item.enclosure?.type?.startsWith('image/') 
        ? decodeURIComponent(item.enclosure.url)
        : null;

      // Then try to extract from content
      const contentImageUrl = extractFirstImageUrl(item.content || '');

      return {
        title: item.title || '',
        content: item.content || '',
        pubDate: item.pubDate || '',
        categories: item.categories || [],
        link: item.link || '',
        creator: item.creator || '',
        imageUrl: enclosureUrl || contentImageUrl,
      };
    });
    
    return NextResponse.json({ items });
    
  } catch (error) {
    console.error('Error fetching Substack posts:', error);
    return NextResponse.json(
      { items: [], error: 'Failed to fetch Substack posts' },
      { status: 500 }
    );
  }
}

// Improved image extraction for Substack's complex HTML structure
function extractFirstImageUrl(content: string): string | null {
  if (!content) return null;

  // Try direct image URL first
  const directImgRegex = /<img[^>]+src="(https:\/\/[^">]+)"/i;
  const directMatch = content.match(directImgRegex);
  if (directMatch?.[1]) return directMatch[1];

  // Look for Substack CDN URL pattern
  const cdnPattern = /https:\/\/substackcdn\.com\/image\/fetch\/[^"']+/i;
  const cdnMatch = content.match(cdnPattern);
  if (cdnMatch?.[0]) return decodeURIComponent(cdnMatch[0]);

  // Look for direct S3 URL pattern
  const s3Pattern = /https:\/\/substack-post-media\.s3\.amazonaws\.com\/public\/images\/[^"']+/i;
  const s3Match = content.match(s3Pattern);
  
  return s3Match?.[0] || null;
}