
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGauge, faGear, faFillDrip, faCar} from '@fortawesome/free-solid-svg-icons'
import {motion} from 'framer-motion'
import { Link } from 'react-scroll'; 

//Seprate imports














import './car.css'
const Cars = (props) => {
    const carImg = props.carImg;
    const carName = props.carName;
    const carPriceDay = props.carPriceDay;
    const carPriceMonth = props.carPriceMonth;
    const carSpedometer = props.carSpedometer;
    const carTransmisson = props.carTransmisson;
    const carGas = props.carGas;
    const carLine = props.carLine;
    const carousalLine = props.carousalLine;
    const buttonName = props.buttonName;
    const handleEvent = props.handleEvent;
    const carYear= props.carYear;
    const carType = props.carType;
    const carID = props.carID;
    const classForInfo = props.classForInfo;
    const classForSvg = props.classForSvg;




    return (
        <>

              <div className="car" id={`${carID}`} type={`${carType}`}>
                    <div className="top-half"></div>
                    <div className="overlay"></div>
                    <img src={carImg}alt="" />
                
                   
                    <h4 className="title">{carName}</h4>
                    <div className="day-month-payments">
                        <h5 className="day"><span>{carPriceDay}</span></h5>
                        <h5 className="month">{carPriceMonth}</h5>
                    </div>
                    <line className={`${carLine}`}></line>
                    {carousalLine}
                    <div className={`info-container ${classForInfo}`}>
                                <div className="info">
                                    <FontAwesomeIcon icon={faGauge} className={`${classForSvg}`} />
                                    <h6><span>Kilometeres:</span>&nbsp; {carSpedometer}</h6>
                                </div>
                            
                                <div className="info">
                                    <FontAwesomeIcon icon={faGear} className={`${classForSvg}`} />
                                    <h6><span>Transmisson:</span>&nbsp; {carTransmisson}</h6>
                                </div>
                            
                                <div className="info">
                                    <FontAwesomeIcon icon={faFillDrip} className={`${classForSvg}`}/>
                                    <h6><span>Fuel:</span>&nbsp; {carGas}</h6>
                                </div>
                                <div className="info">
                                    <FontAwesomeIcon icon={faCar} className={`${classForSvg}`}/>
                                    <h6><span>Year:</span>&nbsp; {carYear}</h6>
                                </div>
                        
                    </div>
                    <Link
                        activeClass="active" // Class name for active link
                        to="carform" // Element ID to scroll to
                        spy={true} // Enable scrolling spy
                        smooth={true} // Enable smooth scrolling
                        offset={-70} // Offset to adjust scroll position
                        duration={500} // Duration of the scroll animation
                        className="scroll-button"
                        >
                        <motion.button
                                    className='rent-now'
                                    whileTap={{ scale: 0.9 }}
                                    whileHover={{backgroundColor: "white", color: 'rgb(255, 42, 42)', border: '2px solid rgb(255, 42, 42)' }}
                                    transition={{ duration: 0.4, ease: "easeInOut", type: 'spring' }}
                                    onClick={handleEvent}
                        >{buttonName}</motion.button>
                    </Link>
              </div>



       
        </>
    );
}

export default Cars;


