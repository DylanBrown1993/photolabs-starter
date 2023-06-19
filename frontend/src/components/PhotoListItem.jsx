import React, { useState } from 'react';
import PhotoDetailsModal from '../routes/PhotoDetailsModal';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const openModal = (id) => {
    props.setSelectedPhoto(id);
    props.setShowModal(true);
  };

  const { id, imageSource, username, location, profile, toggleFavorite } = props;
  const city = location && location.city ? location.city : ''; 
  const country = location && location.country ? location.country : '';
  return (
    <div>
      <div className="photo-list__item">
        <PhotoFavButton photoId={id} toggleFavorite={toggleFavorite} />
        <img onClick={() => openModal(id)} src={imageSource} alt={username} className="photo-list__image" />
        <div className='photo-list__user-details'>
          <img className='photo-list__user-profile' src={profile} alt={username} />
          <div className='photo-list__user-info'>
            {username}
          </div>
          <div className='photo-list__user-location'>
            <h5>{city}, {country}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;

