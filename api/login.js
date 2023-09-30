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


const payload = {
    userId: 1
};


const theSecretKey = process.env.SECRET_KEY;



const token = jwt.sign(payload, theSecretKey, { expiresIn: '1h' });



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

//Get request to check and validate if user email is exact match in database
app.get('/customerinfo/customer-infos', async (req, res) => {
  const { email} = req.query;
  try {
    const existingEmail = await User.findOne({ email });
    if (existingEmail ) {
      res.json({ exists: true});

    } else {
      res.json({ exists: false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred.' });
  }
});

//Login and check if user is already created
app.post('/customerinfo/customer-infos', async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401)
      .json({ error: 'Invalid email or password.' });
    }
    // Compare the hashed incoming password to the stored hash
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401)
      .json({ error: 'Invalid email or password.' });
    } else {
       // Generate and send an authentication token if needed
        res.json({ token });

    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred.' });
  }
});





