import React from 'react';
import '../styles/TopicListItem.scss';

const TopicListItem = ({ label, onTopicClick }) => {
  const handleClick = () => {
    console.log("Clicked topic label:", label);
    onTopicClick && onTopicClick(label);
  };

  return (
    <div className="topic-list__item" onClick={handleClick}>
      <span>
        <h3>{label}</h3>
      </span>
    </div>
  );
};

export default TopicListItem;