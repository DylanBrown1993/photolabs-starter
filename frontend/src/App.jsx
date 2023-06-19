import React, { useState, useEffect } from 'react';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

const App = () => {
  const {
    favorites,
    showModal,
    selectedPhoto,
    toggleFavorite,
    closeModal,
    setSelectedPhoto,
    setShowModal,
  } = useApplicationData();

  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const fetchPhotosAndTopics = () => {
      fetch('/api/photos')
        .then((photosResponse) => photosResponse.json())
        .then((photosData) => setPhotos(photosData))
        .catch((error) => console.log("Error fetching photos:", error ));

        fetch('/api/topics')
        .then((topicsResponse) => topicsResponse.json())
        .then((topicsData) => setTopics(topicsData))
        .catch((error) => console.log("Error fetching topics:", error ));
      };
      fetchPhotosAndTopics();
    }, []);

    const fetchPhotosAndTopic = (topicId) => {
      fetch(`/api/topics/photos/${topicId}`)
        .then((response) => response.json())
        .then((data) => setPhotos(data))
        .catch((error) => console.log("Error fetching photos by topic:", error));
    };
  
    return (
      <div className="App">
        {showModal && <PhotoDetailsModal photos={photos} id={selectedPhoto} closeModal={closeModal} toggleFavorite={toggleFavorite} />}
        <HomeRoute
          fetchPhotosAndTopic={fetchPhotosAndTopic}
          setSelectedPhoto={setSelectedPhoto}
          setShowModal={setShowModal}
          topics={topics}
          photos={photos}
          toggleFavorite={toggleFavorite}
          favorites={favorites}
        />
      </div>
    );
  };
  
  export default App;