import React from 'react';
import TopicChips from './TopicChips';

interface IRelatedArticlesCard {
  topic: string;
  title: string;
  publishedDate: string;
  imageUrl: string;
  readingTime: number; // in minutes
}

const RelatedArticlesCard: React.FC<IRelatedArticlesCard> = ({
  topic,
  title,
  imageUrl,
  publishedDate,
  readingTime,
}) => {
  return (
    <div className="max-w-sm bg-gray-100 rounded-2xl overflow-hidden">
      <div className="px-4 mt-4">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
          alt="heading"
          className="w-full h-48 object-cover rounded-xl"
        />
      </div>
      <div className="px-4 mt-4">
        <TopicChips topic="Mathematics" backgroundColor={false} />
      </div>
      <div className="px-4 mb-4">
        <h2 className="text-xl mt-2 font-semibold text-gray-800">
          Some heading for the next article
        </h2>
        <div className="flex space-x-2 mt-2 items-center font-normal text-sm">
          <p>Oct 13</p>
          <p>&#8226;</p>
          <p>13 min Read</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedArticlesCard;
