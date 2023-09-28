import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import '../../navbar/navbar.css';
import { useState, useRef } from 'react';
import Cookies from 'js-cookie';

const Portal = (props) => {
  const Signup = props.Signup;
  const Profile = props.Profile;



  const menuSignInRef = useRef(null);
  const buttonRef = useRef(null);


 // set a cookie To expire 24 hours

let isLoggedIn;

try{
  isLoggedIn = JSON.parse(Cookies.get('isLoggedIn'));
}catch(error){
  console.log(error)
}

const email2  = Cookies.get('email');


const handleSignOut2 = () => {
    Cookies.set('isLoggedIn', 'false');
    Cookies.set('email', 'null');
    window.location.href = '/';
}


const items2 = [
    {
      label: isLoggedIn ? email2 : 'Sign-in',
      icon: isLoggedIn ? 'pi pi-fw pi-user' : 'pi pi-fw pi-sign-in',
      url: isLoggedIn ? '/dashboard ' : '/auth/login',
    },
    {
      label: isLoggedIn ? 'Dashboard' : 'Sign-up',
      icon: isLoggedIn ? 'pi pi-fw pi-list' : 'pi pi-fw pi-user-edit',
      url: isLoggedIn ? '/dashboard' : '/auth/register',
    },
    {
      label: isLoggedIn ? 'Sign-out' : '',
      icon: isLoggedIn ? 'pi pi-fw pi-sign-out' : '',
      command: isLoggedIn ? handleSignOut2 : null,
    },
];



  return (
    <>
      <div>
        <Menu popup model={items2} ref={menuSignInRef} />
        <Button
          id={isLoggedIn ? 'profile' : 'sign-up'}
          label={isLoggedIn ? 'Profile' : 'Sign up'}
          icon="pi pi-chevron-down"
          className={`custom-btn ${isLoggedIn ? 'profile' : 'sign-up'}`}
          ref={buttonRef}
          onClick={(event) => menuSignInRef.current.toggle(event)}
        />
      </div>
    </>
  );
};

export default Portal;
