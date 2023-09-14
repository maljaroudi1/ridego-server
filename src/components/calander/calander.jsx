import { useState } from 'react';


import { motion } from "framer-motion"  
import { toast, ToastContainer } from 'react-toastify';


import { Calendar as Calanders } from 'primereact/calendar';

import { Ripple } from 'primereact/ripple';
import PrimeReactContext from 'primereact/api';
PrimeReactContext.ripple = true;

import carData from '../cars/carData'
import axios from 'axios';


//CSS files
import 'react-toastify/dist/ReactToastify.css';
import 'react-calendar/dist/Calendar.css';
import  './calander.css'

export default function Cale()  {





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
            // hasErrors = true;
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

        if(carTimePickup === ''){
            toast.error('Please select a pickup time!')
            hasErrors = true;
        }
        if(carTimeReturn === ''){
            toast.error('Please select a return time!')
            hasErrors = true;
        }

        try {
            const getCarIDResponse = await axios.get(`http://localhost:5000/customerinfo/customer-cars/?email=${email}&carID=${carID}`);
              const carExists = getCarIDResponse.data.exists;
              console.log(carTimePickup)
              console.log(carTimeReturn)

            if(!carExists){

                toast.error("Car booked error");
                toast.error("You can only book one car at a time!");
            } else {
                const response = await axios.post('http://localhost:5000/customerinfo/customer-cars', {
                    fullName,
                    email,
                    carName,
                    carYear,
                    carType,
                    carID,
                    locationCar,
                    carTimePickup,
                    carTimeReturn
                  });

                  if (!hasErrors) {
                    console.log(response.data);
                    toast.success('Car Booked, check your email!');
                  }
                }
            } catch (err) {
                console.log(err);
                toast.error('An error occurred while checking the car availability.');
            }


        }




    return (

        <>          

                    <motion.button
                                className='book-btn postiton-btn p-ripple'
                                whileTap={{ scale: 0.9 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                onClick={onSubmitCreateCar}
                            >
                            Book Your Ride
                            <Ripple />
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
                                    className='location'
                                    onChange={(e) => setTheLocation(e.target.value)}
                                    required
                                >
                                        <option value="" disabled selected>Select pick up location</option>
                                        <option value="3500 Mavis Rd">3500 Mavis Rd, Mississauga, ON L5C 1T8</option>
                                        <option value="55 King St W">55 King St W, Toronto, ON M5H 3C2</option>
                                        <option value="215 Evans Ave">215 Evans Ave, Etobicoke, ON M8Z 1J5</option>
                                </select>
                        <line/>




                        <Calanders value={carTimePickup} onChange={(e) => setCarTimePickup(e.value)}  showTime hourFormat="12" placeholder='Pickup time' showButtonBar />


                        <Calanders value={carTimeReturn} onChange={(e) => setCarTimeReturn(e.value)}  showTime hourFormat="12" placeholder='Return time' className='returntime' showButtonBar  />


                        <motion.a
                        >
                             <motion.button
                                    className='book-btn p-ripple'
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    onClick={onSubmitCreateCar}
                            >
                                Book Your Ride
                                <Ripple />
                            </motion.button>
                        </motion.a>
                
                    </div> 





                   
                    
        </>
    );
}