import React from 'react';
import { BlogContentBlock } from '../types/blog';

interface BlogContentProps {
  content: BlogContentBlock[];
}

export const BlogContent: React.FC<BlogContentProps> = ({ content }) => {
  return (
    <div className="prose max-w-none">
      {content.map((block, index) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <p 
                key={index} 
                className="mb-6 text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: block.text }}
              />
            );
          case 'quote':
            return (
              <blockquote key={index} className="my-8 border-l-4 border-purple-300 pl-4 py-2">
                <p className="text-lg italic text-gray-700">{block.text}</p>
                {block.author && (
                  <footer className="mt-2 text-sm text-gray-600">
                    — {block.author}
                  </footer>
                )}
              </blockquote>
            );
          case 'image':
            return (
              <figure key={index} className="my-8">
                <img
                  src={block.src}
                  alt={block.alt}
                  className="w-full rounded-lg shadow-md"
                />
                {block.caption && (
                  <figcaption className="mt-2 text-center text-sm text-gray-600 italic">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );
        }
      })}
    </div>
  );
};