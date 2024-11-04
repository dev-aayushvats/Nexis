import React from 'react';
import TopicChips from '../TopicChips';

interface IRelatedArticlesCard {
  topic: string;
  title: string;
  publishedDate: string;
  imageUrl: string;
  readingTime: number; // in minutes
}

const RelatedArticlesCard: React.FC<IRelatedArticlesCard> = (props) => {
  const { topic, title, publishedDate, imageUrl, readingTime } = props;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={imageUrl} alt={title} />
      </figure>
      <div className="p-4">
        <TopicChips topic={topic} />
        <h2 className="card-title mt-2">{title}</h2>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{publishedDate}</span>
          <span>{readingTime} read</span>
        </div>
      </div>
    </div>
  );
};

export default RelatedArticlesCard;
