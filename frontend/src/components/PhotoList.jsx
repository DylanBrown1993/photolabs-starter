import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  const list = props.photos.map((photo) => <PhotoListItem 
  setSelectedPhoto={props.setSelectedPhoto} 
  setShowModal={props.setShowModal} 
  key={photo.id} 
  imageSource={photo.urls.regular} 
  id={photo.id} 
  name={photo.user.name} 
  profile={photo.user.profile}
  city={photo.location.city} 
  country={photo.location.country} 
  toggleFavorite={props.toggleFavorite}
  favorites={props.favorites} />)
  
  return <ul className="photo-list">
    {list}
  </ul>
};

export default PhotoList