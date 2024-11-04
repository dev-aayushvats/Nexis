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
    <div className="container min-h-screen px-48 mt-8">
      <h1 className="text-3xl font-bold mb-8">Topics</h1>

      <div className="grid grid-cols-12 gap-8">
        {/* Left Sidebar - Sticky Topics List */}
        <div className="col-span-12 md:col-span-4">
          <div className="sticky top-4 max-h-[calc(100vh-2rem)] overflow-y-auto">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">Browse Topics</h2>
              <div className="space-y-2">
                {topics.map((topic) => (
                  <button
                    key={topic.name}
                    onClick={() => setSelectedTopic(topic.name)}
                    className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                      selectedTopic === topic.name
                        ? `bg-primary-200 text-primary-500`
                        : `hover:bg-gray-200`
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{topic.name}</span>
                      <span className="text-sm text-gray-500">
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
        <div className="col-span-12 md:col-span-8 mb-8">
          <div className="bg-neutral-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">
              Articles in {selectedTopic}
            </h2>
            <div className="flex flex-col space-y-2">
              {paginatedArticles.map((article) => (
                <Link key={article.id} to={`/article/${article.id}`}>
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
              <p className="text-gray-500 text-center py-8">
                No articles found for this topic.
              </p>
            )}
            <div className="paginationComponent flex justify-end mt-4">
              <div className="join">
                <button
                  className="join-item btn"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                >
                  «
                </button>
                <button className="join-item btn">
                  Page {currentPage} / {totalPages}
                </button>
                <button
                  className="join-item btn"
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
