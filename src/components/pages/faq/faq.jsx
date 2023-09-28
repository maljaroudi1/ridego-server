import { Accordion, AccordionTab } from 'primereact/accordion';
import { useState } from 'react';
import Navbar from '../../navbar/navbar';
import Footer from '../../footer/footer';
export default function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);
    const onClick = (itemIndex) => {
        let _activeIndex = activeIndex ? [...activeIndex] : [];

        if (_activeIndex.length === 0) {
            _activeIndex.push(itemIndex);
        }
        else {
            const index = _activeIndex.indexOf(itemIndex);
            if (index === -1) {
                _activeIndex.push(itemIndex);
            }
            else {
                _activeIndex.splice(index, 1);
            }
        }

        setActiveIndex(_activeIndex);
    }
    return(
    <>
    <Navbar/>
    <h1 style={{transform:'translate3d(2rem,7rem,1rem)'}}>FAQ</h1>
        <Accordion activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)} style={{transform:'translateY(7rem)', paddingLeft: '2rem', paddingRight: '2rem'}}>
            <AccordionTab header="How do I make a reservation for a car rental?">
                You can easily make a reservation on our website or by contacting our customer support team. Provide your pick-up and drop-off locations, dates, and any specific vehicle preferences.
            </AccordionTab>
            <AccordionTab header="What do I need to rent a car?">
                To rent a car, you typically need a valid driver's license, a credit/debit card for payment, and proof of identity. Some additional requirements may apply based on your location and the rental terms.
            </AccordionTab>
            <AccordionTab header="What is the minimum age to rent a car?">
                The minimum age for renting a car is usually 21 years old. However, it may vary depending on the location and the car rental company. Some companies may charge an additional fee for drivers under 25.
            </AccordionTab>
            <AccordionTab header="Can I add an additional driver to my rental agreement?">
                Yes, you can often add additional drivers to your rental agreement for a fee. The additional driver(s) must meet the rental company's requirements and provide their driver's license and other necessary documentation.
            </AccordionTab>
            <AccordionTab header="What types of payment methods are accepted for car rentals?">
                Most car rental companies accept major credit cards (Visa, MasterCard, American Express) and debit cards. Cash payments are generally not accepted. You can check the specific payment methods accepted by the rental company when booking.
            </AccordionTab>
            <AccordionTab header="Is insurance included in the rental price?">
                Basic insurance coverage is usually included in the rental price, but it may come with a deductible. You can purchase additional insurance coverage, such as collision damage waiver (CDW) or supplementary liability insurance (SLI), for added protection.
            </AccordionTab>
            <AccordionTab header="Can I return the car to a different location?">
                Yes, one-way rentals are possible. You can pick up the car at one location and return it to another, although additional fees may apply. Be sure to check with the rental company for availability and pricing.
            </AccordionTab>
            <AccordionTab header="What happens if I return the car late?">
                Returning the car late may result in additional charges, commonly known as late fees. It's essential to adhere to the agreed-upon return time to avoid these fees.
            </AccordionTab>
            <AccordionTab header="Can I cancel or modify my reservation?">
                Most car rental reservations can be canceled or modified, but there may be cancellation fees depending on the timing and terms of the reservation. You will need to make a phone call to cancel a reservation you confirmed in person.
            </AccordionTab>
            <AccordionTab header="Are there any restrictions on where I can drive the rental car?">
                 Rental cars are typically meant for on-road use, and restrictions may apply to off-road driving. Be sure to clarify any specific travel restrictions or requirements with the rental company.
            </AccordionTab>
            <AccordionTab header="What do I do in case of an accident or breakdown?">
                In the event of an accident or breakdown, contact the rental company's emergency hotline immediately. They will provide guidance on the next steps, including arranging for a replacement vehicle if needed.
            </AccordionTab>
            <AccordionTab header="How do I refuel the car before returning it?">
                Most car rental companies require you to return the vehicle with a full tank of fuel. You can refuel at a local gas station, and it's a good practice to keep the fuel receipt as proof.
            </AccordionTab>

        </Accordion>
     <Footer/>
    
    </>
    );
}