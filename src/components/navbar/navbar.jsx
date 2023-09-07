// eslint-disable-next-line no-unused-vars
import React from 'react'

import { Link } from 'react-scroll';
import {motion} from 'framer-motion'
import './navbar.css'




const Navbar = (props) => {
  const navContainerClassName = props.navContainerClassName;
  const aNavClassName = props.aNavClassName;

    const handleLoginPage = () => {
      window.location.href= "/auth/login";
    };
    const handleRegisterPage = () => {
        window.location.href = "/register";
    };




    // function applyStyles() {

    //     if(window.location.href === 'https://car-rental-git-main-maljaroudi2000.vercel.app/auth/login' ||
    //        window.location.href === 'https://car-rental-git-main-maljaroudi2000.vercel.app/register')
    //        {
    //             document.body.style.overflow = 'hidden';
    //        }    else if(window.location.href !== 'https://car-rental-git-main-maljaroudi2000.vercel.app/auth/login' ||
    //                     window.location.href !== 'https://car-rental-git-main-maljaroudi2000.vercel.app/register')
    //         {
    //             document.body.style.overflowX = 'hidden';
    //         }



    // }

    // applyStyles();


    return (
        <>




            <div className={`nav-container ${navContainerClassName}`}>
                        <a href="/home" className={` nav home ${aNavClassName}`}>
                        Home
                        </a>

                        <a  href='/cars' className={`nav our-collection ${aNavClassName}`}>
                        Cars
                        </a>

                        <a  className={`nav our-collection ${aNavClassName}`}>
                        Locations
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
                        <a href="#" className={`nav about-us ${aNavClassName}`}>About us</a>
                    </Link>

                    <div className="button-container">
                        <motion.button
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        onClick={handleLoginPage}>Sign in</motion.button>

                        <motion.button
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        onClick={handleRegisterPage}>Sign up</motion.button>
                    </div>


            </div>


        </>
    )
}

export default Navbar;

