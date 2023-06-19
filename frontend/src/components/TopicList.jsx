import React, { useState } from 'react';
import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = ({ topics, fetchPhotosAndTopic }) => {
  const [activeTopicId, setActiveTopicId] = useState(null);

  const handleClick = (topicId) => {
    setActiveTopicId(topicId);
    fetchPhotosAndTopic(topicId);
  };

  return (
  <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
        key={topic.id}
        id={topic.id}
        slug={topic.slug}
        label={topic.title}
        active={topic.id === activeTopicId}
        onClick={() => handleClick(topic.id)}
        ></TopicListItem>
      ))}
  </div>
  );
};

export default TopicList