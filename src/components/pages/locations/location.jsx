
import './location.css';



import {  useEffect, useRef, useState } from 'react';
import NavBar from '../../navbar/navbar'
import Footer from '../../footer/footer'
import Datatable from '../../datatable/datatable'

import axios from 'axios';
//core
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';



import {GoogleMap, useLoadScript, MarkerF, InfoWindow, DirectionsService, DirectionsRenderer } from "@react-google-maps/api"
import Cookies from 'js-cookie';
export default function Locations() {

  const GoogleAPiKey = import.meta.env.VITE_GOOGLE;






  const {isLoaded, loadError } = useLoadScript({

       googleMapsApiKey: GoogleAPiKey



  });


  if (loadError) {
    return <div>Error loading Google Maps: {loadError.message}</div>;
  }
  if(!isLoaded)return <div>Loading.....</div>

    return<Map/>


}


 function Map() {







  const [notLoaded, setNotLoaded] = useState(false);
  const CarBookedCookie = Cookies.get('CarBooked');
  useEffect(() => {
    try {
      const CarBooked = JSON.parse(CarBookedCookie);
      if (CarBooked === true) {
        setNotLoaded(true);
      } else {
        setNotLoaded(false);
      }
    } catch (error) {
      console.log(error);
    }
  }, [CarBookedCookie]);

  const [markerLoad, setMarkerLoad] = useState(false);
  const [markerLoad2, setMarkerLoad2] = useState(false);
  const [markerLoad3, setMarkerLoad3] = useState(false);
  const CarLocationCookie = Cookies.get('Location');

  useEffect(() => {
    try{
      const CarLocation = JSON.parse(CarLocationCookie)

      if(CarLocation === '3500 Mavis Rd Mississauga, ON L5C 1T8'){
        setMarkerLoad(true)
        setMarkerLoad2(false)
        setMarkerLoad3(false)
      } else if(CarLocation === '55 King St W, Toronto, ON M5H 3C2'){
        setMarkerLoad2(true)
        setMarkerLoad(false)
        setMarkerLoad3(false)
      } else if(CarLocation === '215 Evans Ave, Etobicoke, ON M8Z 1J5'){
        setMarkerLoad3(true)
        setMarkerLoad2(false)
        setMarkerLoad(false)
      } else {

        setMarkerLoad(true)
        setMarkerLoad2(true)
        setMarkerLoad3(true)
      }
    }catch(error){
      console.log(error);
        setMarkerLoad(false);
        setMarkerLoad2(false);
        setMarkerLoad3(false);
    }


  }, [CarLocationCookie])



  const [map] = useState(null);
  const [currentPosition, setCurrentPosition] = useState(null);

  const [response, setResponse] = useState(null);

  const [activeMarker ] = useState(null);
  const [selectedPlace] = useState({});



  const directionsCallback = (result) => {

    if (result !== null) {
      if (result.status === "OK") {
          setResponse(result);
      } else {
        console.error(`Directions request failed due to ${result.status}`);
      }
    }
  };



  const handleLocateButtonClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          if (map) {
            map.panTo(pos); // Pan the map to the new position
          }

          setCurrentPosition(pos);
        },
        () => {
          console.error("Error: The Geolocation service failed.");
        }
      );
    } else {
      console.error("Error: Your browser doesn't support geolocation.");
    }
  };





    return(
    <>
    <NavBar/>



        <div className="grid" >
          <div className="col-12 md:col-6">
            <div className="pr-0 md:pr-8">
              <div className="mb-5 flex">
                {notLoaded ? (
                  <Datatable />
                ) : (
                  <h1>Book a Car to See your booking information here!...</h1>
                )}

              </div>
            </div>
          </div>
          {/* Use infobox */}
          <div className="col-12 md:col-6 change-width-media768 ">
            <button className="locatebtn" onClick={handleLocateButtonClick}>Locate My Position</button>
              <GoogleMap
              zoom={10}
              center={currentPosition || { lat: 43.57466208215668, lng: -79.6477375403969 }}
              mapContainerClassName='map-container laptop'
              mapContainerStyle={{width:'50%', height: '70%', position: 'absolute', marginLeft: '-0.5rem'}}
              >
              {currentPosition && <MarkerF position={currentPosition}  />}


            {markerLoad && (
                <>

                    <MarkerF position={{ lat: 43.57466208215668, lng: -79.6477375403969}}
                    title="3500 Mavis Rd, Mississauga, ON L5C 1T8"


                    />

                    <DirectionsService
                    options={{
                      destination: "3500 Mavis Rd, Mississauga, ON L5C 1T8", // Replace with your destination address
                      origin: currentPosition, // Replace with your origin address
                      travelMode: "DRIVING", // You can choose other modes like "WALKING" or "TRANSIT"

                    }}
                    callback={directionsCallback}

                  />
                  {response !== null && (
                      <DirectionsRenderer directions={response} />
                    )}
                </>
            )}
            {markerLoad2 && (
                 <>

                    <MarkerF position={{ lat: 43.6482153890042, lng: -79.38078351001448 }}
                    title="55 King St W, Toronto, ON M5H 3C2"

                    />

                    <DirectionsService
                    options={{
                      destination: "55 King St W, Toronto, ON M5H 3C2", // Replace with your destination address
                      origin: currentPosition, // Replace with your origin address
                      travelMode: "DRIVING", // You can choose other modes like "WALKING" or "TRANSIT"

                    }}
                    callback={directionsCallback}

                  />

                  {response !== null && (
                      <DirectionsRenderer directions={response} />
                    )}
                 </>
            )}
            {markerLoad3 && (
                 <>

                    <MarkerF position={{ lat: 43.616303463995976, lng: -79.51519576627747 }}
                    title="215 Evans Ave, Etobicoke, ON M8Z 1J5"
                    />

                     <DirectionsService
                    options={{
                      destination: "215 Evans Ave, Etobicoke, ON M8Z 1J5", // Replace with your destination address
                      origin: currentPosition, // Replace with your origin address
                      travelMode: "DRIVING", // You can choose other modes like "WALKING" or "TRANSIT"

                    }}
                    callback={directionsCallback}

                  />
                  {response !== null && (
                      <DirectionsRenderer directions={response} />
                    )}
                 </>

            )}
                  {activeMarker && (
                    <InfoWindow
                      style={{backgroundColor: 'white', border: '1px solid black', borderRadius: '15px', position: 'absolute', width: '11rem', height: '11rem'}}
                      disableAutoPan={true}
                    >
                      <div className="active" >
                      <h2 style={{color:"yellow"}}>{selectedPlace.title}</h2>
                      </div>
                    </InfoWindow>
                  )}



              </GoogleMap>
          </div>
        </div>




      <div className="footer-container-location" style={{marginTop:'30rem'}}>
        <Footer/>
      </div>
 
    </>
  );
}





