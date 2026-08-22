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
  email: 'vp2860083@gmail.com',
  github: 'https://github.com/ajstarks117',
  linkedin: 'https://www.linkedin.com/in/ajinkya-ubale-2a21a932a/',
  resumeUrl: 'https://drive.google.com/file/d/1XUuQ_0CoiCD3L8-6fmFPlEa2sl3d5UDA/view?usp=sharing',
  logo: 'AJ.',
};
