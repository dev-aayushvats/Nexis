import React from 'react';
import TopicChips from './TopicChips';

interface IHeadingCard {
  topic: string;
  title: string;
  imageUrl: string;
  publishedDate: string;
  readTime: number; // in minutes
}

const HeadingCard: React.FC<IHeadingCard> = ({
  topic,
  imageUrl,
  title,
  publishedDate,
  readTime,
}) => {
  return (
    <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 h-96 max-w-full mx-auto">
      <img
        src={imageUrl}
        alt="University of Southern California"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
      <div className="z-10">
        <TopicChips topic={topic} />
      </div>
      <h3 className="z-10 mt-2 text-3xl font-bold text-white">{title}</h3>
      <div className="flex z-10 gap-x-3 font-normal overflow-hidden text-sm leading-6 text-gray-300">
        <div>{publishedDate}</div>
        <div>{readTime} min read</div>
      </div>
    </div>
  );
};

export default HeadingCard;
