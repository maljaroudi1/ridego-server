
import './styling.css';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;



  const handleLogin = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      toast.warn('Empty Fields!');
    } else if (!emailRegex.test(email)) {
      toast.error('Invalid Email!');
    } else {
      try {
        const response = await axios.post('http://localhost:5000/users/customer-infos', {
          email,
          password,
        });

        if (response.data.token) {
          toast.success('Login successful');
          window.location.href = '/dashboard';
        } else {
          toast.error('Login unsuccessful');
        }
      } catch (error) {
        console.error(error);
        toast.error('Login failed');
      }
    }
  };



  const goBack = async (e) => {
    e.preventDefault();
    window.location.href = '/home';
  }


  //google
  const [user, setUser] = useState({});


  function handleSignOut(event) {
    setUser({});
    document.getElementById('signInBtn').hidden = false;

  }

  function handleCallBackResponse(response) {
    console.log("Encoded JWT ID token:" + response.credential);
    var userObject = jwtDecode(response.credential);
    console.log(userObject);
    setUser(userObject)
    document.getElementById('signInBtn').hidden = true;

  }
  useEffect(() => {
    /**Global Google */
    google.accounts.id.initialize({
      client_id: "161956769464-1gejcfnjibep56enqvhrslq59fn0ls51.apps.googleusercontent.com",
      callback: handleCallBackResponse
    });
    google.accounts.id.renderButton(
      document.getElementById('signInBtn'),
      {theme: 'outline', size:'large'}
    )
    google.accounts.id.prompt();
  }, []);



  return (
    <>

      <div className="parent-login-container">
        <ToastContainer/>
        <h1>Welcome Back!</h1>
        <div className="left-side">
            <img src="" alt="" />
        </div>
        <div className="ver login-container">
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <motion.button
           whileTap={{ scale: 0.9 }}
           whileHover={{ backgroundColor: "#FD8800", color:"white" }}
           transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={handleLogin}>Login</motion.button>

         <motion.button
           whileTap={{ scale: 0.9 }}
           whileHover={{ backgroundColor: "#FD8800", color:"white" }}
           transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={goBack}>Go back</motion.button>

          <motion.button
          className='custom-btn'
          id='signInBtn'
           whileTap={{ scale: 0.9 }}
         >Google</motion.button>



            {Object.keys(user).length != 0 &&
              <motion.button
              id='signOutBtn'
              whileTap={{ scale: 0.9 }}
              whileHover={{ backgroundColor: "#FD8800", color:"white" }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={handleSignOut}>Logout</motion.button>
            }
        {user &&
          <div className='google-div'>
            <img src={user.picture}></img>
            <h3>{user.name}</h3>

          </div>
        }
        </div>
      </div>
    </>
  );
}
