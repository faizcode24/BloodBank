// import express from 'express';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';
// import User from '../models/User.js';

// const router = express.Router();

// router.post('/register', async (req, res) => {
//   const { name, contactNumber, bloodGroup, address, password, location } = req.body;
//   try {
//     const hashedPassword = await bcrypt.hash(password, 10);
//     const user = new User({ name, contactNumber, bloodGroup, address, password: hashedPassword, location });
//     await user.save();
//     res.status(201).json({ message: 'User registered' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// router.post('/login', async (req, res) => {
//   const { contactNumber, password } = req.body;
//   try {
//     const user = await User.findOne({ contactNumber });
//     if (!user || !(await bcrypt.compare(password, user.password))) {
//       return res.status(401).json({ error: 'Invalid credentials' });
//     }
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// export default router;

const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, contactNumber, bloodGroup, address, password, location } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, contactNumber, bloodGroup, address, password: hashedPassword, location });
    await user.save();
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  const { contactNumber, password } = req.body;
  try {
    const user = await User.findOne({ contactNumber });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
     //const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    // res.json({ token });
    res.send(200, "User Login");
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
