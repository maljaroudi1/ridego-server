const cors = require("cors");
const app = require('express')();

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const booking = require('./booking');
const googlelogin = require('./googlelogin');
const loginregister= require('./loginregister');
const compression = require('compression');
const express = require('express');

// Always declare cors above all get and post requests
app.use(cors({
  origin: 'https://car-rental-rentgo.vercel.app',
  allowedHeaders: "*", // Specify the allowed headers as an array
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed methods as an array
}));
app.use(compression());
app.use(express.json());
// app.use(cors({
//     origin: 'https://car-rental-rentgo.vercel.app',
//     allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers as an array
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed methods as an array
// }));
const MONGODB_URI = process.env.MONGODB_URI;
async function startApp()  {
    try {
      await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        family: 4
      });

      console.log('db running');
    } catch (error) {
      console.error('db connection error:', error);
    }
}
  //Initilize function to connect to database
startApp();
app.use(loginregister)
app.use(booking)
app.use(googlelogin)
