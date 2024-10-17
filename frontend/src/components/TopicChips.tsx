import React from "react";
import { getTopicColors } from "../utils/chipsUtils";

interface ITopicChips {
  topic: string;
}

const TopicChips: React.FC<ITopicChips> = ({ topic }) => {
  const topicColors = getTopicColors(topic);
  return (
    <div
      className={`inline-flex items-center space-x-2 bg-blue-100 ${topicColors?.bg} text-sm font-normal px-2 py-1 rounded-full`}
    >
      <span
        className={`w-3 h-3 rounded-full ${topicColors?.indicatorColor}`}
      ></span>
      <span className={`${topicColors?.primary}`}>{topic}</span>
    </div>
  );
};

export default TopicChips;
