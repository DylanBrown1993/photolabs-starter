import React, { useState, useEffect } from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton({ photoId, favorites, toggleFavorite }) {
  const [isClicked, setIsClicked] = useState(false);
  useEffect (() => {
    favorites && setIsClicked(favorites.includes(photoId))},
     [favorites] ) 
  const handleClick = () => {
    setIsClicked(!isClicked);
    toggleFavorite(photoId);
  };

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg" onClick={handleClick}>
        <FavIcon fill= {isClicked ? '#C80000' : null}/> 
      </div>
    </div>
  );
};

export default PhotoFavButton;
