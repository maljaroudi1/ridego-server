/* eslint-disable react/no-unknown-property */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './hero.css'
import Calander from '../../calander/calander'
import logo from '../../../assets/logo/logo.png'
import HeroCar from '../../../assets/cars/toyota/5HERO.png'
import HeroCar2 from '../../../assets/cars/honda/HondaCivicTyperHERO.png'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';

import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import 'primeicons/primeicons.css';

//components
import Navbar from '../../navbar/navbar'
import Footer from '../../footer/footer'
import CarousalContainer from '../../cars/carousal-container'
import { Link } from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapLocationDot, faCalendarDays, faCarSide} from '@fortawesome/free-solid-svg-icons'
import { Ripple } from 'primereact/ripple'




export default function Hero()  {

        //Working steps section
        const [ref, inView] = useInView({
            triggerOnce: false,
            threshold: 0.1,


        });


        //About section
        const [ref2, inView2] = useInView({
            triggerOnce: false,
            threshold: 0.4,
        });





    const fadeInFromLeft = {
        hidden: { opacity: 0, x: -100},
        visible: { opacity: 1, x: 0},

    };

    const fadeInFromRight = {
        hidden: { opacity: 0, x: 100},
        visible: { opacity: 1, x: 0},
    }


    const fadeInFromLeftText = {
        hidden: { opacity: 0, x: -100},
        visible: { opacity: 1, x: 0, width: 1000},

    };

    return (
        <>
                <Navbar/>
                <div className="hero">
                    <div className="logo">
                            {/* <img src={logo} alt="" /> */}
                    </div>
                    <div className="hero-text-container">
                        <h1>Rent The Highest Quality <br/> Cars With Us</h1>
                        <p>
                            Whether you&apos;re seeking the utmost in automotive excellence from nearby dealerships or
                            <br/>interested in the convenience of remote ordering through our services. Just select a pick up date
                            <br/> and a return date and come anytime we are open during the selected dates.
                        </p>
                    </div>
                    <div className="hero-btn">
                    <Link activeClass="active"
                            to="target3"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-150}
                            duration={500}
                            ignoreCancelEvents={false}
                            spyThrottle={500}

                            >

                            <motion.button
                                className='book-hero-btn'
                                whileTap={{ scale: 0.9 }}

                                transition={{ type: "spring", stiffness: 400, damping: 17 }}

                            >
                            Book Your Ride
                            <Ripple/>
                            </motion.button>

                            </Link>

                            <motion.button
                                className='sell-btn'
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ backgroundColor: "#FD8800", color:"white" }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                onClick={() => window.location.href = "#"}
                            >
                            Sell Your Car
                            </motion.button>
                    </div>
                    <Calander/>
                    <div className="hero-blob">
                        <svg  id="10015.io" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
                            <path fill="#fd8800" d="M417,286Q399,332,366.5,367.5Q334,403,287,430Q240,457,202,414.5Q164,372,112.5,358Q61,344,38.5,292Q16,240,55.5,198Q95,156,128.5,130.5Q162,105,201,89Q240,73,285.5,77.5Q331,82,366,114.5Q401,147,418,193.5Q435,240,417,286Z" />
                        </svg>
                        <img src={HeroCar2} alt="" />
                    </div>



                    <div className="working-steps" id='target1'>
                        <h2>Our Working Steps</h2>









                        <div className="icon-container">
                            <motion.div className="icon map"
                                ref={ref}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                variants={fadeInFromLeft}
                                transition={{duration: 0.5}}
                            >
                                <FontAwesomeIcon icon={faMapLocationDot} />
                                <motion.h5
                                   ref={ref}
                                   initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    variants={fadeInFromLeftText}
                                    transition={{duration: 0.5}}
                                >Choose Location</motion.h5>

                                <motion.p
                                 ref={ref}
                                 initial="hidden"
                                 animate={inView ? 'visible' : 'hidden'}
                                 variants={fadeInFromLeftText}
                                 transition={{duration: 0.5}}
                                >Find the nearest Swift Ride point and book your car.</motion.p>
                            </motion.div>
                            <motion.div className="icon calander"
                                ref={ref}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                variants={fadeInFromLeft}
                                transition={{duration: 0.5}}
                            >
                                <FontAwesomeIcon icon={faCalendarDays} />

                                <motion.h5
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    variants={fadeInFromLeftText}
                                    transition={{duration: 0.5}}

                                >Pick-Up Date
                                </motion.h5>


                                 <motion.p
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    variants={fadeInFromLeftText}
                                    transition={{duration: 0.5}}
                                 >Pick the best date to rent a car for you.
                                 </motion.p>


                            </motion.div>
                            <motion.div className="icon car-icon"
                                ref={ref}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                                variants={fadeInFromLeft}
                                transition={{duration: 0.5}}
                            >
                                 <FontAwesomeIcon icon={faCarSide} />

                                 <motion.h5
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    variants={fadeInFromLeftText}
                                    transition={{duration: 0.5}}
                                 >Book Your Car
                                 </motion.h5>

                                 <motion.p
                                    ref={ref}
                                    initial="hidden"
                                    animate={inView ? 'visible' : 'hidden'}
                                    variants={fadeInFromLeftText}
                                    transition={{duration: 0.5}}
                                 >Book your nice car with ease in one single click
                                 </motion.p>
                            </motion.div>
                        </div>
                    </div>

                    <motion.div className="about-us" id='target2'

                        ref={ref2}
                        initial="hidden"
                        animate={inView2 ? 'visible' : 'hidden'}
                        variants={fadeInFromRight}
                        transition={{duration: 0.5}}


                    >
                        <img src={HeroCar} alt="" />
                        <h1>Feel the best experience with our rental deals</h1>
                        <p>
                            When it comes to hassle-free travel, we understand that every detail counts.
                            Our commitment to your comfort and convenience is reflected in every aspect of our service.
                            From the moment you make your reservation, our user-friendly booking platform ensures a seamless and efficient process.
                            Say goodbye to waiting in long queues or dealing with complicated paperwork; our streamlined approach enables you to secure your dream vehicle with ease.
                        </p>

                    </motion.div>
                </div>
                <CarousalContainer/>

                 <Footer/>


        </>
    );
}


