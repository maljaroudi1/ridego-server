
import './car.css'
import Cars from './car'
import Cookies from 'js-cookie'

//logo
import logo from '../../assets/logo/logo.png'
import carIMG from '../../assets/cars/toyota/g86.png'
import carIMG2 from '../../assets/cars/toyota/5HERO.png'
import formStyling from '../../assets/arrow.png'
import formStyling2 from '../../assets/wave.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons'
import {motion} from 'framer-motion'
import { useState, useRef } from 'react';

//Prime-react

import { AutoComplete } from 'primereact/autocomplete';
import { Ripple } from 'primereact/ripple';

PrimeReactContext.ripple = true;




//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";
//core
import "primereact/resources/primereact.min.css";
import "primereact/resources/primereact.min.css";
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';


import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import carData from './carData'

// import '../navbar/navbar.css'

import { SelectButton } from 'primereact/selectbutton';

import axios from 'axios'



export default function  carContainer()   {


               //creat car
               const [fullName, setNewCarFullName] = useState("");
               const [phone, setNewCarPhone] = useState("");
               const [email, setNewCarEmail] = useState("");
               const [carName, setCarName] = useState("");
               const [carType, setCarType] = useState('');
               const [carYear, setCarYear] = useState('');
               const [carID, setTheCarID] = useState("");
               const [locationCar, setLocationCar] = useState("");
               const [carPickUp, setNewCarPickUp] = useState(new Date());
               const [carReturn, setNewCarReturn] = useState(new Date());
               const [availableCars, setAvailableCars] = useState([]);

               const emailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
               const nameRegex = /^[A-Za-z\s\-']+$/;
               const onSubmitCreateCar = async () => {
                   if (
                       fullName.trim() === '' ||
                       phone.trim() === '' ||
                       email.trim() === '' ||
                       carPickUp === '' ||
                       carReturn === ''
                   )
                   {
                       toast.error('Please fill out all required fields.');
                   }
                    if(!emailRegex.test(email)){
                        toast.error('Please enter a valid email!.');
                    }

                    if(!nameRegex.test(fullName)){
                        toast.error('Please enter a valid name!.');
                        return;
                    }

                   try{
                        const response = await axios.post('http://localhost:5000/customerinfo/customer-cars', {
                            fullName,
                            email,
                            phone,
                            carName,
                            carYear,
                            carType,
                            carID,
                            locationCar,
                            carPickUp,
                            carReturn,

                        })
                        const theCarID = response.data.carID;
                        const theLocation = response.data.locationCar;
                        const thePickUpDate = response.data.carPickUp;
                        const theReturnDate = (response.data.carReturn);
                        const TheReturnDateCookie = new Date(response.data.carReturn);


                        const TheReturnCookie = Math.floor(TheReturnDateCookie.getTime() / 1000); // Convert milliseconds to seconds
                        console.log(theReturnDate)
                        console.log(TheReturnCookie)

                        Cookies.set('CarID', JSON.stringify(theCarID), { expires: theReturnDate });
                        Cookies.set('Location', JSON.stringify(theLocation), { expires: theReturnDate });
                        Cookies.set('PickupDate', JSON.stringify(thePickUpDate), { expires: theReturnDate });
                        Cookies.set('ReturnDate', JSON.stringify(theReturnDate), { expires: theReturnDate });

                         // EmailJS implementation would be around here, where the customer would receive an email on form submisson,
                         // would return customer pickupdate/returndate using backend and all booking information
                        toast.success('Car Booked, check your email!');
                        // setTimeout(() => {
                        //     window.location.href = '/booking/successful';
                        //   }, 5000);


                   }
                   catch(err){
                        console.log(err)
                        toast.error(`error:${err}`);
                   }




                }



                 //Close Form

                       const [toggleForm] = useState(1);
                       const carFormRef = useRef(null);
                       const backgroundRef = useRef(null);

                       function handleCloseForm(){
                           carFormRef.current.classList.toggle('car-form-active');
                           backgroundRef.current.classList.toggle('background-active');
                           document.body.style.overflowY = 'hidden';
                       }
                       function closeForm() {
                        carFormRef.current.classList.toggle('car-form-active');
                        backgroundRef.current.classList.toggle('background-active');
                        document.body.style.overflowY = 'auto';
                       }




    //navbar


  // Map through the filteredCars array to render each car
                const [search, setSearch] = useState("");
                const  [car, setCar] = useState([]);
                const sortByCarType = [
                    { carType: "All", value: null },
                    { carType: 'Sport', value: ' Sport'},
                    { carType: 'Sedan', value: ' Sedan' },
                    { carType: 'SUV', value: ' SUV' }
                  ];

                 const [sortCars, setSortCars] = useState(sortByCarType[0].value);

    return(



        <div className='root'>


                     <AutoComplete field="name"
                     className='p-ripple'
                     value={search}
                     suggestions={car}
                     completeMethod={search}
                     onChange={(e) => setSearch(e.value)} placeholder='Search'
                     />





                    <div className="nav-bar-under ">

                    <SelectButton

                    value={sortCars}
                    onChange={(e) => setSortCars(e.value)}
                    optionLabel="carType"
                    options={sortByCarType}
                    className="select-btn"
                    />



                    </div>


                    <div className="car-container">



                            <div className="align-center car-collection">
                                <h1 className='main-title'>Our Collection</h1>

                            </div>



                            <div className="sports-cars">
                            {carData.filter((car) => {
                                return search.toLocaleLowerCase() === ''
                                ? car
                                : car.carName.toLocaleLowerCase().includes(search)
                                ? car
                                : car.carType.toLocaleLowerCase().includes(search)
                            }).filter((car) => {
                                return (sortCars === null || car.carType === sortCars)
                            }).map((car, index) => (
                                   <Cars
                                    key={index}
                                    carImg={car.carImg}
                                    carName={car.carName}
                                    carPriceDay={car.carPriceDay}
                                    carPriceMonth={car.carPriceMonth}
                                    carSpedometer={car.carSpedometer}
                                    carTransmisson={car.carTransmisson}
                                    carGas={car.carGas}
                                    carLine={car.carLine}
                                    carModel={car.carModel}
                                    handleEvent={handleCloseForm}
                                    classForSvg={car.classForSvg}
                                    carYear={car.carYear}
                                    carType={car.carType}
                                    buttonName={car.buttonName}
                                   />




                            ))}


                            </div>

                    </div>

                    <div className="form-container">

                        <div className={`create-car-form ${toggleForm}`} ref={carFormRef} id='carform'>

                                <div className="img-container">
                                    <h1>Ready to Book? Just fill out this form!</h1>
                                    <img src={formStyling} alt=""  className='img-styling imgOne'/>
                                    <img src={formStyling2} alt="" className='img-styling imgTwo'/>
                                    <img src={carIMG} alt="" className='img1'/>
                                    <img src={carIMG2} alt="" className='img2'/>
                                </div>




                            <ToastContainer />
                            <div className="center-items">
                                <h1>Book Your Dream Car Now!</h1>
                                <input type="text" placeholder='Type Your Full Name'
                                onChange={(e) => setNewCarFullName(e.target.value)}
                                required
                                />
                                <input type="email" name="" id="" placeholder='Type Your Email'
                                    onChange={(e) => setNewCarEmail(e.target.value)}
                                    required
                                />
                                <input type="phone" name="" id="" placeholder='Type Your Phone'
                                    onChange={(e) => setNewCarPhone(e.target.value)}
                                    required
                                />
                                <select name="" id=""
                                    required
                                    onChange={(e) =>  {
                                        const selectedCarID = e.target.value;
                                        const selectedCar = carData.find((car) => car.carID === selectedCarID);
                                        setTheCarID(selectedCar.carID);
                                        setCarName(selectedCar.carName);
                                        setCarYear(selectedCar.carYear);
                                        setCarType(selectedCar.carType);
                                        setAvailableCars(selectedCar.Available)
                                    }}

                                >
                                    <option value="" disabled selected>Select a car</option>
                                    {carData.map((car) => (
                                        <option key={car.carID} value={car.carID}>
                                            {car.carName}
                                            {car.carYear}
                                            {car.carType}
                                        </option>
                                    ))}

                                 </select>

                                <select name="" id=""
                                    onChange={(e) => setLocationCar(e.target.value)}
                                    required
                                >
                                        <option value="" disabled selected>Select pick up location</option>
                                        <option value="3500 Mavis Rd">3500 Mavis Rd, Mississauga, ON L5C 1T8</option>
                                        <option value="55 King St W">55 King St W, Toronto, ON M5H 3C2</option>
                                        <option value="215 Evans Ave">215 Evans Ave, Etobicoke, ON M8Z 1J5</option>
                                </select>


                                <label htmlFor="date" className='label label1'>Pick Up Date</label>
                                <input type="date" name="" id=""
                                    placeholder='Pick Up Date'
                                    onChange={(e) => setNewCarPickUp(e.target.value)}
                                    required

                                />
                                <label htmlFor="date" className='label label2'>Return Date</label>
                                <input type="date" name="" id=""
                                    placeholder='Return Date'
                                    onChange={(e) => setNewCarReturn(e.target.value)}
                                    required
                                />


                                <motion.button onClick={onSubmitCreateCar} className='submit'
                                type="submit"
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ backgroundColor: "#FD8800", color:"white" }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >Submit</motion.button>

                                 <motion.button onClick={closeForm}
                                className='submit close-btn'
                                whileTap={{ scale: 0.9 }}
                                whileHover={{ backgroundColor: "red", color:"white" }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                ><FontAwesomeIcon icon={faCircleArrowLeft} />Go back</motion.button>

                            </div>
                        </div>
                    </div>

                    <div className={`background-overlay ${toggleForm}`} ref={backgroundRef}>

                    </div>

        </div>
    );
}