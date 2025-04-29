

// const express = require('express');
// const User = require('../models/User');
// const auth = require('../middleware/auth');

// const router = express.Router();

// router.get('/search', auth, async (req, res) => { // Protected route
//     const { bloodGroup, longitude, latitude, distance = 5000 } = req.query;
//     try {
//         const donors = await User.find({
//             bloodGroup,
//             availability: true,
//             location: {
//                 $near: {
//                     $geometry: { type: 'Point', coordinates: [parseFloat(longitude), parseFloat(latitude)] },
//                     $maxDistance: parseInt(distance)
//                 }
//             }
//         }).select('name contactNumber bloodGroup');
//         res.json(donors);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// router.get('/profile/:id', auth, async (req, res) => { // Protected route
//     try {
//         const user = await User.findById(req.params.id).select('-password');
//         if (!user) return res.status(404).json({ error: 'User not found' });
//         res.json(user);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// });

// module.exports = router;

const express = require('express');
const User = require('../models/User');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/search', auth, async (req, res) => {
    const { bloodGroup, location, distance = 5000 } = req.query; // 'longitude' and 'latitude' are no longer used
    try {
        let query = {
            bloodGroup,
            availability: true
        };

        // Add location filter if provided
        if (location) {
            query.location = { $regex: new RegExp(location, 'i') }; // Case-insensitive partial match
        }

        const donors = await User.find(query).select('name contactNumber bloodGroup location');
        res.json(donors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/profile/:id', auth, async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;