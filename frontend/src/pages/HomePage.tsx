import { Link } from 'react-router-dom';
import ContentCard from '../components/topicsPage/ArticleCard';
import HeroCarousel from '../components/homePage/HeroCarousel';

const articles = [
  {
    id: '1',
    title: 'The Future of AI: How It Will Change the World',
    bannerImage:
      'https://images.theconversation.com/files/218314/original/file-20180509-34021-1t9q8r0.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip',
    publishedDate: '2024-10-10',
    readTime: 5,
  },
  {
    id: '2',
    title: 'Understanding JavaScript Closures',
    bannerImage:
      'https://images.theconversation.com/files/218314/original/file-20180509-34021-1t9q8r0.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip',
    publishedDate: '2024-10-15',
    readTime: 8,
  },
  {
    id: '3',
    title: 'Exploring the Depths of Quantum Computing',
    bannerImage:
      'https://images.theconversation.com/files/218314/original/file-20180509-34021-1t9q8r0.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=926&fit=clip',
    publishedDate: '2024-10-20',
    readTime: 7,
  },
];

function HomePage() {
  return (
    <div>
      <HeroCarousel articles={articles} />
      {/* <div>
        <Link to={'/article/12'} className="text-blue-600 font-semibold">
          <ContentCard
            imageUrl="https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg"
            topic="Philosophy"
            title="Learn how to relax in the age of stress and anxiety"
            publishedDate="13 Oct"
            readTime={12}
          />
        </Link>
      </div> */}
    </div>
  );
}

export default HomePage;
