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
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 items-start sm:items-center w-full h-auto sm:h-36 bg-white rounded-lg overflow-hidden border border-b-2">
      <img
        src={props.imageUrl}
        alt={props.title}
        className="w-full sm:w-40 h-48 sm:h-full object-cover"
      />

      <div className="flex flex-col p-4">
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
