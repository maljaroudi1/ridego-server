import React from 'react';
import { useState} from 'react';
import './styling.css';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';




export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const nameRegex = /^[A-Za-z\s\-']+$/;
  const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      name === '' ||
      email === '' ||
      phone === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      toast.warn('Empty Fields!');
    } else if (!nameRegex.test(name)) {
      toast.error('Invalid Name!');
    } else if (!emailRegex.test(email)) {
      toast.error('Invalid Email!');
    } else if (password.length < 8) {
      toast.error('Password is too short');
    } else if (confirmPassword !== password) {
      toast.warn('Passwords do not match!');
    } else {
      const checkUser = await axios.get(`http://localhost:5000/users/customer-info?email=${email}`);
      if (checkUser.data.exists) {
        toast.error('User Already Exists!');
      } else {
        const response = await axios.post('http://localhost:5000/users', {
          name,
          email,
          phone,
          password,
          confirmPassword,
        });
        console.log(response.data);
        toast.success('Account created!');
        window.location.href = "/dashboard";
        document.body.style.overflow = 'auto';
      }
    }
  };


  const handleLoginPage = () => {
    window.location.href= "/auth/login";
  };




  return (
    <>
      <ToastContainer/>
      <div className="parent-login-container">
        <h1>Sign up with us to get 50% off
       your first choice car</h1>
        <div className="left-side">
              <img src="" alt="" />
        </div>
        <div className="ver register-container">
          <input
            type="text"
            placeholder="Enter Full Name"
            autoComplete="off"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="text"
            name=""
            id=""
            placeholder="Enter Phone Number"
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <input
            type="password"
            name=""
            id=""
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <motion.button
          className='btn signup-btn'
           whileTap={{ scale: 0.9 }}
           whileHover={{ backgroundColor: "#FD8800", color:"white" }}
           transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={handleSubmit}>Create an account</motion.button>
          <motion.button
          className='btn signin-btn'
           whileTap={{ scale: 0.9 }}
           whileHover={{ backgroundColor: "#FD8800", color:"white" }}
           transition={{ type: "spring", stiffness: 400, damping: 17 }}
          onClick={handleLoginPage}>Already have an account? - Click here</motion.button>

        </div>

      </div>



    </>
  );
}
