import React from 'react';
import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const openModal = (id) => {
    props.setSelectedPhoto(id);
    props.setShowModal(true);
  };
  
  return (
    <div className="photo-list__container">
      <div className="photo-list__item">
        <PhotoFavButton photoId={props.id} toggleFavorite={props.toggleFavorite}/>
        <img onClick={() => openModal(props.id)} src={props.imageSource} alt={props.username} className="photo-list__image" />
        <div className='photo-list__user-details'>
          <img className='photo-list__user-profile' src={props.profile} />
          <div className='photo-list__user-info'>
            {props.username}
            <p className='photo-list__user-location'>{props.city}, {props.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default PhotoListItem