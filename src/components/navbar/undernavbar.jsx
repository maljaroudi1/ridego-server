// eslint-disable-next-line no-unused-vars
import React from 'react'

import './navbar.css'

import { SelectButton } from 'primereact/selectbutton';
import { useState } from 'react';
import { AutoComplete } from 'primereact/autocomplete';
//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";     
    

        
//core
import "primereact/resources/primereact.min.css";                                       
        
export default function underNavbar() {
    const [sortCars, setSortCars] = useState(0);
  
    const sortByCarType = [
        {name: "All", sortCars: 0},
        {name: "Sport", sortCars: 1},
        {name: "SUV", sortCars: 2},
        {name: "Sedan", sortCars: 3}
    ];
  
    const [search, setSearch] = useState("");
    const  [car, setCar] = useState([]);
    return (
        <>

            <div className="nav-bar-under">
                <AutoComplete field="name" value={search} suggestions={car} completeMethod={search} onChange={(e) => setSearch(e.value)} placeholder='Search' />



            <SelectButton
            value={sortCars}
            onChange={(e) => setSortCars(e.value.sortCars)}
            optionLabel="name"
            options={sortByCarType}
            
            className="select-btn "
        
             />
              
            </div>
        </>

    );
}



