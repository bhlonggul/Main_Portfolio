export interface Project {
  title: string;
  summary: string;
  tags: string[];
  href?: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "TravelBookers",
    summary:
      "Collaborative JavaScript project — a travel booking interface. Built with a small team.",
    tags: ["javascript", "web", "collab"],
    href: "https://github.com/NGHades/TravelBookers",
    image: "/travelbookers.png",
  },
  {
    title: "Pomodori",
    summary:
      "Underwater-themed pomodoro productivity game built in C# / Unity for FullyHacks. Focus timer meets fish.",
    tags: ["unity", "c#", "hackathon", "game"],
    href: "https://github.com/kuyakoy/fullyhacks_deepsea_game",
    image: "/pomodori.png",
  },
  {
    title: "Summer Research 2025",
    summary:
      "Jupyter notebooks exploring digital behavior and mental health correlations with Pandas and NumPy. CIC|PCUBED, CSUF.",
    tags: ["python", "research", "data"],
    href: "https://github.com/kuyakoy/2025_Summer_Research",
    image: "/research.png",
  },
  {
    title: "Algorithm Visualizer",
    summary:
      "Benchmarking and visualization tool built in Python with Pygame. Runs nine sorting algorithms side-by-side so you can watch them race and compare performance.",
    tags: ["python", "pygame", "algorithms"],
    href: "https://github.com/Ryu-134/cpsc335-sorting-algoithm-analyzer",
    image: "/algo-viz.png",
  },
];
