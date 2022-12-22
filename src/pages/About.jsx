import React from 'react'
import AboutSection from '../Components/About-section'
import Client from '../Components/Client'
import Counter from '../Components/Counter'
import Gallery from '../Components/Gallery'
import Testimonials from '../Components/Testimonials'
import Portfolio from './Portfolio'
// import Contact from './Contact'
import Services from './Services'
import Team from './Team'
const About = () => {
    return (
        <>
            <AboutSection/>
            <Counter/>
            <Client/>
            <Services/>
            <Portfolio/>
            <Testimonials/>
            <Team/>
            <Gallery/>
    
        </>
    )
}

export default About