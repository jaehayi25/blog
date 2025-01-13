import { BlogPost } from '../../types/blog';
import firstImage from './images/1.jpg';

export const sustainableArchitecture: BlogPost = {
  id: 2,
  title: "Sustainable Software Architecture",
  date: "2025-01-10",
  author: "John Doe",
  content: [
    {
      type: "paragraph",
      text: `In an industry obsessed with speed and innovation, we often overlook one crucial aspect of software 
      development: sustainability. I'm not talking about environmental sustainability (though that's important too), 
      but rather about building systems that can stand the test of time.`
    },
    {
      type: "image",
      src: firstImage,
      alt: "Software Architecture Diagram",
      caption: "Example of a sustainable microservices architecture with clear boundaries and responsibilities"
    },
    {
      type: "quote",
      text: "Simple can be harder than complex: You have to work hard to get your thinking clean to make it simple.",
      author: "Steve Jobs"
    }
  ],
  tags: ["Architecture", "Best Practices", "Software Design"]
};