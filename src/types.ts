export interface Project {
  id: string;
  name: string;
  category: string;
  problem: string;
  strategy: string;
  execution: string;
  results: {
    label: string;
    value: string;
  }[];
  tools: string[];
  image: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  achievements: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Service {
  title: string;
  description: string;
  outcome: string;
}

export interface ToolCategory {
  category: string;
  tools: string[];
}
