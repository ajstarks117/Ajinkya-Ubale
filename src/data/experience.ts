export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  tags?: string[];
}

export const timeline: TimelineEntry[] = [
  {
    year: 'Jan 2024',
    title: 'Joined Vishwakarma Institute of Technology',
    description:
      'Began Bachelor of Technology (B.Tech) studies in Computer Engineering at VIT Pune.',
    tags: ['B.Tech', 'Computer Engineering'],
  },
  {
    year: 'Dec 2024',
    title: 'Game Developer Intern',
    description:
      'Engineered interactive educational systems using GDScript in Godot Engine at Pariksha-Mitra (VIT Pune) for 500+ students.',
    tags: ['Godot', 'GDScript', 'Internship'],
  },
  {
    year: 'Jan 2025',
    title: 'Open Source Contributor (SWOC)',
    description:
      'Optimized multiple open-source repositories by identifying bottlenecks and refactoring legacy code in Python and JavaScript during Social Winter of Code.',
    tags: ['SWOC', 'Python', 'JS', 'Git'],
  },
  {
    year: 'Jul 2025',
    title: 'Open Source Contributor (GSSoC)',
    description:
      'Contributed to high-impact repositories during GirlScript Summer of Code, resolving bugs and optimizing React and Python backend workflows.',
    tags: ['GSSoC', 'React', 'Python', 'Open Source'],
  },
];

export interface ExploringItem {
  index: string;
  title: string;
  description: string;
}

export const currentlyExploring: ExploringItem[] = [
  {
    index: '01',
    title: 'Agentic AI',
    description: 'Building autonomous AI agents that reason, plan, and execute complex multi-step tasks.',
  },
  {
    index: '02',
    title: 'Full-Stack Systems',
    description: 'Building secure API systems with Flask, FastAPI, Node.js, and relational databases.',
  },
  {
    index: '03',
    title: 'Game Engineering',
    description: 'Refining complex game mechanics, state machines, and immersive UI/UX inside Godot.',
  },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 3, suffix: '', label: 'Major Projects' },
  { value: 500, suffix: '+', label: 'Students Reached' },
  { value: 10, suffix: '+', label: 'Technologies Mastered' },
  { value: 2, suffix: '+', label: 'Open Source Programs' },
];
