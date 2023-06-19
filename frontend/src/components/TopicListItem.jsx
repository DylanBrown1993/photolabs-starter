import React from 'react';
import '../styles/TopicListItem.scss'

const TopicListItem = (props) => {
  return (
  <div className="topic-list__item" onClick={props.onClick}>
      <span> 
      <h3> {props.label} </h3>
      </span>
  </div>
  );
};

export default TopicListItem