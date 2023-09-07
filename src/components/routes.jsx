
import Register from './pages/signin-signup/register'
import Login from './pages/signin-signup/login'
import Carpage from './pages/carpage'
import Hero from './pages/hero/hero'
 import { BrowserRouter, Routes, Route} from 'react-router-dom';



export default function routes() {
    return(




                <BrowserRouter>
                    <Routes>
                        <Route exact path='/home' element={<Hero/>} ></Route>
                        <Route exact path='/register' element={<Register/>} ></Route>
                        <Route exact path='/auth/login' element={<Login/>} ></Route>
                        <Route exact path='/cars' element={<Carpage/>} ></Route>
                    </Routes>
            </BrowserRouter>


    );
}



