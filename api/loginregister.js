const cors = require("cors");
const express = require('express');
const bodyParser = require('express').json(); // Corrected bodyParser usage
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const axios = require('axios');
const compression = require('compression');

const app = express();
app.use(compression());
app.use(bodyParser);

const payload = {
    userId: 1
};
const theSecretKey = process.env.SECRET_KEY;

// Always declare cors above all get and post requests
app.use(cors({
    origin: 'https://car-rental-rentgo.vercel.app',
    allowedHeaders: 'Content-Type, Authorization',
    methods: 'GET, POST', // Specify allowed HTTP methods
}));

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

// Post request to create a user (Registration)
app.post('/customerinfo/register', async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error creating user.' });
    }
});

// Login and check if user is already created
app.post('/customerinfo/login', async (req, res) => {
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
            // Here, you can generate and send an authentication token if needed.
            // Ensure you have a proper authentication mechanism.
            // res.json({ token });
            res.json({ message: 'Login successful' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred.' });
    }
});

// Get request to check and validate if user email exists in the database
app.get('/customerinfo/check-email', async (req, res) => {
    const { email } = req.query;
    try {
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            res.json({ exists: true });
        } else {
            res.json({ exists: false });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred.' });
    }
});

