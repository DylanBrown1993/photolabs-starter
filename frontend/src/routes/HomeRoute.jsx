import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({ topics, photos, setSelectedPhoto, setShowModal, favorites, toggleFavorite }) => {
  const [selectedTopicId, setSelectedTopicId] = useState(null);

  const handleTopicClick = (topicId) => {
    setSelectedTopicId(topicId);
  };

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favorites={favorites} onTopicClick={handleTopicClick} />
      <PhotoList
        photos={photos}
        selectedTopicId={selectedTopicId}
        setSelectedPhoto={setSelectedPhoto}
        setShowModal={setShowModal}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default HomeRoute;