import { useState, useRef } from 'react';
import Calendar from 'react-calendar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faPlay } from '@fortawesome/free-solid-svg-icons'

import { motion } from "framer-motion"  
import { toast, ToastContainer } from 'react-toastify';


import carData from '../cars/carData'
import axios from 'axios';


//CSS files
import 'react-toastify/dist/ReactToastify.css';
import 'react-calendar/dist/Calendar.css';
import  './calander.css'

export default function Cale()  {



    const [notActive] = useState(1);
    const playBtn = useRef(null);
    const playBtn2 = useRef(null);
    const calenderOneRef = useRef(null);
    const calenderTwoRef = useRef(null);

    //validation
    const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
    const nameRegex = /^[A-Za-z\s\-']+$/;


     //creat car 
     const [fullName, setFullName] = useState("");
     const [email, setNewEmail] = useState("");
     const [carName, setNewCarName] = useState("");
     const [carYear, setCarYear] = useState("");
     const [carType, setCarType] = useState("");
     const [carID, setCarID] = useState('');
     const [locationCar, setTheLocation] = useState("");
     const [carPickUp, setNewCarPickUp] = useState(null);
     const [carReturn, setNewCarReturn] = useState(null);
     const [carTimePickup, setCarTimePickup] = useState("");
     const [carTimeReturn, setCarTimeReturn] = useState("");
     //handle caladner close on date click


     const onSubmitCreateCar = async () => {
        let hasErrors = false;
        if (
            fullName.trim() === '' ||
            email.trim() === ''
        ) {
            toast.error('Please fill out all required fields.');
            return;
            hasErrors = true;
        }
        if(!emailRegex.test(email)){
            toast.error('Invalid Email!')
            hasErrors = true;
        }
        if(!nameRegex.test(fullName)){
            toast.error('Invalid Name!')
            hasErrors = true;
        }
        if(locationCar.trim() === ''){
            toast.error('Please select a pickup location!')
            hasErrors = true;
        }
        if(carPickUp === null || carReturn === null){
            toast.error('Please select a pickup date and return date!')
            hasErrors = true;
        }
        if(carTimePickup.trim() === ''){
            toast.error('Please select a pickup time!')
            hasErrors = true;
        }
        if(carTimeReturn.trim() === ''){
            toast.error('Please select a return time!')
            hasErrors = true;
        }

        try {
            const response = await axios.post('http://localhost:5000/users', {
              fullName,
              email,
              carName,
              carYear,
              carType,
              carID,
              locationCar,
              carPickUp,
              carReturn,
              carTimePickup,
              carTimeReturn
            });

            if (!hasErrors) {
              console.log(response.data);
              toast.success('Car Booked, check your email!');
            }
          } catch (err) {
            console.log(err);
            toast.error('Car is already booked!');
          }

        }


        const onClickDayCalOne = () => {
            calenderOneRef.current.classList.toggle('calander-active');
        }


        const onClickDayCalTwo = () => {
            calenderTwoRef.current.classList.toggle('calander-active');
        }

        const playBtnActive1 = () => {
            playBtn.current.classList.toggle('play-btn-active');
            calenderOneRef.current.classList.toggle('calander-active');

            //deactivate cal2
            playBtn2.current.classList.remove('play-btn-active');
            calenderTwoRef.current.classList.remove('calander-active');
           
         };
         const playBtnActive2 = () => {
             playBtn2.current.classList.toggle('play-btn-active');
             calenderTwoRef.current.classList.toggle('calander-active');
                //deactivate cal1
            playBtn.current.classList.remove('play-btn-active');
            calenderOneRef.current.classList.remove('calander-active');
          };


          const [selectedDate, setSelectedDate] = useState(null);
          const [selectedDate2, setSelectedDate2] = useState(null);
          const handlePickUpChange = (date) => {

            setSelectedDate(date);
            setNewCarPickUp(date);


          };

          const handleReturnChange = (date) => {
            setSelectedDate2(date);
            setNewCarReturn(date);

          };


        

    return (

        <>          

                    <motion.button
                                className='book-btn postiton-btn'
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                onClick={onSubmitCreateCar}
                            >
                            Book Your Ride
                     </motion.button>    
                <div className="container">
                    <ToastContainer/>

                        <input type="text" placeholder='Your Full Name'
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        />
                        <input type="email" name="" id="" placeholder='Your Email'
                            className='email'
                            onChange={(e) => setNewEmail(e.target.value)}
                            required
                        />


                        <select name="car" id=""
                            className='car-input'
                            onChange={(e) => {
                                const selectedCarID = e.target.value;
                                const selectedCar = carData.find((car) => car.carID === selectedCarID);
                                setNewCarName(selectedCar.carName)
                                setCarYear(selectedCar.carYear)
                                setCarType(selectedCar.carType)
                                setCarID(selectedCar.carID)
                            }}
                            required

                        >
                            <option disabled selected>Select a car</option>
                                {carData.map((car) => (

                                        <option key={car.carID} value={car.carID}>
                                            {car.carName}
                                            {car.carYear}
                                            {car.carType}
                                        </option>
                                ))}
                        </select>

                        <select name="location" id=""
                                    onChange={(e) => setTheLocation(e.target.value)}
                                    required
                                >
                                        <option value="" disabled selected>Select pick up location</option>
                                        <option value="3500 Mavis Rd">3500 Mavis Rd, Mississauga, ON L5C 1T8</option>
                                        <option value="55 King St W">55 King St W, Toronto, ON M5H 3C2</option>
                                        <option value="215 Evans Ave">215 Evans Ave, Etobicoke, ON M8Z 1J5</option>
                                </select>
                        <line/>


                        <div className="hero-calander hero1" onClick={playBtnActive1}>
                            <div className="date-output calOneOutPut">
                            {selectedDate && (
                            <p className='output-date'>
                                Pickup Date: {selectedDate.toLocaleDateString()}
                            </p>
                            )}

                            </div>
                            <FontAwesomeIcon icon={faCalendarDays} className='calander-icon ' />
                            <h6>Pick Up Date</h6>
                            <FontAwesomeIcon icon={faPlay} className={`play-btn play1 ${notActive}`} ref={playBtn}  />
                        </div>
                        <select name="pickup-time" id="" className='pickup-time'
                                    onChange={(e) => setCarTimePickup(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>Pickup time</option>
                                    <option value="12:00 AM - Morning">12:00 AM - Morning </option>
                                    <option value="12:30 AM">12:30 AM</option>
                                    <option value="1:00 PM">1:00 PM</option>
                                    <option value="1:30 PM">1:30 PM</option>
                                    <option value="2:00 PM">2:00 PM</option>
                                    <option value="2:30 PM">2:30 PM</option>
                                    <option value="3:00 PM">3:00 PM</option>
                                    <option value="3:30 PM">3:30 PM</option>
                                    <option value="4:00 PM">4:00 PM</option>
                                    <option value="4:30 PM">4:30 PM</option>
                                    <option value="5:00 PM">5:00 PM</option>
                                    <option value="5:30 PM">5:30 PM</option>
                                    <option value="6:00 PM">6:00 PM</option>
                                    <option value="6:30 PM">6:30 PM</option>
                                    <option value="7:00 PM">7:00 PM</option>
                                    <option value="7:30 PM">7:30 PM</option>
                                    <option value="8:00 PM">8:00 PM</option>
                                    <option value="8:30 PM">8:30 PM</option>
                                    <option value="9:00 PM">9:00 PM</option>
                                    <option value="9:30 PM">9:30 PM</option>
                                    <option value="10:00 PM">10:00 PM</option>
                                    <option value="10:30 PM">10:30 PM</option>
                                    <option value="11:00 PM">11:00 PM</option>
                                    <option value="11:30 PM">11:30 PM</option>
                                    <option value="12:00 PM - Midnight">12:00 PM - Midnight</option>
                        </select>

                        <div className="hero-calander hero2"  onClick={playBtnActive2}>
                            <div className="date-output calTwoOutput">
                            {selectedDate2 && (
                            <p className='output-date'>
                                Return Date: {selectedDate2.toLocaleDateString()}
                            </p>
                            )}

                            </div>
                            <FontAwesomeIcon icon={faCalendarDays} className='calander-icon' />
                            <h6>Return Date</h6>
                            <FontAwesomeIcon icon={faPlay} className={`play-btn ${notActive}`} ref={playBtn2} />

                        </div>
                        <select name="return-time" id="" className='return-time'
                                    onChange={(e) => setCarTimeReturn(e.target.value)}
                                    required
                                >
                                    <option value="" disabled>Pickup time</option>
                                    <option value="12:00 AM - Morning">12:00 AM - Morning </option>
                                    <option value="12:30 AM">12:30 AM</option>
                                    <option value="1:00 PM">1:00 PM</option>
                                    <option value="1:30 PM">1:30 PM</option>
                                    <option value="2:00 PM">2:00 PM</option>
                                    <option value="2:30 PM">2:30 PM</option>
                                    <option value="3:00 PM">3:00 PM</option>
                                    <option value="3:30 PM">3:30 PM</option>
                                    <option value="4:00 PM">4:00 PM</option>
                                    <option value="4:30 PM">4:30 PM</option>
                                    <option value="5:00 PM">5:00 PM</option>
                                    <option value="5:30 PM">5:30 PM</option>
                                    <option value="6:00 PM">6:00 PM</option>
                                    <option value="6:30 PM">6:30 PM</option>
                                    <option value="7:00 PM">7:00 PM</option>
                                    <option value="7:30 PM">7:30 PM</option>
                                    <option value="8:00 PM">8:00 PM</option>
                                    <option value="8:30 PM">8:30 PM</option>
                                    <option value="9:00 PM">9:00 PM</option>
                                    <option value="9:30 PM">9:30 PM</option>
                                    <option value="10:00 PM">10:00 PM</option>
                                    <option value="10:30 PM">10:30 PM</option>
                                    <option value="11:00 PM">11:00 PM</option>
                                    <option value="11:30 PM">11:30 PM</option>
                                    <option value="12:00 PM - Midnight">12:00 PM - Midnight</option>
                        </select>

                        <motion.a
                        >
                             <motion.button
                                    className='book-btn'
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    onClick={onSubmitCreateCar}
                            >
                                Book Your Ride
                            </motion.button>
                        </motion.a>
                
                    </div> 

                    <div className="calOne" ref={calenderOneRef} >

                         <Calendar
                            value={carPickUp}
                            onChange={handlePickUpChange}
                            required
                            onClickDay={onClickDayCalOne}
                         />


                    </div>
                    <div className="calTwo" ref={calenderTwoRef}>
                         <Calendar
                           value={carReturn}
                           onChange={handleReturnChange}
                           required
                           onClickDay={onClickDayCalTwo}
                         />

                    </div >
                   
                    
        </>
    );
}