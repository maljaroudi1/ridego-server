import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import carData from '../cars/carData';
import { useState, useEffect } from 'react';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import 'primeicons/primeicons.css';
import Cookies from 'js-cookie';

export default function Datatable() {

      try{
          const CarID = JSON.parse(Cookies.get('CarID'))
          const PickupDate = JSON.parse(Cookies.get('PickupDate'))
          const ReturnDate = JSON.parse(Cookies.get('ReturnDate'))
          const Location  = JSON.parse(Cookies.get('Location'))
          const newPickupDate = new Date(PickupDate);
          const newReturnDate = new Date(ReturnDate);



        const pickupDateFormat = newPickupDate.toLocaleString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true, // Use 12-hour format
        });

        const returnDateFormat = newReturnDate.toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            hour12: true, // Use 12-hour format
        });



        const formattedData = carData.filter((car) => car.carID === CarID)
        .map((car) => ({
            carID: car.carID,
            carName: car.carName,
            carIMG: car.carImg,
            CarPickup: pickupDateFormat,
            CarReturn: returnDateFormat,
            CarLocation: Location,
          }));

        const [products] = useState(formattedData);
        const [ifLoaded, setIfLoaded] = useState(false)

        useEffect(() => {
          // Set ifLoaded based on the condition when the component mounts
          const carBookedData = Cookies.get('CarBooked');

          if (carBookedData) {
            try {
              const CarBooked = JSON.parse(carBookedData);
              console.log(CarBooked)
              if (CarBooked === true) {
                setIfLoaded(true);
              } else {
                setIfLoaded(false);
              }
            } catch (error) {
              setIfLoaded(false);
              console.error('Error parsing CarBooked:', error);
            }
          } else {
            // CarBooked cookie is not present, set ifLoaded to false
            setIfLoaded(false);
          }
        }, []);


        return (
          <>
          <div className='card mobile-adjust ' style={{marginRight: '-6rem', marginLeft: '-1rem'}} >
            {ifLoaded ? (

              <DataTable value={products} tableStyle={{ minWidth: '50rem' }}>
                  {/* from cookie session */}
                  <Column field="carID" header="ID"/>
                  <Column
                  style={{width: '15%'}}
                  body={(rowData) => (
                      <img src={rowData.carIMG} style={{width : '100%', transform: 'translate3d(-1.5rem, -0.2rem, 1rem)'}}/>
                  )} header="Image"/>
                  <Column field="carName" header="Car"/>
                  <Column field="CarPickup" header="Pickup Date/Time"/>
                  <Column field="CarReturn" header="Return Date/Time"/>
                  <Column field="CarLocation" header="Pickup/Return Location"/>
              </DataTable>
            ) : (
              <h1 style={{position: 'absolute', zIndex: '33'}}>You havent booked a car, book a car to display your booking information here!</h1>
            )}



          </div>
          </>
        );
      }catch(error){
        console.log(error)
      }



}
