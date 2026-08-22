export interface Publication {
  id: string;
  title: string;
  journal: string;
  date: string;
  year: number;
  authors: string[];
  url: string;
  tags: string[];
  abstract?: string;
}

export const publications: Publication[] = [
  {
    id: 'ecoscope-paper',
    title:
      'EcoScope – Framework for Tree Mapping & Species Classification for Sustainability',
    journal:
      'Grenze International Journal of Engineering and Technology (GIJET)',
    date: 'July 2026',
    year: 2026,
    authors: [
      'Ajinkya Ubale',
      'Abhijeet Ambat',
      'Rishi Agrawal',
      'Ajaya Nandiyawar',
    ],
    url: 'https://thegrenze.com/abstract/journal/7662',
    tags: ['AI', 'Computer Vision', 'Sustainability', 'YOLOv8'],
    abstract:
      'Presents an AI-driven forestry framework leveraging YOLOv8 for automated tree species classification and interactive spatial visualization using Mapbox and LiDAR data for real-time forest monitoring.',
  },
  {
    id: 'foodconnect-paper',
    title:
      'Food Connect+: A Progressive Framework for Efficient Food Donation and NGO Collaboration',
    journal: 'International Journal of Computer Applications',
    date: 'November 2025',
    year: 2025,
    authors: [
      'Ajinkya Ubale',
      'Ajaya Nandiyawar',
      'Rishi Agrawal',
      'Manthan Agrawal',
      'Gayatri Aiwale',
    ],
    url: 'https://www.ijcaonline.org/archives/volume187/number52/food-connect-a-progressive-framework-for-efficient-food-donation-and-ngo-collaboration/',
    tags: ['Full-Stack', 'Flask', 'PostgreSQL', 'Social Impact'],
    abstract:
      'Proposes a web-based surplus food management platform connecting restaurants, NGOs, and volunteers to streamline food donation logistics and reduce food waste through real-time coordination.',
  },
];
