export interface Project {
  id: string;
  title: string;
  duration: string;
  description: string[];
  technologies: string[];
  imageUrl: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Online Learning Platform",
    duration: "Sep 2023 – Dec 2023",
    description: [
      "Built a responsive platform using HTML, Bootstrap, and JavaScript, offering educational resources to students.",
      "Ensured cross-browser compatibility and optimized performance for diverse user devices.",
      "Resolved usability issues, improving overall user experience and accessibility."
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "2",
    title: "E-commerce Website for Clothing & Shoes",
    duration: "May 2023 – Aug 2023",
    description: [
      "Designed an engaging shopping interface with a responsive layout.",
      "Implemented transitions and animations, boosting mobile user engagement by 50%.",
      "Debugged code for smooth functionality, reducing bounce rate by 40%."
    ],
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800"
  }
];