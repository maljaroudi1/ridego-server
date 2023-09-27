import './footer.css'
import logo from '../../assets/logo/logo-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';

export default function  footer()   {
    return(
        <>


            <div style={{width: '100%', paddingTop: '20rem'}}>
            <div className="grid grid-nogutter  px-4 py-4 md:px-6 lg:px-8 border-top-1 surface-border footer-color">
                <div className="col-12 lg:col-6 lg:border-right-1 surface-border">
                <img src={logo} className="w-9rem mx-auto lg:mx-0" alt="Peak logo" />
                <span className="text-900 block mt-4 mr-3"> RentGo is a car renting and selling company that offers a comprehensive and convenient solution for individuals
                         seeking to access vehicles for temporary use or to make a purchase.</span>
                <span className="text-500 block mt-4">© 2023, RideGO All rights reserved Mohammed.</span>
                </div>
                <div className="col-12 md:col-6 lg:col-3 mt-4 lg:mt-0 lg:pl-4 flex flex-column">
                <span className="text-900 text-xl font-medium block">Company</span>
                <ul className="list-none p-0">
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">About RideGO</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Car rentals</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Careers</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Environmental Initiatives</a></li>
                </ul>
                </div>
                <div className="col-12 lg:col-3 md:col-6 flex mt-4 lg:mt-0 lg:pl-4 flex-column">
                <span className="text-900 text-xl font-medium block">Terms & Conditions</span>
                <ul className="list-none p-0">
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">FAQ</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Contact</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Support</a></li>
                    <li><a tabIndex="0" className="text-600 hover:text-900 transition-duration-150 cursor-pointer mt-3 block">Privacy policy</a></li>

                </ul>
                </div>
            </div>
            <div className="surface-900 py-6 lg:py-4 md:px-6 lg:px-8 flex flex-column lg:flex-row justify-content-between align-items-center">
                <ul className="list-none p-0 mb-0 flex flex-column md:flex-row flex-order-1 lg:flex-order-0 mt-4 lg:mt-0">
                <li className="mr-4 mt-3 lg:mt-0"><a tabIndex="0" className="cursor-pointer text-0">Car Dealer Relations</a></li>
                <li className="mr-4 mt-3 lg:mt-0"><a tabIndex="0" className="cursor-pointer text-0">Data Privacy</a></li>
                <li className="mr-4 mt-3 lg:mt-0"><a tabIndex="0" className="cursor-pointer text-0">Terms of Service</a></li>
                <li className="mr-4 mt-3 lg:mt-0"><a tabIndex="0" className="cursor-pointer text-0">Legal Information</a></li>
                </ul>
                <div className="flex align-items-center flex-order-0 lg:flex-order-1">
                <a tabIndex="0" className="cursor-pointer mr-3 lg:mt-0 block">
                    <i className="pi pi-facebook surface-section p-1 text-sm border-circle text-900"></i>
                </a>
                <a tabIndex="0" className="cursor-pointer mr-3 lg:mt-0 block">
                    <i className="pi pi-twitter surface-section p-1 text-sm border-circle text-900"></i>
                </a>
                <a tabIndex="0" className="cursor-pointer mr-3 lg:mt-0 block">
                    <i className="pi pi-youtube surface-section p-1 text-sm border-circle text-900"></i>
                </a>
                <a tabIndex="0" className="cursor-pointer lg:mt-0 block">
                    <i className="pi pi-google surface-section p-1 text-sm border-circle text-900"></i>
                </a>
                </div>
            </div>
            </div>










        </>
    );
}