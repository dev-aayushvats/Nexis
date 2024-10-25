import TopicChips from '../TopicChips';

interface cardProps {
  imageUrl: string;
  topic: string;
  title: string;
  publishedDate: string;
  readTime: number;
}

const ArticleCard = (props: cardProps) => {
  return (
    <div className="flex space-x-2 items-center w-full h-36 bg-white rounded-lg overflow-hidden border border-b-2">
      <img
        src={props.imageUrl}
        alt={props.title}
        className="w-40 h-full object-cover"
      />

      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-60"></div> */}

      {/* Content */}
      <div className="flex flex-col p-4 z-10">
        {/* Tag */}
        <div className="mb-2">
          <TopicChips topic={props.topic} />
        </div>

        {/* Title */}
        <h1 className="text-black text-lg font-semibold mb-2">{props.title}</h1>

        {/* Metadata */}
        <div className="flex text-sm text-gray-700 space-x-2">
          <p>{props.publishedDate}</p>
          <span className="mx-1">•</span>
          <p>{props.readTime} min read</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
