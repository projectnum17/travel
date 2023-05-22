import React from 'react'
import { Navbar, Footer, HeroImage, TrainingSection } from '../components'

const Training = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading="TRANING." text="Pre-Flight & In-Flight Training." />
            <TrainingSection />
            <Footer />
        </div>
    )
}

export default Training