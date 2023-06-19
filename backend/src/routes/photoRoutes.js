const express = require('express');
const router = express.Router();
const Photo = require('../models/Photo');

router.get('/api/topics/photos/:topic_id', async (req, res) => {
  try {
    const topicId = req.params.topic_id;
    const photos = await Photo.find({ topicId });

    res.json({ photos }); 
  } catch (error) {
    console.error('Error fetching photos:', error);
    res.status(500).json({ error: 'Failed to fetch photos' });
  }
});

module.exports = router;