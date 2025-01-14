import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BlogContent } from './BlogContent';
import { blogPosts, getAllTags } from '../content/blog';

const BlogPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const allTags = getAllTags();
  
  const filteredPosts = selectedTag
    ? blogPosts.filter(post => post.tags.includes(selectedTag))
    : blogPosts;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm w-full">
        <div className="max-w-7xl mx-auto py-8 px-6">
          <h1 className="text-4xl font-bold text-purple-800">Jaeha's Blog</h1>
          <p className="mt-2 text-amber-700">Notes of inspiration and design</p>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Tags */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedTag === null
                  ? 'bg-purple-200 text-purple-800'
                  : 'bg-gray-100 text-gray-600 hover:bg-purple-100'
              }`}
            >
              All Posts
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 rounded-full text-sm ${
                  selectedTag === tag
                    ? 'bg-purple-200 text-purple-800'
                    : 'bg-gray-100 text-gray-600 hover:bg-purple-100'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Blog posts */}
        <div className="space-y-8">
          {filteredPosts.map(post => (
            <Card key={post.id} className="border-purple-100 hover:border-purple-200 transition-colors">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-900">{post.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{new Date(post.date + 'T00:00:00').toLocaleDateString()}</span>
                </div>
              </CardHeader>
              <CardContent>
                <BlogContent content={post.content} />
                <div className="flex flex-wrap gap-2 mt-6">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-purple-100">
        <div className="max-w-4xl mx-auto py-8 px-4 text-center text-gray-600">
          <p>© 2025 Jaeha's Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BlogPage;