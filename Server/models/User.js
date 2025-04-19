// import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   contactNumber: { type: String, required: true },
//   bloodGroup: { type: String, required: true },
//   address: { type: String, required: true },
//   availability: { type: Boolean, default: true },
//   location: {
//     type: { type: String, default: 'Point' },
//     coordinates: [Number]
//   },
//   password: { type: String, required: true },
//   donationHistory: [{ date: Date, duration: Number }]
// });

// userSchema.index({ location: '2dsphere' });

// const User = mongoose.model('User', userSchema);
// export default User;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contactNumber: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  address: { type: String, required: true },
  availability: { type: Boolean, default: true },
  location: {
    type: { type: String, default: "Point" },
    coordinates: [Number],
  },
  password: { type: String, required: true },
  donationHistory: [{ date: Date, duration: Number }],
});

userSchema.index({ location: "2dsphere" });

const User = mongoose.model("User", userSchema);
module.exports = User;
