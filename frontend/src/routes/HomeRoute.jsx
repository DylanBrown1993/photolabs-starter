import React from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({topics, photos, setSelectedPhoto, setShowModal, favorites, toggleFavorite, fetchPhotosAndTopic}) => {

  return (
    <div className="home-route">

      <TopNavigationBar topics={topics} 
      photos={photos} 
      favorites={favorites} 
      fetchPhotosAndTopic={fetchPhotosAndTopic}/>

      <PhotoList fetchPhotosAndTopic={fetchPhotosAndTopic} 
      setSelectedPhoto={setSelectedPhoto} 
      setShowModal={setShowModal} 
      photos={photos} 
      favorites={favorites} 
      toggleFavorite={toggleFavorite}/>

    </div>
  );
};
export default HomeRoute;