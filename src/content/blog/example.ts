import { BlogPost } from '../../types/blog';

export const frontendEvolution: BlogPost = {
  id: 1,
  title: "The Evolution of Frontend Development",
  date: "2025-01-12",
  author: "Jane Smith",
  content: [
    {
      type: "paragraph",
      text: `When I first started web development in the early 2000s, the landscape was drastically different. 
      We were working with basic HTML, sprinkling in some CSS, and using JavaScript primarily for form validation 
      and simple interactions. The concept of a "single-page application" seemed like science fiction.`
    },
    {
      type: "paragraph",
      text: `Fast forward to 2025, and the transformation has been nothing short of revolutionary. Modern frontend 
      development has evolved into a sophisticated ecosystem of frameworks, tools, and best practices. React, 
      in particular, has played a pivotal role in this evolution.`
    },
    {
      type: "quote",
      text: "The best way to predict the future is to implement it.",
      author: "David Heinemeier Hansson"
    },
    {
      type: "image",
      src: "/api/placeholder/800/400",
      alt: "Evolution of Web Development Timeline",
      caption: "Timeline showing the evolution of frontend development from 2000 to 2025"
    }
  ],
  tags: ["Web Development", "React", "Frontend", "Technology"]
};