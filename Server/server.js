// import path from "path";
// import express from "express";
// import dotenv from "dotenv";

// import authRoutes from './routes/auth.js'; // ✅ correct way in ES6

// import db from "./config/db.js";

// dotenv.config();
// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(express.json());

// // ✅ Mount routes
// app.use('/api', authRoutes);

// app.listen(PORT ,() =>{
//     db();
//     console.log(`Server is Running on port ${PORT}`);
// })

const path = require("path");
const express = require("express");
//const dotenv = require("dotenv");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

//Middleware
app.use(express.json());

const authRoutes = require("./routes/auth"); // ✅ no .js needed in CommonJS
const donerRoutes = require("./routes/donor");
const requestRoutes = require("./routes/requests");

app.use('./api', authRoutes);
app.use('/api', donerRoutes);
app.use('/api', requestRoutes);

// DatabseConnection
const db = require("./config/db");
db();

//dotenv.config();

//Routes
app.use("/api", require("./routes/auth"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is Running on port ${PORT}`);
});
