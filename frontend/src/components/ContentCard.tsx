interface cardProps {
  maintag?: string;
  title?: string;
  line?: string;
  publishedOn?: string;
}

const ContentCard = (props: cardProps) => {
  return (
    <div className="bg-white border-b-2 shadow-sm width flex p-4">
      <div className="flex flex-col">
        <h1>{props.title}</h1>
        <h3> {props.line} </h3>
      </div>
    </div>
  );
};

export default ContentCard;
