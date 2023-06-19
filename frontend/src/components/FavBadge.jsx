import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

export const FavBadge = ({ isFavPhotoExist, hasFavorite }) => {
  if (!hasFavorite) {
    return (
      <div className='fav-badge'>
        <FavIcon width={20} height={17} fill="#FFFFFF" displayAlert={isFavPhotoExist}/>
      </div>
    ) 
  } else {
    return (
      <div className='fav-badge'>
        <FavIcon width={20} height={17} fill="#C80000" displayAlert={!isFavPhotoExist}/>
      </div>
    ) 
  }
};


export default FavBadge;