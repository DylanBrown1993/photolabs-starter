import React, { useState, useEffect } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = ({ topics }) => {
  const [selectedTopicId, setSelectedTopicId] = useState(null);
  const [photos, setPhotos] = useState([]);

  const fetchPhotosByTopic = (topicId) => {
    return fetch(`/api/topics/photos/${topicId}`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched photos:', data);
        return data;
      })
      .catch((error) => {
        console.error('Error fetching photos:', error);
        return [];
      });
  };

  const handleTopicClick = (topicId) => {
    setSelectedTopicId(topicId);
  };

  useEffect(() => {
    console.log('useEffect triggered. Selected topic ID:', selectedTopicId);
    if (selectedTopicId) {
      fetchPhotosByTopic(selectedTopicId)
        .then((fetchedPhotos) => {
          setPhotos(fetchedPhotos);
        })
        .catch((error) => {
          console.error('Error fetching photos:', error);
        });
    }
  }, [selectedTopicId]);

  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} favorites={[]} onTopicClick={handleTopicClick} />
      <PhotoList photos={photos} />
    </div>
  );
};

export default HomeRoute;
