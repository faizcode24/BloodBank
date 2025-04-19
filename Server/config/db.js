// import mongoose from "mongoose";

// const db = async () => {
// 	try {
// 		await mongoose.connect(process.env.MONGO_DB_URI);
// 		console.log("Connected to MongoDB");
// 	} catch (error) {
// 		console.log("Error connecting to MongoDB", error.message);
// 	}
// };

// export default db;
const mongoose = require("mongoose");

const db = async function() {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB", error.message);
  }
};

module.exports = db;

