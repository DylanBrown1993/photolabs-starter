import React, { useEffect, useState } from 'react';

function countLikes() {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    console.log(`Likes count: ${likes}`);
  }, [likes]);

  return (
    <div>
      <h1>Likes: {likes}</h1>
      <button onClick={() => setLikes(prev => prev + 1)}>Like</button>
    </div>
  );
}

export default countLikes;
