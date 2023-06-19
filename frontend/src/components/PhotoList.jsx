import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, selectedTopicId, setSelectedPhoto, setShowModal, favorites, toggleFavorite }) => {
  const filteredPhotos = selectedTopicId ? photos.filter(photo => photo.topicId === selectedTopicId) : photos;

  const list = filteredPhotos.map((photo) => (
    <PhotoListItem
      setSelectedPhoto={setSelectedPhoto}
      setShowModal={setShowModal}
      key={photo.id}
      imageSource={photo.urls.regular}
      id={photo.id}
      username={photo.user.username}
      location={photo.location}
      profile={photo.user.profile}
      toggleFavorite={toggleFavorite}
    />
  ));

  return <ul className="photo-list">{list}</ul>;
};

export default PhotoList;