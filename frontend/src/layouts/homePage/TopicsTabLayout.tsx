import { useState } from 'react';
import { mockArticles } from '../../mocks/articleData';
import ArticleCard from '../../components/topicsPage/ArticleCard';

function TopicsTabLayout() {
  const [selectedTopic, setSelectedTopic] = useState('Science');

  const handleTopicClick = (topicName: string) => {
    setSelectedTopic(() => topicName);
  };

  return (
    <div className="w-full">
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className={`tab ${selectedTopic === 'Science' ? 'text-primary-400 text-lg font-semibold' : ' transition-transform'}`}
          aria-label="Science"
          defaultChecked
          onClick={() => handleTopicClick('Science')}
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
          className={`tab ${selectedTopic === 'Technology' ? 'text-primary-400 text-lg font-semibold' : ' transition-transform'}`}
          aria-label="Technology"
          onClick={() => handleTopicClick('Technology')}
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
          className={`tab ${selectedTopic === 'Philosophy' ? 'text-primary-400 text-lg font-semibold' : ' transition-transform'}`}
          aria-label="Philosophy"
          onClick={() => handleTopicClick('Philosophy')}
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
