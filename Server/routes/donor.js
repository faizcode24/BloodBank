const express = require('express');
const User = require('../models/User');

const router = express.Router();

router.get('/search', async (req, res) => {
  const { bloodGroup, longitude, latitude, distance = 5000 } = req.query;
  try {
    const donors = await User.find({
      bloodGroup,
      availability: true,
      location: {
        $near: {
          $geometry: { type: 'Point', coordinates: [parseFloat(longitude), parseFloat(latitude)] },
          $maxDistance: parseInt(distance)
        }
      }
    }).select('name contactNumber bloodGroup');
    res.json(donors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/profile/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;