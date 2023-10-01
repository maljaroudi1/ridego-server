
import './styling.css';

import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';

import {  useRef, useState } from 'react';


import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import { ProgressBar } from 'primereact/progressbar';
import { gapi } from 'gapi-script';
import Cookies from 'js-cookie';



// In your current module




export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;










const [notActive, setNotActive] = useState('');
const progressRef = useRef(null);

const handleLogin = async (e) => {
  e.preventDefault();
  if (email === '' || password === '') {
    toast.warn('Empty Fields!');
  } else if (!emailRegex.test(email)) {
    toast.error('Invalid Email!');
  } else {
    try {
      const response = await axios.post('https://vercel.app/customerinfo/customer-infos', {
        email,
        password,
        type: 'POST',
      });

      const response2 = await axios.get(`https://vercel.app/customerinfo/customer-infos?email=${email}`, {
        email
      });

      if (response.data.token) {
        toast.success('Login successful');
        setNotActive('active-progress');


          const userEmail = response2.config.email;

          const date = new Date();
          const hours = 24; // set the expiration time too 24 hours
          const settingTime = date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
          Cookies.set('isLoggedIn', 'true', { expires: new Date(settingTime)});
          Cookies.set('email', `${userEmail}`, { expires: new Date(settingTime)});



        // setTimeout(() => {
        //   window.location.href = "/"

        // }, 5000);


      } else {
        toast.error('Login unsuccessful');
        // setTimeout(() => {
        //   window.location.reload();
        // }, 3000);
      }
    } catch (error) {
      console.error(error);
      toast.error('Login failed');
      // setTimeout(() => {
      //   window.location.reload();
      // }, 3000);
    }
  }
};



  const goBack = async (e) => {
    e.preventDefault();
    window.location.href = '/';
  }











const [userNameGoogle, setGoogleUserName] = useState("");
const [userEmailGoogle, setGoogleEmail] = useState("");
const [userIDGoogle, setGoogleID] = useState("");
const GoogleAPiKey2 = import.meta.env.VITE_CLIENTID;
  // Import the Google API script
  const script = document.createElement('script');
  script.src = 'https://apis.google.com/js/platform.js';
  script.async = true;
  script.onload = () => {
    // Initialize Google API
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: GoogleAPiKey2,
      });
    });
  };
  document.head.appendChild(script);
  const handleGoogleSignIn = async () => {
    const auth2 = gapi.auth2.getAuthInstance();




    auth2.signIn().then((googleUser) => {
      const userPicture = googleUser.getBasicProfile().getImageUrl();
      const userName = googleUser.getBasicProfile().getName();
      const userEmail = googleUser.getBasicProfile().getEmail();

      setGoogleUserName(googleUser.getBasicProfile().getName())
      setGoogleEmail(googleUser.getBasicProfile().getEmail())
      setGoogleID( googleUser.getBasicProfile().getId())

      const userPictureElement = document.getElementById('userIMG');
      const userNameElement = document.getElementById('userName');
      const userEmailElement = document.getElementById('userEmail');

      // Update the content of the div elements
      userPictureElement.src = userPicture;
      userNameElement.textContent = `Profile: ${userName}`;
      userEmailElement.textContent = `User Email: ${userEmail}`;
    });


    try{
      const response = await axios.post('https://car-rental-rentgo.vercel.app/google-users-info', {
        userNameGoogle,
        userEmailGoogle,
        userIDGoogle,

      });
      console.log(response);
    }catch(err){
      console.log(err);
    }

  };




  return (
    <>



      <div className="google-user-info">
          <img id='userIMG'src="" alt="" />
          <h2 id='userName'></h2>
          <h3 id='userEmail'></h3>

      </div>

      <div>
      <ProgressBar mode="indeterminate" style={{ height: '6px' }} className={`inactive ${notActive}`} ref={progressRef}></ProgressBar>
        <div className="flex">
          <div className="surface-section w-full md:w-6 p-6 md:p-8">
            <div className="mb-5">
              <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
              <span className="text-600 font-medium mr-2">Do not have an account?</span>
              <a className="font-medium no-underline text-blue-500 cursor-pointer" href='/auth/register'>Create today!</a>
            </div>
            <div>
            <ToastContainer/>

              {/*Email*/}
              <label htmlFor="email2" className="block text-900 font-medium mb-2">Email</label>
              <input id="email2"
                type="text"
                placeholder="Email address"
                className="p-inputtext p-component w-full mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />


              {/*Password*/}
              <label htmlFor="password2" className="block text-900 font-medium mb-2">Password</label>
              <input id="password2"
                type="password"
                placeholder="Password"
                className="p-inputtext p-component w-full mb-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="flex align-items-center justify-content-between mb-6">
                <div className="flex align-items-center">
                  <div id="rememberme2" className="p-checkbox p-component mr-2">
                    <div className="p-hidden-accessible">
                      <input type="checkbox" />
                    </div>
                    <div className="p-checkbox-box"></div>
                  </div>
                  <label htmlFor="rememberme2">Remember me</label>
                </div>
                <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
              </div>
              <button aria-label="Sign In" className="p-button p-component w-full"
                onClick={handleLogin}
              >
                <span className="p-button-icon p-c p-button-icon-left pi pi-user"></span>
                <span className="p-button-label p-c">Sign In</span>
                <span role="presentation" className="p-ink" style={{ height: '578.2px', width: '578.2px' }}></span>
              </button>


              <button aria-label="Sign In" className="p-button p-component w-full"
                onClick={handleGoogleSignIn}
              >
                <span className="p-button-icon p-c p-button-icon-left pi pi-google"></span>
                <span className="p-button-label p-c" >Sign in with Google</span>

                <span role="presentation" className="p-ink" style={{ height: '578.2px', width: '578.2px' }}></span>
              </button>


              <button aria-label="Go back" className="p-button p-component w-full"
                onClick={goBack}
              >
                <span className="p-button-icon p-c p-button-icon-left pi pi-home"></span>
                <span className="p-button-label p-c">Go back</span>
                <span role="presentation" className="p-ink" style={{ height: '578.2px', width: '578.2px' }}></span>
              </button>

            </div>
          </div>

        </div>

      </div>


    </>
  );
}





