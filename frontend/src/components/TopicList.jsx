import React from 'react';
import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = ({ topics, onTopicClick }) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          id={topic.id}
          slug={topic.slug}
          label={topic.title}
          onTopicClick={onTopicClick}
        />
      ))}
    </div>
  );
};

export default TopicList;