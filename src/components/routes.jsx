
import Register from './pages/signin-signup/register'
import Login from './pages/signin-signup/login'
import Carpage from './pages/carpage'
import Hero from './pages/hero/hero'
import Booking from './pages/booking-form/booking'
import Dashboard from '../components/pages/dashboard/dashboard'
 import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Locations from '../components/pages/locations/location'
import Faq from '../components/pages/faq/faq'
import Datatable from '../components/datatable/datatable'
import Cookies from 'js-cookie'
export default function routes() {


    const isLoggedIn = Cookies.get('isLoggedIn');

    return(




                <BrowserRouter>
                    <Routes>
                        {/* <Route exact path='/' element={<Hero/>} ></Route> */}


                        <Route exact path='/' element={<Hero/>} ></Route>
                        {/* <Route
                        exact path="/" element={ isLoggedIn ? (
                            <Hero/>
                                     ) : (
                            <Navigate to="/auth/login" />
                        )
                        }
                    /> */}

                        <Route exact path='/locations' element={<Locations/>} ></Route>
                        <Route exact path='/booking' element={<Booking/>} ></Route>
                        <Route exact path='/auth/register' element={<Register/>} ></Route>
                        <Route exact path='/auth/login' element={<Login/>} ></Route>
                        <Route exact path='/faq' element={<Faq/>} ></Route>
                        <Route exact path= '/dashboard'
                        element={isLoggedIn ? (
                            <Dashboard/>
                                     ) : (
                            <Navigate to="/auth/login" />

                        )}></Route>
                        <Route exact path='/cars' element={<Carpage/>} ></Route>
                    </Routes>
            </BrowserRouter>


    );
}



