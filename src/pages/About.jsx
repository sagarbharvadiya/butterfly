import React from 'react'
import AboutSection from '../Components/About-section'
import Client from '../Components/Client'
import Counter from '../Components/Counter'
import Gallery from '../Components/Gallery'
import NewsLetter from '../Components/NewsLetter'
import Testimonials from '../Components/Testimonials'
import Contact from './Contact'
import Services from './Services'
import Team from './Team'
const About = () => {
    return (
        <>
            <AboutSection/>
            <Counter/>
            <Client/>
            <Services/>
            <Testimonials/>
            <Team/>
            <Gallery/>
            <Contact/>
            <NewsLetter/>
        </>
    )
}

export default About