
const cors = require("cors");
const app = require('express')();
const bodyParser = require('express').json;
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const axios = require('axios')
const compression = require('compression');
const express = require('express');


app.use(cors({
  origin: 'https://car-rental-rentgo.vercel.app',
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers as an array
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed methods as an array
}));
app.use(express.json());
app.use(compression());








const UserSchemaCar = new mongoose.Schema({
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
  
    },
    phone: {
      type: String,
  
    },
    carName: {
      type: String,
      required: true,
  
    },
    carYear: {
      type: String,
      required: true,
  
    },
    carType: {
      type: String,
      required: true,
  
    },
    carID: {
      type: String,
  
  
    },
    locationCar: {
      type: String,
  
    },
    carTimePickup: {
      type: String,
  
    },
    carTimeReturn: {
      type: String,
  
    }
});
const UserCar = mongoose.model('customer-car', UserSchemaCar);//Get request to check and validate if carID is in database and post data must mmatch axios post on front end "/customer-cars"





// //Post to save customer car booking information
app.post('/customerinfo/customer-cars', async (req, res) => {
  try{
    const newUserCar = await UserCar.create(req.body);
    res.status(201).json(newUserCar)
  }catch (err){
    console.error(err);
    res.status(500).json({ message: 'Error saving booking information.' });
  }
});


app.post('/customerinfo/customer-cars', async (req, res) => {
    try{
      const newUserCar = await UserCar.create(req.body);
      res.status(201).json(newUserCar)
    }catch (err){
      console.error(err);
      res.status(500).json({ message: 'Error saving booking information.' });
    }
  });
  