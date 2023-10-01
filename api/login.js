const cors = require("cors");
const express = require('express');
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const compression = require('compression');

const app = express();

app.use(compression());
app.use(express.json());

const payload = {
    userId: 1
};

const theSecretKey = process.env.SECRET_KEY;

const token = jwt.sign(payload, theSecretKey, { expiresIn: '1h' });

// UserSchema for customer-info
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

// Hashing Password
UserSchema.pre('save', async function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        user.password = hash;
        next();
    } catch (error) {
        return next(error);
    }
});

app.use(cors({
  origin: 'https://car-rental-rentgo.vercel.app',
  allowedHeaders: 'Content-Type, Authorization',
  methods: ['POST', 'GET', 'PUT', 'DELETE'], // Specify the allowed methods as an array
}));

// Register a user (POST request)
app.post('/customerinfo/customer-infos', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating user.' });
  }
});

// Check if a user exists by email (GET request)
app.get('/customerinfo/customer-infos', async (req, res) => {
  const { email } = req.query;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred.' });
  }
});

// Login and authenticate a user (POST request)
app.post('/customerinfo/customer-infos', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }
    // Compare the hashed incoming password to the stored hash
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    } else {
       // Generate and send an authentication token if needed
        res.json({ token });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred.' });
  }
});

// Additional routes or middleware can be added here

module.exports = app;
