import Aos from 'aos'
import React, { useEffect } from 'react'
import banner_img from "../images/hero-img.png"
import About from '../pages/About'

const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <section className='banner'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div data-aos="fade-left" data-aos-offset="200" className='banner_left'>
                                <h1>CREATING WEBSITES THAT MAKE YOU STOP & STARE</h1>
                                <h2>Accusantium quam, aliquam ultricies eget tempor id, aliquam eget nibh et. Maecen aliquam, risus at semper. Proin iaculis purus consequat sem cure digni ssim. Donec porttitora entum.</h2>
                                <button className='banner_btn btn'>
                                    <a href="#/">Get Started</a>
                                </button>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div data-aos="fade-right" className='banner_right'>
                                <img src={banner_img} alt="banner_img" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About />
        </>
    )
}

export default Banner