
const cors = require("cors");
const app = require('express')();
const bodyParser = require('express').json;
const mongoose = require('mongoose');
require('dotenv').config();
const compression = require('compression');

app.use(compression());
app.use(bodyParser());
app.use(cors({
    origin: 'https://car-rental-rentgo.vercel.app',
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers as an array
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed methods as an array
}));

const UserSchemaGoogle = new mongoose.Schema({
    userNameGoogle: {
      type:  String,
      require: true,
    },
    userEmailGoogle: {
      type:  String,
      require: true,
    },
    userIDGoogle: {
      type:  String,
      require: true,
    },
});

const UserGoogle = mongoose.model('google-users-info', UserSchemaGoogle);

  //post google login info
app.post("/google-users-info", async (req, res) => {
    try {
      const newGoogleUser = await UserGoogle.create(req.body);
      res.status(201).json(newGoogleUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Error creating user.' });
    }
});