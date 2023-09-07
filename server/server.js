const cors = require("cors");
const app = require('express')();
const bodyParser = require('express').json;
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const payload = {
  userId: 1

};
const secretKey = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

// Connecting to Database
async function startApp() {
  try {
    await mongoose.connect('mongodb://localhost:27017/users',  {
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


//UserScheme for customer-car-booking
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
    required: true,
    unique: true,

  },
  locationCar: {
    type: String,
    required: true,
  },
  carPickUp: {
    type: String,
    required: true,
  },
  carReturn: {
    type: String,
    required: true,

  },
  carTimePickup: {
    type: String,
    required: true
  },
  carTimeReturn: {
    type: String,
    required: true
  }
});


//UserScheme for customer-info
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


//Hashing Password
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

const UserCar = mongoose.model('customer-car-booking', UserSchemaCar);
const User = mongoose.model('customer-info', UserSchema);

//Always declare cors above all get and post requests
app.use(cors({
  origin:'http://localhost:5173',
  allowedHeaders: 'Content-Type,Authorization',
  allowMethods: '*'
}));





//ExpressJS
app.use(bodyParser());


//Login
app.post('/users/customer-infos', async (req, res) => {
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




//Get request to check and validate if user email is exact match in database
app.get('/users/customer-info', async (req, res) => {
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

//Post to save customer car booking information
app.post('/users', async (req, res) => {
  try{
    const newUserCar = await UserCar.create(req.body);
    res.status(201).json(newUserCar)
  }catch (err){
    console.error(err);
    res.status(500).json({ message: 'Error saving booking information.' });
  }
});



//Post request to create a user
app.post('/users', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating user.' });
  }
});


//Listinng on the port 5000 for post and get request for database
const port = 5000;
app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
   
});
