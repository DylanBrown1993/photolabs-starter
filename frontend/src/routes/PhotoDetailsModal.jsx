import React, { Fragment, useState } from 'react';
import '../styles/PhotoDetailsModal.scss';
import PhotoFavButton from '../components/PhotoFavButton';

export const PhotoDetailsModal = ({ closeModal, id, photos, toggleFavorite, favorites }) => {
  const selectedPhoto = photos.find(photo => photo.id === id);
  const similarPhotos = selectedPhoto.similar_photos;

  const [similarPhotoClicked, setSimilarPhotoClicked] = useState(
    similarPhotos.reduce((acc, photo) => {
      acc[photo.id] = favorites.includes(photo.id);
      return acc;
    }, {})
  );

  const handleSimilarPhotoClick = (photoId) => {
    setSimilarPhotoClicked(prevState => ({
      ...prevState,
      [photoId]: !prevState[photoId]
    }));
    toggleFavorite(photoId);
  };

  return (
    <div className='photo-details-modal'>
      <button onClick={closeModal} className='photo-details-modal__close-button'>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_428_287)">
            <path d="M14.0625 3.9375L3.9375 14.0625" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.0625 14.0625L3.9375 3.9375" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_428_287">
            <rect width="18" height="18" fill="white"/>
            </clipPath>
          </defs>
        </svg>
        X
      </button>
      <PhotoFavButton photoId={selectedPhoto.id} toggleFavorite={toggleFavorite} favorites={favorites} />
      <div className="photo-details-modal__container">
        <img src={selectedPhoto.urls.regular} alt="Selected Photo" className="photo-details-modal__image" />
      </div>
      <div className="photo-details-modal__header">
        <p className="photo-details-modal__related-title"> Related Photos </p>
        <div className="photo-details-modal__related">
          {similarPhotos && Object.values(similarPhotos).length > 0 ? (
            Object.values(similarPhotos).map((photo) => (
              <div key={photo.id} className="photo-details-modal__item">
                <div className="photo-details-modal__heart">
                  <PhotoFavButton
                    photoId={photo.id}
                    toggleFavorite={handleSimilarPhotoClick}
                    favorites={favorites}
                    isClicked={similarPhotoClicked[photo.id]}
                  />
                </div>
                <img src={photo.urls.regular} alt="Similar Photo" className="photo-details-modal__images" />
                <div className='photo-list__user-details'>
                </div>
              </div>
            ))
          ) : (
            <p> No similar photos. </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
