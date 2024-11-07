import { useState } from 'react';
import { mockArticles } from '../../mocks/articleData';
import ArticleCard from '../../components/topicsPage/ArticleCard';

function TopicsTabLayout() {
  const [selectedTopic, setSelectedTopic] = useState('Science');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  const handleTopicClick = (topicName: string) => {
    setSelectedTopic(() => topicName);
    setCurrentPage(1);
  };

  const filteredArticles = mockArticles;
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + articlesPerPage,
  );

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
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
            {paginatedArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>

          <div className="paginationComponent flex justify-center sm:justify-end mt-4 sm:mt-6">
            <div className="join">
              <button
                className="join-item btn btn-sm sm:btn-md"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                «
              </button>
              <button className="join-item btn btn-sm sm:btn-md">
                Page {currentPage} / {totalPages}
              </button>
              <button
                className="join-item btn btn-sm sm:btn-md"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                »
              </button>
            </div>
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
