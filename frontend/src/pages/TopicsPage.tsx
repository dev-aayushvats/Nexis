import React, { useState } from 'react';
import ArticleCard from '../components/topicsPage/ArticleCard';
import { mockArticles } from '../mocks/articleData';
import { Link } from 'react-router-dom';

type Topic = {
  name: string;
  count: number; // Number of articles in this topic
};

// pages/Topics.tsx

const TopicsPage: React.FC = () => {
  const topics: Topic[] = [
    { name: 'Physics', count: 12 },
    { name: 'Biology', count: 8 },
    { name: 'Space', count: 15 },
    { name: 'Technology', count: 20 },
    { name: 'Artificial Intelligence', count: 18 },
    { name: 'Philosophy', count: 10 },
    { name: 'Mathematics', count: 14 },
    { name: 'Chemistry', count: 9 },
    { name: 'Psychology', count: 11 },
    { name: 'Engineering', count: 16 },
  ];

  const [selectedTopic, setSelectedTopic] = useState<string>(topics[0].name);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  const filteredArticles = mockArticles.filter(
    (article) => article.topic === selectedTopic,
  );

  // Calculate pagination values
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const paginatedArticles = filteredArticles.slice(
    startIndex,
    startIndex + articlesPerPage,
  );

  // Handle page changes
  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-16 lg:px-24 xl:px-48 mt-4 sm:mt-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-8">Topics</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
        {/* Left Sidebar - Topics List */}
        <div className="col-span-1 lg:col-span-4">
          <div className="sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold mb-4">
                Browse Topics
              </h2>
              <div className="space-y-2">
                {topics.map((topic) => (
                  <button
                    key={topic.name}
                    onClick={() => setSelectedTopic(topic.name)}
                    className={`w-full text-left px-3 sm:px-4 py-2 rounded-md transition-colors ${
                      selectedTopic === topic.name
                        ? `bg-primary-200 text-primary-500`
                        : `hover:bg-gray-200`
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base">{topic.name}</span>
                      <span className="text-xs sm:text-sm text-gray-500">
                        {topic.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Articles Grid */}
        <div className="col-span-1 lg:col-span-8 mb-4 sm:mb-8">
          <div className="bg-neutral-50 rounded-lg p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
              Articles in {selectedTopic}
            </h2>
            <div className="flex flex-col space-y-3 sm:space-y-4">
              {paginatedArticles.map((article) => (
                <Link
                  key={article.id}
                  to={`/article/${article.id}`}
                  className="block hover:shadow-md transition-shadow duration-200"
                >
                  <ArticleCard
                    imageUrl={article.imageUrl}
                    topic={article.topic}
                    title={article.title}
                    publishedDate={article.publishedDate}
                    readTime={article.readTime}
                  />
                </Link>
              ))}
            </div>

            {filteredArticles.length === 0 && (
              <p className="text-gray-500 text-center py-6 sm:py-8">
                No articles found for this topic.
              </p>
            )}

            {/* Pagination */}
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
        </div>
      </div>
    </div>
  );
};

export default TopicsPage;
