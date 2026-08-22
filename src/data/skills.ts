export interface SkillCategory {
  name: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Languages',
    skills: ['C/C++', 'Python', 'SQL (PostgreSQL, MySQL)', 'JavaScript', 'Java (Basics)', 'HTML/CSS'],
  },
  {
    name: 'Frameworks',
    skills: ['Flask', 'React', 'Node.js', 'FastAPI', 'Firebase', 'Bootstrap'],
  },
  {
    name: 'Tools & Libraries',
    skills: ['Git', 'GitHub', 'Linux', 'pandas', 'NumPy', 'YOLOv8', 'Mapbox GL JS'],
  },
  {
    name: 'Game Development',
    skills: ['Godot Engine', 'GDScript', 'UI/UX Design'],
  },
];

/** Flat list of unique skills for 3D visualization */
export const allUniqueSkills: string[] = Array.from(
  new Set(skillCategories.flatMap((c) => c.skills))
);
