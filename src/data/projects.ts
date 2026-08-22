export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  technologies: string[];
  overview?: string;
  problem?: string;
  solution?: string;
  challenges?: string;
  learnings?: string;
  github: string;
  live: string;
  image: string;
  images?: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'traveltrek',
    index: '01',
    title: 'TravelTrek',
    category: 'Full-Stack · Blockchain · Mobile App',
    description:
      'A multi-layered tourist safety platform designed for monitoring and protecting tourists in remote or high-risk areas using real-time tracking, geo-fencing, blockchain-based digital identities, and a fail-safe multi-layer SOS communication system.',
    features: [
      'Real-time tourist location tracking',
      'Geo-fencing and high-risk area alerts',
      'Blockchain-based digital tourist IDs',
      'Multi-layer SOS communication system',
      'Offline GPS tracking and local data storage',
      'Police/rescue monitoring dashboard',
    ],
    technologies: [
      'Flutter',
      'Dart',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'WebSockets',
      'Solidity',
      'Hardhat',
      'PostgreSQL',
      'Firebase',
      'Docker',
      'Mapbox',
    ],
    overview:
      'A multi-layered tourist safety platform designed for monitoring and protecting tourists in remote or high-risk areas using real-time tracking, geo-fencing, blockchain-based digital identities, and a fail-safe multi-layer SOS communication system.',
    problem:
      'Tourists traveling through remote or high-risk areas may face poor network connectivity, delayed emergency response, difficulty sharing their location, and limited access to authorities during emergencies.',
    solution:
      'Built an integrated safety platform connecting tourists with an authority control system. The platform combines GPS tracking, geo-fencing, blockchain-based digital identities, real-time alerts, and multiple emergency communication channels including mobile data, SMS, Bluetooth, and audio-based SOS fallback mechanisms.',
    challenges:
      'Designing a reliable emergency communication system that can continue functioning when conventional internet connectivity is unavailable. Another major challenge was integrating multiple independent components—mobile application, real-time backend, authority dashboard, database, and blockchain—into a single safety ecosystem.',
    learnings:
      'This project strengthened my understanding of full-stack application architecture, Flutter development, real-time communication, GPS and geo-fencing, blockchain integration, WebSockets, offline-first systems, and emergency communication design. It also provided experience in designing modular systems where multiple technologies work together to solve a real-world problem.',
    github: 'https://github.com/ajstarks117/EDI',
    live: '#',
    image: '/images/projects/TravelTrek.png',
    images: [],
    featured: true,
  },
  {
    id: 'foodconnect',
    index: '02',
    title: 'FoodConnect',
    category: 'Full-Stack · NGO Platform · Python',
    description:
      'FoodConnect is a web-based platform dedicated to bridging the gap between surplus food and those in need. It connects restaurants, NGOs, and volunteers to ensure efficient food donation and distribution, reducing food waste and combating hunger.',
    features: [
      'Relational PostgreSQL schema design',
      'Flask secure API backend',
      'Firebase multi-role secure authentication',
      'Real-time food inventory logistics tracker',
    ],
    technologies: ['Flask', 'PostgreSQL', 'Firebase', 'Python', 'React', 'Bootstrap'],
    overview:
      'FoodConnect is a surplus food management platform connecting restaurants, NGOs, and volunteers to reduce food waste and support communities.',
    problem:
      'Large amounts of edible food are wasted due to poor coordination between food donors, NGOs, and volunteers.',
    solution:
      'FoodConnect addresses this by providing an efficient, real-time platform for food sharing. Restaurants can quickly post surplus food, NGOs can easily claim donations, and volunteers can coordinate pickup and delivery seamlessly.',
    challenges:
      'Handling large datasets, ML integration, user roles, third-party APIs, and connecting multiple parts of the system.',
    learnings:
      'Full-stack development, Flask, databases, machine learning, API integration, deployment, and building technology around real-world problems.',
    github: 'https://github.com/Ajaya-Nandiyawar/Food_Connect',
    live: 'https://foodconnect-d9su.onrender.com/',
    image: '/images/projects/foodconnect.png',
    images: [],
  },
  {
    id: 'ecoscope',
    index: '03',
    title: 'EcoScope',
    category: 'AI · Forestry Framework · Python',
    description:
      'A YOLOv8-powered species classification system with an interactive Mapbox dashboard for real-time forest monitoring and spatial data visualization.',
    features: [
      'YOLOv8 object detection model',
      'Interactive Mapbox GL JS spatial visualization',
      'LiDAR point cloud scanning integration',
      'Real-time forestry density analytics dashboard',
    ],
    technologies: ['Python', 'YOLOv8', 'Flask', 'Mapbox GL JS', 'LiDAR', 'HTML/CSS'],
    overview:
      'EcoScope is an AI-driven forestry framework designed to track, classify, and visualize tree species and forest density in real time using satellite/LiDAR data and object detection models.',
    problem:
      'Forestry departments struggle with manually cataloging tree species and identifying density changes across massive geographic expanses.',
    solution:
      'Trained a custom YOLOv8 model for automatic tree classification and built a full-stack Flask application mapping coordinates via Mapbox.',
    challenges:
      'Integrating LiDAR point-cloud coordinate alignment with Mapbox tiles required precise geographical projection transformations.',
    learnings:
      'Deepened my expertise in AI object detection pipelines, geographical mapping systems, and large spatial dataset rendering.',
    github: 'https://github.com/ajstarks117/Ecoscope',
    live: '#',
    image: '/images/projects/ecoscope.png',
    images: [],
  },
  {
    id: 'mos-simulation',
    index: '04',
    title: 'Multiprogramming Operating System (MOS) Simulation',
    category: 'Systems · C++ · Virtual Memory',
    description:
      'A C++ simulation of a multiprogramming operating system that models core OS concepts such as memory management, instruction execution, virtual memory, paging, interrupts, and job execution.',
    features: [
      'Virtual memory & paging',
      'Dynamic memory allocation',
      'Virtual-to-physical address mapping',
      'SI, PI & TI interrupt handling',
      'Job loading & execution',
      'OS error detection & handling',
    ],
    technologies: ['C++', 'Operating Systems', 'Virtual Memory', 'Paging', 'Interrupt Handling', 'Memory Management'],
    overview:
      'A C++ simulation of a multiprogramming operating system that models core OS concepts such as memory management, instruction execution, virtual memory, paging, interrupts, and job execution.',
    problem:
      'Understanding operating-system internals can be difficult because concepts such as memory allocation, address translation, interrupts, and error handling are not directly visible in normal application development.',
    solution:
      'Built a simulated operating-system environment in C++ that reproduces the execution of jobs inside a virtual machine. The project was developed in two phases, progressively adding memory management, virtual memory, paging, and interrupt-driven error handling.',
    challenges:
      'Implementing address translation and page allocation while maintaining correct CPU execution flow and handling multiple types of interrupts and program errors.',
    learnings:
      'This project strengthened my understanding of operating-system architecture, memory management, virtual memory, paging, interrupts, and low-level system execution. It also improved my ability to translate theoretical OS concepts into working simulations.',
    github: 'https://github.com/ajstarks117/Operating-Systems-CP',
    live: '#',
    image: '/images/projects/OS.png',
    images: [],
  },
  {
    id: 'parikshamitra',
    index: '05',
    title: 'Pariksha-Mitra',
    category: 'Game Development · Godot · UI/UX',
    description:
      'A logic-based gamified educational game suite built with Godot to enhance interactive learning outcomes for 500+ students.',
    features: [
      'Interactive curriculum-based game levels',
      'Robust state management in GDScript',
      'Gamified learning challenges',
      'Highly responsive UI/UX controls',
    ],
    technologies: ['Godot Engine', 'GDScript', 'UI/UX Design', 'Git'],
    overview:
      'Pariksha-Mitra is an interactive educational suite designed to gamify curriculum requirements, making learning engaging and measurable for engineering students.',
    problem:
      'Traditional lecture-based teaching methods struggle with engagement, failing to solidify complex logic systems concepts.',
    solution:
      'Developed multiple game modules implementing game mechanics that map onto educational curriculum rules.',
    challenges:
      'Designing custom UI menus and viewport scales inside Godot that behave responsively across varying screen resolutions.',
    learnings:
      'Mastered GDScript architecture patterns, component-based game design, and student-focused UI/UX workflows.',
    github: 'https://github.com/ajstarks117/Pariksha-Mitra',
    live: '#',
    image: '/images/projects/parikshamitra.png',
    images: [],
  },
];

