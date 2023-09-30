const { json, send } = require('micro');
const cors = require('micro-cors')();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const compression = require('micro-compression');
require('dotenv').config();

const theSecretKey = process.env.SECRET_KEY;

// User Schema for customer-info
const userSchema = new mongoose.Schema({
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

const User = mongoose.model('customer-infos', userSchema);

// Hashing Password
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
  } catch (error) {
    return next(error);
  }
});

// Check if a user with the given email exists
const checkEmailExists = async (req) => {
  const { email } = req.query;
  try {
    const existingEmail = await User.findOne({ email });
    return { exists: !!existingEmail };
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred.');
  }
};

// Login and generate an authentication token
const loginUser = async (req) => {
  const { email, password } = await json(req);
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error('Invalid email or password.');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Invalid email or password.');
    }

    const payload = { userId: user._id }; // You can customize the payload as needed
    const token = jwt.sign(payload, theSecretKey, { expiresIn: '1h' });

    return { token };
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred.');
  }
};

module.exports = cors(compression(async (req, res) => {
  if (req.method === 'GET') {
    const result = await checkEmailExists(req);
    send(res, 200, result);
  } else if (req.method === 'POST') {
    try {
      const result = await loginUser(req);
      send(res, 200, result);
    } catch (error) {
      send(res, 401, { error: error.message });
    }
  } else {
    send(res, 405, 'Method Not Allowed');
  }
}));
