const cors = require("cors");
const app = require('express')();

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const booking = require('./booking');
const googlelogin = require('./googlelogin');
const login = require('./login');
const register = require('./register')
const compression = require('compression');
const express = require('express');
app.use(express.json());

// Always declare cors above all get and post requests
app.use(cors({
    origin: 'https://car-rental-rentgo.vercel.app',
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers as an array
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed methods as an array
}));
app.use(compression());
app.use(express.json());


async function startApp()  {
    try {
      await
      mongoose.connect(process.env.MONGODB_URI, {
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
startApp(app.use(login)
app.use(register)
app.use(booking)
app.use(googlelogin)
);
