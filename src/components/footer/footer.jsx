import './footer.css'
import logo from '../../assets/logo/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'


export default function  footer()   {
    return(
        <>
            <div className="footer-container">
                <div className="logo-info-container">
                    <img src={logo} alt="" />
                    <p>
                        RentGo is a car renting and selling company that offers a comprehensive and convenient solution for individuals
                         seeking to access vehicles for temporary use or make a purchase.
                    </p>
                </div>
                <div className="our-links">
                    <h5>Our Links</h5>
                    <a href="" className='nav'>Home</a>
                    <a href="" className='nav'>About Us</a>
                    <a href="" className='nav'>Cars</a>
                </div>
                <div className="other-links">
                    <h5>Other Links</h5>
                    <a href="" className='nav'>FAQ</a>
                    <a href="" className='nav'>Contact Us</a>
                    <a href="" className='nav'>Support</a>
                    <a href="" className='nav'>Privacy policy</a>
                    <a href="" className='nav'>Terms & Conditions</a>
                </div>
                <div className="circle call-now">
                    <h5>Call Now</h5>
                    <FontAwesomeIcon icon={faPhone} className='icon1'/>
                    <p className='phone-number'>+1-905-873-9665</p>
                </div>
                <div className="circle mail">
                    <h5>Mail</h5>
                    <FontAwesomeIcon icon={faEnvelope} className='icon2' />
                    <p className='email'>contactus@rentgo.com</p>
                </div>
                <div className="copy-right">
                    <p>	&copy;RentGo All Rights Reserved 2023</p>
                </div>
            </div>


        </>
    );
}