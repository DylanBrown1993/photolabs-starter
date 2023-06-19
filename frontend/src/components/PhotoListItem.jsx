import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ id, imageSource, username, city, country, profile, toggleFavorite, setSelectedPhoto, setShowModal }) => {
  const openModal = () => {
    setSelectedPhoto(id);
    setShowModal(true);
  };

  return (
    <div className="photo-list__container">
      <div className="photo-list__item">
        <PhotoFavButton photoId={id} toggleFavorite={toggleFavorite} />
        <img onClick={openModal} src={imageSource} alt={username} className="photo-list__image" />
        <div className="photo-list__user-details">
          <img className="photo-list__user-profile" src={profile} alt={username} />
          <div className="photo-list__user-info">
            {username}
            <p className="photo-list__user-location">
              {city}, {country}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
