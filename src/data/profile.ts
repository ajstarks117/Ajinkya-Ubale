export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  headline: string;
  bio: string[];
  location: string;
  availability: string;
  email: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  logo: string;
}

export const profile: Profile = {
  name: 'Ajinkya Ubale',
  firstName: 'Ajinkya',
  lastName: 'Ubale',
  title: 'Computer Engineer & Developer',
  headline: 'I build software, intelligent systems and interactive experiences that solve real world problems.',
  bio: [
    "I'm Ajinkya Ubale, a computer engineering student who enjoys building software systems and exploring complex interactive technologies.",
    'My interests span full-stack development, artificial intelligence, agentic AI, and game development.',
    'I focus on projects where clean code and high-performance design come together to solve actual engineering challenges.',
  ],
  location: 'Pune, India',
  availability: 'Available for opportunities',
  email: 'ajinkyaubale117@gmail.com',
  github: 'https://github.com/ajstarks117',
  linkedin: 'https://www.linkedin.com/in/ajinkya-ubale-2a21a932a/',
  resumeUrl: 'https://drive.google.com/file/d/185hfZaWUBVIzmDrHL7Ldq0FjbmpozY_p/view?usp=sharing',
  logo: 'AJ.',
};
