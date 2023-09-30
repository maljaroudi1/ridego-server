const cors = require("cors");
const app = require('express')();
const bodyParser = require('express').json;
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const compression = require('compression');
app.use(compression());
app.use(bodyParser());
app.use(cors({
    origin: 'https://car-rental-rentgo.vercel.app',
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers as an array
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed methods as an array
}));
const mongoURI = process.env.MONGODB_URI;


async function startApp() {
    try {
      await mongoose.connect(mongoURI, {
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
  
  