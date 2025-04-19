// import mongoose from 'mongoose';

// const requestSchema = new mongoose.Schema({
//   bloodGroup: { type: String, required: true },
//   status: { type: String, default: 'pending' },
//   timestamp: { type: Date, default: Date.now }
// });

// const Request = mongoose.model('Request', requestSchema);
// export default Request;

const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  bloodGroup: { type: String, required: true },
  status: { type: String, default: 'pending' },
  timestamp: { type: Date, default: Date.now }
});

const Request = mongoose.model('Request', requestSchema);
module.exports = Request;
