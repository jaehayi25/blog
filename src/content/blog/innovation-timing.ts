import { BlogPost } from '../../types/blog';
import firstImage from './images/1.jpg';

export const innovationTiming: BlogPost = {
  id: 1,
  title: "A Note on How Innnovation Happens—Innovation is Timing",
  date: "2025-01-12",
  author: "Jaeha Yi",
  content: [
    {
      type: "paragraph",
      text: `We often think that innovation happens because of some crazy genius beyond our feeble minds. 
      However, most examples throughout history prove that it's a matter of timing and perspective, a realization of opportunity.`
    },
    {
      type: "paragraph",
      text: `Consider the success stories of the first widely-available, commercial virtual reality device, the Oculus Quest, or the commercialization of outer space made possible by SpaceX. 
      Two different technologies, but both were driven by improvements in electronics and computing, which made VR and rocketry affordable and precise.
      Imagine a curve going up, representing improvements in technology, and at a certain threshold—once the environment has become charged with excitement and untapped technological potential—innovation is bound to happen, no matter who the actors are. 
      This explains why in history we see so many instances of multiple discovery: hunter-gatherers discovering agriculture simultaneously across the globe or two scientists discovering the same theories. 
      The founders of Oculus Quest and SpaceX, Palmer Luckey and Elon Musk, were just the right people at the right time, with a unique perspective that gave them the right idea. 
      Of course, there were many brilliant engineers and visionaries spearheading the effort, but the real factor to success was the timing and the environment in which the effort took place.`
    },
    {
      type: "paragraph",
      text: `In a similar vein, consider this potential innovation in military technology:`
    },
    {
      type: "quote",
      text: `there could be a major breakthrough in what the military called "responsive space."... Worden wanted the ability to deploy space assets with the same speed and precisoin as other tools in the United States' military aresenal... it would be game-changing to launch a satellite at the same time [as deploying the army] for support.`,
      author: "When the Heavens Went on Sale (37)"
    },
    {
      type: "paragraph",
      text: `It was a simple idea. By no means did it require the extreme creativity and genius. Yet back then, the idea of responsive space was hard to imagine, test, and design when, in the first place, the latest rocket technology didn't support a feasable solution! 
      Only when the rockets became sufficiently powerful, precise, and cheap, did people start thinking about its potential applications.`
    },
    {
      type: "paragraph",
      text: `So where does this all lead? I think, deep down in our hearts, all of us want to be innovators. 
      How many times have we tried to be the next big success story and failed because we bang our heads against the wall on a problem currently unsolvable? 
      Innovation is timing, and finding the right moment to strike requires patience and preparation.
      We should all take a moment to step back, prepare ourselves (mentally, physically, and technologically), and take a deep breath... before heading down the path that awaits us at the right time.`
    },
    {
      type: "image",
      src: firstImage,
      alt: "Beautiful road lined with trees and light fog",
      caption: ""
    },
    {
      type: "paragraph",
      text: `<strong>Quote of the Day</strong>`
    },
    {
      type: "quote",
      text: "The devil is in the details, but so is salvation.",
      author: "When the Heavens Went on Sale (39) - originally quoted by Hyman G. Rickover"
    }
  ],
  tags: ["Technology", "Industry"]
};