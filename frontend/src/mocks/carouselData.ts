interface CarouselItem {
  id: number;
  imageSrc: string;
  altText: string;
  title: string;
  publishedDate: string;
  readTime: string;
}

export const carouselItems: CarouselItem[] = [
  {
    id: 0,
    imageSrc:
      'https://alleninstitute.org/wp-content/uploads/2024/05/Quantumconsciousness2-ezgif.com-crop.jpg',
    altText: 'Slide 1',
    title: 'The Quantum Consciousness',
    publishedDate: 'October 12, 2024',
    readTime: '5 min read',
  },
  {
    id: 1,
    imageSrc:
      'https://images.newscientist.com/wp-content/uploads/2019/09/16145926/new-scientist-full.jpg',
    altText: 'Slide 2',
    title: 'Exploring the Unknown',
    publishedDate: 'October 18, 2024',
    readTime: '3 min read',
  },
  {
    id: 2,
    imageSrc:
      'https://alleninstitute.org/wp-content/uploads/2024/05/Quantumconsciousness2-ezgif.com-crop.jpg',
    altText: 'Slide 3',
    title: 'The Mind-Body Problem',
    publishedDate: 'October 20, 2024',
    readTime: '4 min read',
  },
  {
    id: 3,
    imageSrc:
      'https://images.newscientist.com/wp-content/uploads/2019/09/16145926/new-scientist-full.jpg',
    altText: 'Slide 4',
    title: 'Cosmic Mysteries Unveiled',
    publishedDate: 'October 22, 2024',
    readTime: '6 min read',
  },
  {
    id: 4,
    imageSrc:
      'https://alleninstitute.org/wp-content/uploads/2024/05/Quantumconsciousness2-ezgif.com-crop.jpg',
    altText: 'Slide 5',
    title: 'Neural Networks and AI',
    publishedDate: 'October 24, 2024',
    readTime: '8 min read',
  },
];
