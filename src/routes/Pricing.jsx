import React from 'react'
import { Navbar, Footer, HeroImage, PricingCards } from '../components'


const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='PRICING.' text='Choose your trip.' />
            <PricingCards />
            <Footer />
        </div>
    )
}

export default Pricing