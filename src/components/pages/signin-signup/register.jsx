import React from 'react';
import { useState, useRef} from 'react';
import './styling.css';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { Password } from 'primereact/password';

//primereact
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import { ProgressBar } from 'primereact/progressbar';



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
      const checkUser = await axios.get(`https://car-rental-rentgo.vercel.app/customerinfo/customer-infos?email=${email}`);
      if (checkUser.data.exists) {
        toast.error('User Already Exists!');
      } else {
        const response = await axios.post('https://car-rental-rentgo.vercel.app/customerinfo/customer-info', {
          name,
          email,
          phone,
          password,
          confirmPassword,
        });
        setNotActive('active-progress');
        console.log(response.data);
        toast.success('Account created!');
        document.body.style.overflow = 'auto';
      }
    }
  };


  const handleLoginPage = () => {
    window.location.href= "/auth/login";
  };


  const [notActive, setNotActive] = useState('');
  const progressRef = useRef(null);


  return (
    <>
      <ToastContainer/>
      {/* <div className="parent-login-container">
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

      </div> */}


      <div className="surface-ground px-4 py-8 md:px-6 lg:px-8 flex align-items-center justify-content-center white">
      <ProgressBar mode="indeterminate" style={{ height: '6px' }} className={`inactive ${notActive}`} ref={progressRef}></ProgressBar>
        <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
          <div className="text-center mb-5">

            <div className="text-900 text-3xl font-medium mb-3">Register here</div>
            <span className="text-600 font-medium line-height-3">Already have an account?</span>
            <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer" href='/auth/login'>Sign in here!</a>
          </div>
          <div>

            <label htmlFor="name" className="block text-900 font-medium mb-2">Name</label>
            <input id="name" type="text" placeholder="Name" className="p-inputtext p-component w-full mb-3"
            onChange={(e) => setName(e.target.value)}
            />


            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <input id="email" type="text" placeholder="Email address" className="p-inputtext p-component w-full mb-3"
                onChange={(e) => setEmail(e.target.value)}
            />


            <label htmlFor="phone" className="block text-900 font-medium mb-2">Phone</label>
            <input id="phone" type="text" placeholder="Phone" className="p-inputtext p-component w-full mb-3"
              onChange={(e) => setPhone(e.target.value)}
            />

            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            <Password  toggleMask placeholder='Password'
             onChange={(e) => setPassword(e.target.value)}
            />



            <label htmlFor="confirm-password" className="block text-900 font-medium mb-2">Confirm Password</label>
            <Password  toggleMask placeholder='Confirm password'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="flex align-items-center justify-content-between mb-6">
              <div className="flex align-items-center">

              </div>
            </div>
            <button aria-label="Sign In" className="p-button p-component w-full" onClick={handleSubmit}>
              <span className="p-button-icon p-c p-button-icon-left pi pi-user"></span>
              <span className="p-button-label p-c">Register</span>
              <span role="presentation" className="p-ink" style={{ height: "610.2px", width: "610.2px" }}></span>
            </button>
          </div>
        </div>
      </div>


    </>
  );
}
