// Types for blog content blocks
export type BlogContentBlock = {
    type: 'paragraph';
    text: string;
  } | {
    type: 'quote';
    text: string;
    author?: string;
  } | {
    type: 'image';
    src: string;
    alt: string;
    caption?: string;
  };
  
  // Type for a complete blog post
  export type BlogPost = {
    id: number;
    title: string;
    date: string;
    author: string;
    content: BlogContentBlock[];
    tags: string[];
  };