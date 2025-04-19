const express = require('express');
const Request = require('../models/Request');

const router = express.Router();

router.post('/urgent-request', async (req, res) => {
  const { bloodGroup } = req.body;
  try {
    const request = new Request({ bloodGroup });
    await request.save();
    // Add notification logic here (e.g., email or socket.io)
    res.status(201).json({ message: 'Urgent request raised' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;