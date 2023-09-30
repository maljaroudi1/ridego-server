const cors = require("cors");
const express = require('express');
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const compression = require('compression');

const app = express();
app.use(cors({
    origin: 'https://car-rental-rentgo.vercel.app',
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify the allowed headers as an array
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed methods as an array
  }));
app.use(compression());
app.use(express.json());




// UserScheme for customer-info
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});
const User = mongoose.model('customer-infos', UserSchema);


// Post request to create a user
app.post('/customerinfo/customer-info', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating user.' });
  }
});


app.get('/customerinfo/customer-info', async (req, res) => {
    const { name, email } = req.query;
    try {
      const existingUsers = await User.find({ name, email });

      if (existingUsers.length > 0) {
        // At least one user with matching name and email found
        // Assuming you want to return the name of the first matching user
        const user = existingUsers[0];
        res.json({ existingUser: true, name: user.name });
      } else {
        // User not found
        res.json({ existingUser: false });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred.' });
    }
 });
module.exports = app;