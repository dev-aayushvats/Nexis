import React from 'react';

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
      <div className="card-body">
        <span className="badge badge-primary">{topic}</span>
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{publishedDate}</span>
          <span>{readingTime} read</span>
        </div>
      </div>
    </div>
  );
};

export default RelatedArticlesCard;
