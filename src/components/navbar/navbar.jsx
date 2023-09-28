// eslint-disable-next-line no-unused-vars
import React, { useRef, useState, useEffect } from 'react'

import logo from '../../assets/logo/logo-white.png'
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import 'primeicons/primeicons.css';
import { Link } from 'react-scroll';

import './navbar.css'


import { Ripple } from 'primereact/ripple';
import PrimeReactContext from 'primereact/api';
PrimeReactContext.ripple = true;
import Portal from '../../components/pages/signin-signup/signin-signupmenu'
import Cookies from 'js-cookie';






const Navbar = (props) => {
  const navContainerClassName = props.navContainerClassName;
  const aNavClassName = props.aNavClassName;

    const [notHiddenBtn, setNotHiddenBtn] = useState(true);

    const email = Cookies.get('email')
    const isLoggedIn = JSON.parse(Cookies.get('isLoggedIn'));
    const handleSignOut = () => {
        Cookies.set('isLoggedIn', 'false');
        Cookies.set('email', 'null');
        window.location.href = '/';
    }

  //For the menu
  const [ notHidden, setNotHidden] = useState(true);
  function menuOn() {
    setNotHidden(!notHidden);
    setNotHiddenBtn(!notHiddenBtn);
}


    return (
        <>
            <Portal/>


            <div>
                <div className="surface-0 py-8">
                    <div className="bg-bluegray-900 text-gray-100 p-3 flex justify-content-between lg:justify-content-center align-items-center flex-wrap padding-bottom" style={{marginTop: '-8.5rem', marginLeft: '-1rem', marginRight: '-1rem'}}>
                        <div className="font-bold mr-8">🔥 Hot Deals!</div>
                         {/* Make not hidden 43*/}
                        <div className="align-items-center hidden lg:flex">
                        <span className="line-height-3">Libero voluptatum atque exercitationem praesentium provident odit.</span>
                        </div>
                        <div className="flex align-items-center ml-2 mr-8">
                        <a className="text-white" href="/">
                            <span className="underline font-bold">Learn More</span>
                        </a>
                        </div>

                    </div>
                </div>

                <div className="bg-gray-900 py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static border-bottom-1 border-gray-800" style={{ minHeight: '84px', marginTop: '-9.5rem', marginLeft: '-1rem', marginRight: '-1rem' }}>
                    <img src={logo} alt="CarRental" height="40" className="mr-0 lg:mr-6 logo-white" />

                    <a className="p-ripple cursor-pointer block lg:hidden text-gray-400 hover-menu"
                        onClick={menuOn}
                    >
                        <i className={`pi pi-bars text-4xl  ${notHiddenBtn ? '' : 'hidden'}`} ></i>
                        <i className={`pi pi-times text-4xl  ${notHiddenBtn ? 'hidden' : ''}`}></i>
                        <span role="presentation" className="p-ink" style={{ height: '33.6px', width: '33.6px', top: '4.00002px', left: '0.600037px' }}></span>
                    </a>
                     {/* Make not hidden  2*/}

                    <div className={`align-items-center flex-grow-1 justify-content-between lg:flex absolute lg:static w-full bg-gray-900 left-0 top-100 z-1 shadow-2 lg:shadow-none border-1 lg:border-none border-gray-800 ${notHidden ? 'hidden' : "" }`}>




                        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row" >
                            <li>
                            <a href='/' className="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full" style={{textDecoration: 'none'}}>
                                <Ripple/>
                                <i className="pi pi-home mr-2"></i>
                                <span >Home</span>
                                <span role="presentation" className="p-ink" style={{ height: '100px', width: '100px' }}></span>
                            </a>
                            </li>
                            <li>
                            <a href='/cars' className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full" style={{textDecoration: 'none'}}>
                                <Ripple/>
                                <i className="pi pi-users mr-2"></i>
                                <span>Cars</span>
                                <span role="presentation" className="p-ink" style={{ height: '165.012px', width: '165.012px', top: '-38.3px', left: '488.7px' }}></span>
                            </a>

                            </li>
                            <li>
                            <a href="locations" className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full" style={{textDecoration: 'none'}}>
                                <Ripple/>
                                <i className="pi pi-map-marker mr-2"></i>
                                <span>Location</span>
                                <span role="presentation" className="p-ink" style={{ height: '120.225px', width: '120.225px', top: '-25.4px', left: '280.8px' }}></span>
                            </a>
                            </li>
                                <li>
                                        <a href="/faq" style={{textDecoration: 'none'}} className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                            <Ripple/>
                                            <i className="pi pi-question-circle mr-2"></i>
                                            <span>FAQ</span>
                                            <span role="presentation" className="p-ink" style={{ height: '91.0625px', width: '91.0625px', top: '-28.5px', left: '488.9px' }}></span>
                                        </a>
                                </li>
                            <li>


                            <Link activeClass="active"
                            to="target2"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-150}
                            duration={500}
                            ignoreCancelEvents={false}
                            spyThrottle={500}
                            className={` ${aNavClassName}`}
                            >
                            <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-gray-400 hover:text-white hover:bg-gray-800 font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full">
                                <Ripple/>
                                <i className="pi pi-chart-line mr-2"></i>
                                <span>About us</span>
                                <span role="presentation" className="p-ink" style={{ height: '91.0625px', width: '91.0625px', top: '-28.5px', left: '488.9px' }}></span>
                            </a>
                            </Link>
                            </li>
                        </ul>
                        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
                            <li className="flex-order-2 lg:flex-order-0">

                            </li>
                            <li className="border-top-1 border-gray-800 lg:border-top-none">
                                <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center  font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full hover:bg-gray-800">


                                    <div className="block lg:hidden ">
                                        <div className="text-white font-medium " style={{textAlign: 'center'}}>
                                            <a href={isLoggedIn ? '/dashboard' : '/auth/login'} style={{textDecoration: 'none', color:'white'}}>
                                                {isLoggedIn ? 'Dashboard' : 'Sign in'}
                                            </a>
                                        </div>
                                        <span className="text-gray-400 font-medium text-sm">{isLoggedIn ? email  : ''}</span>
                                    </div>

                                    <span role="presentation" className="p-ink" style={{ height: '64px', width: '64px', top: '2.60004px', left: '415.2px' }}></span>
                                </a>

                            </li>
                            <li className="border-top-1 border-gray-800 lg:border-top-none">
                                    <a className="p-ripple flex px-6 p-3 lg:px-3 lg:py-2 align-items-center  font-medium border-round cursor-pointer transition-colors transition-duration-150 w-full hover:bg-gray-800">
                                        <div className="block lg:hidden ">
                                            <div className="text-white font-medium " style={{textAlign: 'center'}}>
                                                <a href={isLoggedIn ? '' : '/auth/register'} style={{textDecoration: 'none', color:'white'}}
                                                    onClick={isLoggedIn ? handleSignOut : () => { }}
                                                >
                                                    {isLoggedIn ? 'Sign out' : 'Sign up'}
                                                </a>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                        </ul>
                    </div>
                </div>
            </div>






        </>
    )
}

export default Navbar;
