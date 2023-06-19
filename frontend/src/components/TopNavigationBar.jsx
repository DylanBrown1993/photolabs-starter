import React, { useEffect } from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList.jsx';

const TopNavigationBar = ({ topics, favorites, onTopicClick }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} onTopicClick={onTopicClick} />
      <FavBadge hasFavorite={favorites.length > 0} />
    </div>
  );
};

export default TopNavigationBar;