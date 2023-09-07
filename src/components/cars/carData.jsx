import './car.css'



const carData = [

    {

        carID: "1",
        carImg: "/src/assets/cars/bmw/bmwZroadster.png",
        carName: "BMW Z-Roadster",
        carPriceDay: "$350/Day",
        carPriceMonth: "$10500/Month",
        carSpedometer: "10k",
        carTransmisson: "Auto",
        carGas: "Petrol",
        carLine: 'car-contain-line',
        classForSvg: "custom-svg",
        carYear: " 2023",
        carType: " Sport",
        buttonName: 'Rent now'
    },
    {

        carID: "2",
        carImg: "/src/assets/cars/bmw/BmwM4Coupe.png",
        carName: "BMW M4 Coupe",
        carPriceDay: "$550/Day",
        carPriceMonth: "$16500/Month",
        carSpedometer: "10k",
        carTransmisson: "Auto",
        carGas: "Petrol",
        carLine: 'car-contain-line',
        classForSvg: "custom-svg",
        carYear: " 2023",
        carType: " Sport",
        buttonName: 'Rent now'
    },
    {

        carID: "3",
        carImg: "/src/assets/cars/honda/hondaCRVClosed.png",
        carName: "Honda Crv",
        carPriceDay: "$150/Day",
        carPriceMonth: "$4500/Month",
        carSpedometer: "10k",
        carTransmisson: "Auto",
        carGas: "Petrol",
        carLine: 'car-contain-line',
        classForSvg: "custom-svg",
        carYear: " 2023",
        carType: " SUV",
        buttonName: 'Rent now'
    },
    {

        carID: "4",
        carImg: "/src/assets/cars/toyota/ToyotaCamry.png",
        carName: "Toyota Camry",
        carPriceDay: "$190/Day",
        carPriceMonth: "$5700/Month",
        carSpedometer: "10k",
        carTransmisson: "Auto",
        carGas: "Petrol",
        carLine: 'car-contain-line',
        carModel: "2023",
        classForSvg: "custom-svg",
        carYear: " 2023",
        carType: " Sedan",
        buttonName: 'Rent now'
    },
    {

        carID: "5",
        carImg: "/src/assets/cars/bmw/BmwM4Coupe.png",
        carName: "BMW M4 Coupe",
        carPriceDay: "$550/Day",
        carPriceMonth: "$16500/Month",
        carSpedometer: "10k",
        carTransmisson: "Auto",
        carGas: "Petrol",
        carLine: 'car-contain-line',
        carModel: "2023",
        classForSvg: "custom-svg",
        carYear: " 2023",
        carType: " Sport",
        buttonName: 'Rent now'
    },

    {

        carID: "6",
        carImg: "/src/assets/cars/honda/hondaCRVClosed.png",
        carName: "Honda CRV",
        carPriceDay: "$150/Day",
        carPriceMonth: "$4500/Month",
        carSpedometer: "10k",
        carTransmisson: "Auto",
        carGas: "Petrol",
        carLine: 'car-contain-line',
        carModel: "2023",
        classForSvg: "custom-svg",
        carYear: " 2023",
        carType: " SUV",
        buttonName: 'Rent now'
    },
    {

        carID: "7",
        carImg: "/src/assets/cars/toyota/ToyotaCamry.png",
        carName: "Toyota Camry",
        carPriceDay: "$190/Day",
        carPriceMonth: "$5700/Month",
        carSpedometer: "10k",
        carTransmisson: "Auto",
        carGas: "Petrol",
        carLine: 'car-contain-line',
        carModel: "2023",
        classForSvg: "custom-svg",
        carYear: " 2023",
        carType: " Sedan",
        buttonName: 'Rent now'
    },
    {

        carID: "8",
        carImg: "/src/assets/cars/honda/hondaHrvClosed.png",
        carName: "Honda HRV",
        carPriceDay: "$150/Day",
        carPriceMonth: "$4500/Month",
        carSpedometer: "10k",
        carTransmisson: "Auto",
        carGas: "Petrol",
        carLine: 'car-contain-line',
        carModel: "2023",
        classForSvg: "custom-svg",
        carYear: " 2023",
        carType: " SUV",
        buttonName: 'Rent now'
    },
    {

        carID: "9",
        carImg: "/src/assets/cars/honda/hondaCivicSi.png",
        carName: "Honda Civic Si",
        carPriceDay: "$190/Day",
        carPriceMonth: "$5700/Month",
        carSpedometer: "10k",
        carTransmisson: "Auto",
        carGas: "Petrol",
        carLine: 'car-contain-line',
        carModel: "2023",
        classForSvg: "custom-svg",
        carYear: " 2023",
        carType: " Sedan",
        buttonName: 'Rent now'
    },
    {

        carID: "10",
        carImg: "/src/assets/cars/toyota/ToyotaCorolla.png",
        carName: "Toyota Corolloa",
        carPriceDay: "$100/Day",
        carPriceMonth: "$3000/Month",
        carSpedometer: "10k",
        carTransmisson: "Auto",
        carGas: "Petrol",
        carLine: 'car-contain-line',
        carModel: "2023",
        classForSvg: "custom-svg",
        carYear: " 2023",
        carType: " Sedan",
        buttonName: 'Rent now'
    },
    {

        carID: "11",
        carImg: "/src/assets/cars/toyota/ToyotaCrown.png",
        carName: "Toyota Crown",
        carPriceDay: "$150/Day",
        carPriceMonth: "$4500/Month",
        carSpedometer: "10k",
        carTransmisson: "Auto",
        carGas: "Petrol",
        carLine: 'car-contain-line',
        carModel: "2023",
        classForSvg: "custom-svg",
        carYear: " 2023",
        carType: " Sedan",
        buttonName: 'Rent now'
    },
    {

        carID: "12",
        carImg: "/src/assets/cars/toyota/ToyotaGrSupra.png",
        carName: "Toyota Supra",
        carPriceDay: "$650/Day",
        carPriceMonth: "$19500/Month",
        carSpedometer: "10k",
        carTransmisson: "Auto",
        carGas: "Petrol",
        carLine: 'car-contain-line',
        carModel: "2023",
        classForSvg: "custom-svg",
        carYear: " 2023",
        carType: " Sport",
        buttonName: 'Rent now'
    },
    {

        carID: "13",
        carImg: "/src/assets/cars/honda/hondaPassportClosed.png",
        carName: "Honda Passport",
        carPriceDay: "$150/Day",
        carPriceMonth: "$4500/Month",
        carSpedometer: "10k",
        carTransmisson: "Auto",
        carGas: "Petrol",
        carLine: 'car-contain-line',
        carModel: "2023",
        classForSvg: "custom-svg",
        carYear: " 2023",
        carType: " SUV",
        buttonName: 'Rent now'
    },
    {

        carID: "14",
        carImg: "/src/assets/cars/bmw/BMWM5Competetion.png",
        carName: "BMW M5 Competetion",
        carPriceDay: "$550/Day",
        carPriceMonth: "$16500/Month",
        carSpedometer: "2k",
        carTransmisson: "Manuel",
        carGas: "Petrol",
        carLine: 'car-contain-line',
        carModel: "2023",
        classForSvg: "custom-svg",
        carYear: " 2023",
        carType: " Sport",
        buttonName: 'Rent now'
    } ,
    {

        carID: "15",
        carImg: "/src/assets/cars/bmw/bmwM2Coupe.png",
        carName: "BMW M2 Coupe",
        carPriceDay: "$350/Day",
        carPriceMonth: "$10500/Month",
        carSpedometer: "2k",
        carTransmisson: "Manuel",
        carGas: "Petrol",
        carLine: 'car-contain-line',
        carModel: "2023",
        classForSvg: "custom-svg",
        carYear: " 2023",
        carType: " Sport",
        buttonName: 'Rent now'
    },
    {

        carID: "16",
        carImg: "/src/assets/cars/bmw/BMWM3.png",
        carName: "BMW M3",
        carPriceDay: "$350/Day",
        carPriceMonth: "$10500/Month",
        carSpedometer: "4k",
        carTransmisson: "Manuel",
        carGas: "Petrol",
        carLine: 'car-contain-line',
        carModel: "2023",
        classForSvg: "custom-svg",
        carYear: " 2023",
        carType: " Sport",
        buttonName: 'Rent now'
    },
    {

        carID: "17",
        carImg: "/src/assets/cars/bmw/BMWM8CabRiolet.png",
        carName: "BMW M8 Cabriolet",
        carPriceDay: "$650/Day",
        carPriceMonth: "$19500/Month",
        carSpedometer: "4k",
        carTransmisson: "Manuel",
        carGas: "Petrol",
        carLine: 'car-contain-line',
        carModel: "2023",
        classForSvg: "custom-svg",
        carYear: " 2023",
        carType: " Sport",
        buttonName: 'Rent now'
    }


];

export default carData;