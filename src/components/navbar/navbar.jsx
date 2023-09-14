// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react'



import { Link } from 'react-scroll';

import './navbar.css'
import { Ripple } from 'primereact/ripple';
import PrimeReactContext from 'primereact/api';
PrimeReactContext.ripple = true;
import Portal from '../../components/pages/signin-signup/signin-signupmenu'


const Navbar = (props) => {
  const navContainerClassName = props.navContainerClassName;
  const aNavClassName = props.aNavClassName;




    return (
        <>
            <Portal/>
            <div className={`nav-container ${navContainerClassName}`}>

                        <a href="/" className={` nav home ${aNavClassName}`}>
                        Home
                        <Ripple/>
                        </a>

                        <a  href='/cars' className={`nav our-collection ${aNavClassName}`}>
                        Cars
                        <Ripple/>
                        </a>

                        <a  className={`nav our-collection ${aNavClassName}`}>
                        Locations
                        <Ripple/>
                        </a>

                        <Link activeClass="active"
                        to="target1"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-150}
                        duration={500}
                        ignoreCancelEvents={false}
                        spyThrottle={500}
                        className={` ${aNavClassName}`}
                    >
                            <a href="#" className={`nav our-services ${aNavClassName}`}>
                            Services
                            <Ripple/>
                            </a>
                    </Link>

                     <Link activeClass="active"
                        to="target2"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-200}
                        duration={700}
                        ignoreCancelEvents={false}
                        spyThrottle={500}
                        className={` ${aNavClassName}`}
                    >
                        <a href="#" className={`nav about-us ${aNavClassName}`}>
                            About us
                            <Ripple/>
                            </a>
                    </Link>




            </div>


        </>
    )
}

export default Navbar;
