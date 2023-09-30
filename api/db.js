const cors = require("cors");
const express = require('express'); // Corrected import
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const booking = require('./booking');
const googlelogin = require('./googlelogin');
const login = require('./login');
const compression = require('compression');

const app = express(); // Initialize express app

// Always declare cors above all get and post requests

app.use(compression());
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI;

async function startApp()  {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      family: 4
    });

    console.log('MONGODB running');
  } catch (error) {
    console.error('db connection error:', error);
  }
}

// Initialize function to connect to the database
startApp();
app.use(cors({
  origin: 'https://car-rental-rentgo.vercel.app',
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers as an array
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed methods as an array
}));
// Attach your routes using app.use
app.use(login);

app.use(booking);
app.use(googlelogin);

const port = process.env.PORT || 5000; // Use process.env.PORT if available, or 5000 as a fallback
app.listen(port, () => { // Use the correct syntax for app.listen
  console.log(`Listening on port ${port}`);
});

module.exports = app;
