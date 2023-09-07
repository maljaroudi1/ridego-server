
import NavBar from '../navbar/navbar';
import CarContainer from '../cars/carcontain';
import Footer from '../footer/footer';


function App() {
  return (




    <div className="cars">

             <NavBar
            navContainerClassName="custom-navbar"
            aNavClassName='custom-nav'
            />
             <CarContainer/>
            <div className="footer-car-container">
                <Footer/>
            </div>
    </div>


  );
}


export default App;
