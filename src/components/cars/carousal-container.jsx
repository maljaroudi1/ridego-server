'use client'

import './car.css';


import Cars from './car';
import BMWM4Coupe from '../../assets/cars/bmw//BmwM4Coupe.png';
import BmwZRoadster from '../../assets/cars/bmw/bmwZroadster.png';
import BMW8Series from '../../assets/cars/bmw/bmw8series.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Carousal() {
    const handleLinkClick = () => {
        window.location.href = '/cars'
      };

  return (
    <>


      <h1 className="carousal-title">Explore Our Top Deals</h1>

        <div className="parent-container">
            <Carousel className='carousal-container'
                infiniteLoop={true}
                emulateTouch={true}
                autoFocus={true}
                autoPlay={true}
                showArrows={true}
                showIndicators={true}
                transitionTime={400}
                showThumbs={false}
                centerMode={true}
                width={2500}
                
            
            >

                        <div className="grouped-cars ">
                            <Cars 
                            carImg={BMWM4Coupe}
                            carName="BMW M4 Coupe" 
                            carPriceDay="$100/Day" 
                            carPriceMonth="$1900/Month" 
                            carSpedometer="11k"
                            carTransmisson="Auto"
                            carGas="Petrol"
                            carousalLine={<line className='carousal-contain-line'></line>}
                            handleEvent={handleLinkClick}
                            buttonName="View our collection"
                            carYear="2023"
                            />

                            <Cars 
                        
                            carImg={BmwZRoadster} 
                            carName="BMW Z-Roadster" 
                            carPriceDay="$120/Day" 
                            carPriceMonth="$2100/Month" 
                            carSpedometer="12k"
                            carTransmisson="Auto"
                            carGas="Petrol"
                            carousalLine={<line className='carousal-contain-line'></line>}
                            handleEvent={handleLinkClick}
                            buttonName="View our collection"
                            carYear="2023"
                            />


                            <Cars 
                            
                            carImg={BMW8Series} 
                            carName="BMW 8 Series" 
                            carPriceDay="$150/Day" 
                            carPriceMonth="$2500/Month" 
                            carSpedometer="15k"
                            carTransmisson="Auto"
                            carGas="Petrol"
                            carousalLine={<line className='carousal-contain-line'></line>}
                            handleEvent={handleLinkClick}
                            buttonName="View our collection"
                            carYear="2023"
                            />

                        </div>

                        <div className="grouped-cars ">
                            <Cars 
                            carImg={BMWM4Coupe}
                            carName="BMW M4 Coupe" 
                            carPriceDay="$100/Day" 
                            carPriceMonth="$1900/Month" 
                            carSpedometer="11k"
                            carTransmisson="Auto"
                            carGas="Petrol"
                            carousalLine={<line className='carousal-contain-line'></line>}
                            handleEvent={handleLinkClick}
                            buttonName="View our collection"
                            carYear="2023"
                            />

                            <Cars 
                        
                            carImg={BmwZRoadster} 
                            carName="BMW Z-Roadster" 
                            carPriceDay="$120/Day" 
                            carPriceMonth="$2100/Month" 
                            carSpedometer="12k"
                            carTransmisson="Auto"
                            carGas="Petrol"
                            carousalLine={<line className='carousal-contain-line'></line>}
                            handleEvent={handleLinkClick}
                            buttonName="View our collection"
                            carYear="2023"
                            />


                            <Cars 
                            
                            carImg={BMW8Series} 
                            carName="BMW 8 Series" 
                            carPriceDay="$150/Day" 
                            carPriceMonth="$2500/Month" 
                            carSpedometer="15k"
                            carTransmisson="Auto"
                            carGas="Petrol"
                            carousalLine={<line className='carousal-contain-line'></line>}
                            handleEvent={handleLinkClick}
                            buttonName="View our collection"
                            carYear="2023"
                            />

                        </div>
                    
                        <div className="grouped-cars ">
                            <Cars 
                            carImg={BMWM4Coupe}
                            carName="BMW M4 Coupe" 
                            carPriceDay="$100/Day" 
                            carPriceMonth="$1900/Month" 
                            carSpedometer="11k"
                            carTransmisson="Auto"
                            carGas="Petrol"
                            carousalLine={<line className='carousal-contain-line'></line>}
                            handleEvent={handleLinkClick}
                            buttonName="View our collection"
                            carYear="2023"
                            />

                            <Cars 
                        
                            carImg={BmwZRoadster} 
                            carName="BMW Z-Roadster" 
                            carPriceDay="$120/Day" 
                            carPriceMonth="$2100/Month" 
                            carSpedometer="12k"
                            carTransmisson="Auto"
                            carGas="Petrol"
                            carousalLine={<line className='carousal-contain-line'></line>}
                            handleEvent={handleLinkClick}
                            buttonName="View our collection"
                            carYear="2023"
                            />


                            <Cars 
                            
                            carImg={BMW8Series} 
                            carName="BMW 8 Series" 
                            carPriceDay="$150/Day" 
                            carPriceMonth="$2500/Month" 
                            carSpedometer="15k"
                            carTransmisson="Auto"
                            carGas="Petrol"
                            carousalLine={<line className='carousal-contain-line'></line>}
                            handleEvent={handleLinkClick}
                            buttonName="View our collection"
                            carYear="2023"
                            />

                        </div>

                    
            </Carousel>     
        </div>
    
           
        </>
    );
}