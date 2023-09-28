import './dashboard.css'
import { useState, useRef } from 'react';
import { Avatar } from 'primereact/avatar';
import logo from '../../../assets/logo/logo.png'
import Navbar from '../../navbar/navbar';

import { Ripple } from 'primereact/ripple';
import PrimeReactContext from 'primereact/api';
PrimeReactContext.ripple = true;
import Cars from '../../cars/car'
import carData from '../../cars/carData'
import Cookies from 'js-cookie';

import './media.css'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';

export default function Dashboard() {



   const anchorRef = useRef(null);
   const anchorRef2 = useRef(null);
   const anchorRef3 = useRef(null);


    const [selectedButton, setSelected ] = useState('profile');



    function setdisplay(buttonName) {
        setSelected(buttonName);

    }
    let email = (Cookies.get('email'));
    const [username, domain] = email.split('@');
    const [firstletter, domail] = email[0].toUpperCase();



    const [showSideBar, setShowSideBar] = useState('');





    let PickupTime;
    let ReturnTime;
    let Location;
    let CarBooked;

let filteredCars = [];
try{


     CarBooked = JSON.parse(Cookies.get('CarBooked'));



    const theLocationCookie = Cookies.get('Location');
    const thePickupCookie = JSON.parse(Cookies.get('PickupDate'));
    const theReturnCookie = JSON.parse(Cookies.get('ReturnDate'));
    const newPickup = new Date(thePickupCookie);
    const newReturn = new Date(theReturnCookie);
    const pickupDateFormat = newPickup.toLocaleString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true, // Use 12-hour format
        });

    const returnDateFormat = newReturn.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true, // Use 12-hour format
    });

    const theCookie = Cookies.get('CarID');
    let parseId = 0;
    PickupTime = pickupDateFormat;
    ReturnTime = returnDateFormat;
    Location = JSON.parse(theLocationCookie)
    parseId = JSON.parse(theCookie)
    filteredCars = carData.filter((car) => car.carID === parseId);
}catch(error){
    console.log(error)
}


    return (
        <>  



            <Navbar/>

            <div style={{ height: '100vh' }}>
                <div className="min-h-screen flex relative lg:static surface-ground">
                    <div id="app-sidebar" className={`h-full lg:h-auto  lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 border-right-1 surface-border w-full md:w-auto app-media  ${showSideBar === 'clicked' ? 'show-sidebar' : ''}`}>
                        <div className="flex h-full">
                            <div className="flex flex-column h-full  flex-shrink-0 select-none" style={{ backgroundColor: '#212121'}}>
                                <div className="overflow-y-auto mt-3">
                                    <ul className="list-none py-3 pl-2 pr-0 m-0">



                                    {/**Herer */}

                                    {/**Add bg-indigo-500 to show button selection, remove to move to next button */}
                                    <li className="mb-2">

                                        <a className={`p-ripple flex align-items-center cursor-pointer py-3 pl-0 pr-2 justify-content-center hover-lighter text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors ${selectedButton === 'profile' ? 'grey-light' : ''}`}
                                        style={{ borderTopLeftRadius: '30px', borderBottomLeftRadius: '30px' }}
                                        ref={anchorRef}
                                        onClick={() => setdisplay('profile')}
                                        >
                                        <Ripple/>
                                        <i className="pi  pi-cog text-xl"></i>
                                        <span role="presentation" className="p-ink" style={{ height: '64px', width: '64px' }}></span>
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className={`p-ripple flex align-items-center cursor-pointer py-3 pl-0 pr-2 justify-content-center hover-lighter text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors ${selectedButton === 'booking' ? 'grey-light' : ''}`}                            style={{ borderTopLeftRadius: '30px', borderBottomLeftRadius: '30px' }}
                                        ref={anchorRef2}
                                        onClick={() => setdisplay('booking')}

                                        >
                                                <Ripple/>
                                        <i className="pi pi-book text-xl"></i>
                                        <span role="presentation" className="p-ink" style={{ height: '64px', width: '64px', top: '-9.20001px', left: '4.60001px' }}></span>
                                        </a>
                                    </li>
                                    <li className="mb-2">
                                        <a className={`p-ripple flex align-items-center cursor-pointer py-3 pl-0 pr-2 justify-content-center hover-lighter text-indigo-100 hover:text-indigo-50 transition-duration-150 transition-colors ${selectedButton === 'location' ? 'grey-light' : ''}`}                             style={{ borderTopLeftRadius: '30px', borderBottomLeftRadius: '30px' }}
                                        ref={anchorRef3}
                                        onClick={() => setdisplay('location')}
                                        >
                                                <Ripple/>
                                        <i className="pi pi-map-marker text-xl"></i>
                                        <span role="presentation" className="p-ink" style={{ height: '64px', width: '64px', top: '-17.2px', left: '8.60001px' }}></span>
                                        </a>
                                    </li>


                                    </ul>
                                </div>

                            <div className="mt-auto">
                                <hr className="mb-3 mx-2 border-top-1 border-none border-indigo-300" />
                                <a href="/" style={{textDecoration: 'none'}} className="p-ripple m-3 flex align-items-center cursor-pointer p-2 justify-content-center hover-bg-indigo-600 border-round text-300 hover-text-0 transition-duration-150 transition-colors">
                                    {/**Dispaly user.picture here ? Goolgle : user.picture : NotGoogle ? Default.picture */}
                                    <Avatar label={`${firstletter}`} size="xlarge" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} />

                                <span role="presentation" className="p-ink" style={{ height: '40px', width: '40px', top: '-7.79999px', left: '14.6px' }}></span>
                                </a>
                            </div>
                            </div>
                            <div className="flex flex-column  p-4 overflow-y-auto flex-shrink-0 flex-grow-1 md:flex-grow-0" style={{ width: '300px', backgroundColor:'#282E38' }}>
                            <div className="justify-content-end mb-3 flex lg:hidden">
                                <button icon="pi pi-times" className="p-ripple cursor-pointer text-white appearance-none bg-transparent border-none inline-flex justify-content-center align-items-center border-circle hover-bg-indigo-600 transition-duration-150 transition-colors" style={{ width: '2rem', height: '2rem' }}
                                onClick={() => setShowSideBar(showSideBar === 'clicked' ? '' : 'clicked')}
                                >
                                <i className="pi pi-times text-xl text-indigo-100"></i>
                                <span role="presentation" className="p-ink" style={{ height: '0px', width: '0px' }}></span>
                                </button>
                            </div>


                            {/**Herer */}
                            <div className="border-round flex-auto">

                                {/**remove hidden to display, add hidden to hide */}
                                <div className={`p-3 font-medium text-2xl text-white ${selectedButton !== 'profile' ? 'hidden' : ''}`}>
                                    <h3>Profile Information</h3>
                                </div>

                                <div className={`p-3 font-medium text-2xl text-white ${selectedButton !== 'booking' ? 'hidden' : ''}`}>
                                    <h3>Booking Information</h3>
                                </div>
                                <div className={`p-3 font-medium text-2xl text-white ${selectedButton !== 'location' ? 'hidden' : ''}`}>
                                    <h3>Location</h3>
                                </div>
                                <div className={`p-3 font-medium text-2xl text-white ${selectedButton !== 'contact' ? 'hidden' : ''}`}>Contact</div>
                                <div className={`p-3 font-medium text-2xl text-white ${selectedButton !== 'date' ? 'hidden' : ''}`}>Dates</div>
                                <div className={`${selectedButton !== 'settings' ? 'hidden' : ''}`}>


                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="min-h-screen flex flex-column relative flex-auto">
                        <div className="flex justify-content-between lg:justify-content-start align-items-center px-5 surface-section border-bottom-1 surface-border relative lg:static" style={{ height: '60px' }}>
                            <div className="flex">
                                {/**Animate bar */}
                            <a className={`p-ripple cursor-pointer block lg:hidden text-700 mr-3 ${showSideBar === 'clicked' ? 'show-sidebar' : ''}`}
                                onClick={() => setShowSideBar(showSideBar === 'clicked' ? '' : 'clicked')}
                            >
                                <i className="pi  pi-plus text-2xl " style={{color:'black'}}></i>
                                <span role="presentation" className="p-ink" style={{ height: '0px', width: '0px' }}></span>
                            </a>
                            </div>


                            <ul className="list-none p-0 m-0 hidden lg:flex lg:align-items-center select-none lg:flex-row lg:w-full surface-section border-1 lg:border-none surface-border right-0 top-100 z-1 shadow-2 lg:shadow-none absolute lg:static">



                            {/**Display username and login picturem which has a condotional for google login or default picture for non-google */}
                            <li className="border-top-1 surface-border lg:border-top-none lg:ml-auto">
                                <a className="p-ripple flex p-3 lg:px-3 lg:py-2 align-items-center hover-surface-100 font-medium border-round cursor-pointer transition-duration-150 transition-colors">
                                <div  className="mr-3 lg:mr-0" alt="avatar-f-1" style={{ width: '32px', height: '32px' }} >Username:  {`${username}`}</div>
                                <div className="block lg:hidden">
                                    <div className="text-900 font-medium">Josephine Lillard</div>
                                    <span className="text-600 font-medium text-sm">Marketing Specialist</span>
                                </div>
                                <span role="presentation" className="p-ink" style={{ height: '64px', width: '64px' }}></span>
                                </a>
                            </li>
                            </ul>
                        </div>
                        <div className="p-5 flex flex-column flex-auto">
                            <div className="border-2 border-dashed border-round surface-border surface-section flex-auto">
                                <div className={`condotional-render ${selectedButton !== 'profile' ? 'hidden' : ''}`}>
                                <div className="px-6 py-5">
                                    <div className="surface-card p-4 shadow-2 border-round">
                                        <div className="font-medium text-3xl text-900 mb-3">Profile</div>
                                        <div className="text-500 mb-5">Here you will find your profile information</div>
                                        <ul className="list-none p-0 m-0 border-top-1 border-300">
                                        <li className="flex align-items-center py-3 px-2 flex-wrap surface-ground">
                                            <div className="text-500 w-full md:w-2 font-medium">Email</div>
                                            <div className="text-900 w-full md:w-10">
                                                {`${email}`}
                                            </div>
                                        </li>
                                        {filteredCars.map((filteredCar) => (
                                        <li className="flex align-items-center py-3 px-2 flex-wrap" key={filteredCar.id }>
                                            <div className="text-500 w-full md:w-2 font-medium">Current Bookings</div>
                                            <div className="text-900 w-full md:w-10 line-height-3">
                                            {CarBooked ? filteredCar.carName : ''}
                                            </div>
                                        </li>
                                        ))}



                                        </ul>
                                    </div>
                                </div>

                                </div>
                                <div className={`condotional-render ${selectedButton !== 'booking' ? 'hidden' : ''}`}>
                                <div className="  md:px-6 lg:px-8 media-car">


                                    <div>
                                        <div className="grid">


                                        {filteredCars.length > 0 ? (
                                        filteredCars.map((filteredCar) => (
                                            <div key={filteredCar.carID} className="col-12 md:col-6 xl:col-3 p-3">
                                            <div className="surface-card shadow-2 border-round p-3" style={{ borderRadius: '6px' }}>
                                                <img src={filteredCar.carImg} alt={filteredCar.carName} className="mb-3 w-full" />
                                                <div className="flex justify-content-between align-items-start">
                                                <div>
                                                    <div className="text-xl font-medium text-900 mb-2">{filteredCar.carName}</div>
                                                    <p className="mt-0 mb-3 text-600">{filteredCar.carPriceDay}</p>
                                                    <p className="mt-0 mb-3 text-600">{filteredCar.carPriceMonth}</p>
                                                    <p>Transmisson: {filteredCar.carTransmisson}</p>
                                                    <p>Car Type: {filteredCar.carType}</p>
                                                    <p>Location: {`${Location}`}</p>
                                                </div>

                                                </div>
                                                <ul className="list-none m-0 p-0">
                                                <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                                                    <span className="text-600 font-medium text-sm">Pickup Date</span>
                                                    <span className="text-900 font-medium text-sm">{`${PickupTime}`}</span>
                                                </li>
                                                <li className="px-0 py-2 flex justify-content-between align-items-center border-bottom-1 surface-border">
                                                    <span className="text-600 font-medium text-sm">Return Date</span>
                                                    <span className="text-900 font-medium text-sm">{`${ReturnTime}`}</span>
                                                </li>
                                                {/* Add more list items as needed */}
                                                </ul>
                                            </div>
                                            </div>
                                        ))
                                        ) : (
                                        <p>No cars matching the selected Car ID.</p>
                                        )}


                                        </div>
                                    </div>
                                </div>


                                </div>
                                <div className={`condotional-render ${selectedButton !== 'location' ? 'hidden' : ''}`}>
                                    Location
                                </div>
                                <div className={`condotional-render ${selectedButton !== 'settings' ? 'hidden' : ''}`}>
                                    Settings
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </>

    )
}


