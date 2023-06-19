import React from 'react';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList.jsx';


function TopNavigation({ topics, favorites, fetchPhotosAndTopic }) {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">
        <img src="https://www.nicepng.com/png/detail/96-966013_photo-camera-comments-camera-line-drawing-png.png" alt="Logo" className="top-nav-bar__logo-image" />
        PhotoLabs
      </span>
      <TopicList topics={topics} fetchPhotosAndTopic={fetchPhotosAndTopic} />
      <FavBadge hasFavorite={favorites.length > 0} />
    </div>
  );
}

export default TopNavigation;