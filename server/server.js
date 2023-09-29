const cors = require("cors");
const app = require('express')();
const bodyParser = require('express').json;
const bcrypt = require("bcrypt");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const axios = require('axios')
const compression = require('compression');
app.use(compression());






const port = process.env.PORT || 5000;

const payload = {
  userId: 1
};

const apiKeyGoogle = process.env.GOOGLE_MAPS_APIKEY;
const expectedApiKey = apiKeyGoogle; // Replace with your actual API key


const theSecretKey = process.env.SECRET_KEY;
const mongoURI = process.env.MONGODB_URI;



const token = jwt.sign(payload, theSecretKey, { expiresIn: '1h' });

// Connecting to Database
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



const UserCar = mongoose.model('customer-car', UserSchemaCar);
const User = mongoose.model('customer-infos', UserSchema);
const UserGoogle = mongoose.model('google-users-info', UserSchemaGoogle);



//Always declare cors above all get and post requests
app.use(cors({
  origin:'http://localhost:5173',
  allowedHeaders: 'Content-Type,Authorization',
  allowMethods: '*'
}));








//ExpressJS
app.use(bodyParser());


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




//Get request to check and validate if user email is exact match in database
app.get('/customerinfo/customer-info', async (req, res) => {
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


app.get('/customerinfo/customer-infos', async (req, res) => {
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


app.get('/customerinfo/customer-cars', async (req, res) => {
  const { email, carID } = req.query;
  try {
    const existingDocument = await UserCar.find({ email, carID });
    if (existingDocument ) {
      res.json({ exists: true });
    } else {
      res.json({ exists: false });
    }


  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred.' });
  }
});


//Get request to check and validate if carID is in database and post data must mmatch axios post on front end "/customer-cars"




// app.get('/users/customer-info', async (req, res) => {
//   const { uniqueID, uniqueURLToken } = req.query;

//   try {

//     if(){
//       res.json({test: true});
//     } else {
//       res.json({ test: false });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({error: 'An error occurred Unique ID not found' })
//   }
// });

//Post to save customer car booking information
app.post('/customerinfo/customer-cars', async (req, res) => {
  try{
    const newUserCar = await UserCar.create(req.body);
    res.status(201).json(newUserCar)
  }catch (err){
    console.error(err);
    res.status(500).json({ message: 'Error saving booking information.' });
  }
});



//Post request to create a user
app.post('/customerinfo/customer-info', async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating user.' });
  }
});


//Listinng on the port 5000 for post and get request for database

app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
   
});
