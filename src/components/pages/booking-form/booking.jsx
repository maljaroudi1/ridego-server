import './booking.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import logo from '../../../assets/logo/logo.png'
import Cookies from "js-cookie"
import { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { InputMask } from "primereact/inputmask";
import { Dropdown } from 'primereact/dropdown';
import carData from '../../cars/carData'


import { Ripple } from 'primereact/ripple';
import {  PrimeReactContext } from 'primereact/api';
PrimeReactContext.ripple = true;

import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
export default function Booking()  {

    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [carName, setCarName] = useState("");
    const [carType, setCarType] = useState('');
    const [carYear, setCarYear] = useState('');
    const [carID, setTheCarID] = useState("");
    const [carPickUp, setCarPickup] = useState(new Date());
    const [carReturn, setCarReturn] = useState(new Date());
    const [selectedLocation, setSelectedLocation] = useState('');
    const locations = [
        { id: 1, name: '3500 Mavis Rd, Mississauga, ON L5C 1T8' },
        { id: 2, name: '55 King St W, Toronto, ON M5H 3C2' },
        { id: 3, name: '215 Evans Ave, Etobicoke, ON M8Z 1J5' },
      ];











      const goBack = () =>  {
        window.location.href = '/cars';

      }

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
               setTimeout(() => {
                   window.location.href = '/';
                 }, 5000);


          }
          catch(err){
               console.log(err)
               toast.error(`error:${err}`);
          }




       }

    return (
        <>
          <ToastContainer/>
            <div className=" px-4 py-8 md:px-6 lg:px-8">
                <div className="center-logo" style={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                     <img src={logo} alt="" style={{width: '25rem'}} />
                </div>

                <div className="text-900 font-medium text-900 text-xl mb-3">Booking form</div>
                <div className="surface-card p-4 shadow-2 border-round p-fluid">
                    <div className="grid formgrid p-fluid">
                    <div className="field mb-4 col-12 md:col-6">
                        <label htmlFor="Name" className="font-medium text-900">
                         Full Name
                        </label>
                        <input id="name" type="text" className="p-inputtext p-component" placeholder='Full name'
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        />
                    </div>
                    <div className="field mb-4 col-12 md:col-6">
                        <label htmlFor="Email" className="font-medium text-900">
                        Email
                        </label>
                        <input id="email" type="email" className="p-inputtext p-component" placeholder='Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="field mb-4 col-12 md:col-6">
                        <label htmlFor="Phone" className="font-medium text-900">
                        Phone
                        </label>
                        <InputMask id="phone" mask="(999) 999-9999" placeholder="(999) 999-9999"
                         value={phone}
                         onChange={(e) => setPhone(e.target.value)}
                        ></InputMask>
                    </div>

                    <div className="field mb-4 col-12 md:col-6">
                        <label htmlFor="pickup" className="font-medium text-900">
                        Select a car
                        </label>
                        <Dropdown

                        placeholder='Select a car'
                        onChange={(e) => {
                            const selectedCarID = e.target.value;
                            const selectedCar = carData.find((car) => car.carID === selectedCarID);
                            if (selectedCar) {
                            setTheCarID(selectedCar.carID);
                            setCarName(selectedCar.carName);
                            setCarYear(selectedCar.carYear);
                            setCarType(selectedCar.carType);
                            setAvailableCars(selectedCar.Available);
                            }
                        }}
                        value={carID}
                        options={carData.map((car) => ({
                            label: `${car.carName} - ${car.carType} - ${car.carYear}`,
                            value: car.carID,
                        }))}
                        />






                    </div>

                    <div className="field mb-4 col-12 md:col-6">
                        <label htmlFor="pickup" className="font-medium text-900">
                        Pickup Date
                        </label>
                        <Calendar value={carPickUp} onChange={(e) => setCarPickup(e.value)} showTime hourFormat="12" optionLabel='carName'/>
                    </div>

                    <div className="field mb-4 col-12 md:col-6">
                        <label htmlFor="return" className="font-medium text-900">
                        Return Date
                        </label>
                        <Calendar value={carReturn} onChange={(e) => setCarReturn(e.value)} showTime hourFormat="12" />
                    </div>

                    <div className="field mb-4 col-12 md:col-6">
                        <label htmlFor="return" className="font-medium text-900">
                        Select a location
                        </label>
                        <Dropdown
                            placeholder='Select a location'
                            value={selectedLocation}
                            options={locations}
                            optionLabel='name'
                             onChange={(e) =>  setSelectedLocation(e.target.value)}

                         />
                    </div>






                    </div>



                    <button
                    className="p-button p-component w-auto"
                    onClick={goBack}

                    >
                         <Ripple/>
                        <span className="p-button-icon p-c p-button-icon-left pi pi-arrow-left"></span>
                        <span className="p-button-label p-c">Go back</span>
                        <span
                            role="presentation"
                            className="p-ink"
                            style={{ height: '172.719px', width: '172.719px' }}
                        ></span>
                    </button>






                    <button
                    className="p-button p-component w-auto"
                    onClick={onSubmitCreateCar}
                    style={{marginLeft: '1rem'}}
                    >
                        <Ripple/>
                        <span className="p-button-icon p-c p-button-icon-left pi pi-check-circle"></span>
                        <span className="p-button-label p-c">Submit</span>
                        <span
                            role="presentation"
                            className="p-ink"
                            style={{ height: '172.719px', width: '172.719px' }}
                        ></span>
                    </button>

                </div>
            </div>


        </>
    );
}


