import React from 'react';
import { Link } from 'react-router-dom';
import ContentCard from '../components/ContentCard';

function HomePage() {
  return (
    <div>
      <div>
        <Link to={'/article/12'} className="text-blue-600 font-semibold">
          <ContentCard
            imageUrl="https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg"
            topic="Philosophy"
            title="Learn how to relax in the age of stress and anxiety"
            publishedDate="13 Oct"
            readTime={12}
          />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
