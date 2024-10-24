import TopicChips from './TopicChips';

interface cardProps {
  imageUrl: string;
  topic: string;
  title: string;
  publishedDate: string;
  readTime: number;
}

const ContentCard = (props: cardProps) => {
  return (
    <div className="relative w-full sm:w-80 h-80 bg-white rounded-lg overflow-hidden shadow-md transform hover:scale-105 transition-transform duration-300 m-3">
      <img
        src={props.imageUrl}
        alt={props.title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
        {/* Tag */}
        <div className="mb-2">
          <TopicChips topic={props.topic} />
        </div>

        {/* Title */}
        <h1 className="text-white text-lg font-semibold mb-2">{props.title}</h1>

        {/* Metadata */}
        <div className="flex text-sm text-gray-300 space-x-2">
          <p>{props.publishedDate}</p>
          <span className="mx-1">•</span>
          <p>{props.readTime}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
