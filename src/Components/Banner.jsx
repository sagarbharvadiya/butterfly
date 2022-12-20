import Aos from 'aos'
import React, { useEffect } from 'react'
// import banner_img from "../images/hero-img.png"
import About from '../pages/About'
import dataJson from "../Data/data.json"

const Banner = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <>
            <section className='banner'>
                <div className='container'>
                    <div className='row'>
                        {
                            dataJson.banner.map((d, i) => (
                                <React.Fragment key={d.id}>
                                    <div className='col-lg-6'>
                                        <div data-aos="fade-left" data-aos-offset="200" className='banner_left'>
                                            <h1>{d.title}</h1>
                                            <h2>{d.sub_title}</h2>
                                            <button className='banner_btn btn'>
                                                <a href="#/">{d.btn}</a>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div data-aos="fade-right" className='banner_right'>
                                            <img src={d.img} alt="banner_img" width="100%" />
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))

                        }

                    </div>
                </div>
            </section>
            <About />
        </>
    )
}

export default Banner