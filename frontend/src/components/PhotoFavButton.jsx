import React, { useState, useEffect } from 'react';
import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    props.toggleFavorite(props.photoId);
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
