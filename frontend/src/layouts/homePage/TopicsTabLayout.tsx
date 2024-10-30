import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { mockArticles } from '../../mocks/articleData';
import { Article } from '../../mocks/articleData';
import ArticleCard from '../../components/topicsPage/ArticleCard';

function TopicsTabLayout() {
  const [categories] = useState({
    Technology: [
      /* Mock data - replace with your actual data */
      {
        id: 1,
        title: 'The Future of AI Development',
        topic: 'Technology',
        publishedDate: '15 Mar',
        readTime: 8,
        imageUrl: '/path-to-image.jpg',
      },
      // Add more articles...
    ],
    Philosophy: [],
    Science: [],
    // Add more categories...
  });

  return (
    <div className="w-full">
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-primary-400 font-semibold text-lg"
          aria-label="Science"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
            {mockArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Technology"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 2
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Philosophy"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          Tab content 3
        </div>
      </div>
    </div>
  );
}

export default TopicsTabLayout;
