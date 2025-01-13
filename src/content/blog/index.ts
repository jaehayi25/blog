import { innovationTiming } from './innovation-timing';
import { BlogPost } from '../../types/blog';

// Export all blog posts
export const blogPosts: BlogPost[] = [
  innovationTiming,
];

// Helper functions for blog posts
export const getAllTags = (): string[] => {
  const tags = new Set(blogPosts.flatMap(post => post.tags));
  return Array.from(tags);
};

export const getPostsByTag = (tag: string): BlogPost[] => {
  return blogPosts.filter(post => post.tags.includes(tag));
};