import React from 'react'
import Slider from "react-slick";
import dataJson from "../Data/data.json"
const Testimonials = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <section className='testimonials'>
                <div className="container position-relative">
                    <div className='testimonials-slider'>
                        <Slider {...settings}>
                            {
                                dataJson.testimonials_silder.map((d, i) => (
                                    <React.Fragment key={d.id}>
                                        <div className='slider text-center testimonial-item'>
                                            <div className='slider_img'>
                                                <img src={d.img} alt={d.img} />
                                                <h3>{d.name}</h3>
                                                <h4>{d.poison}</h4>
                                            </div>
                                            <div className='slider_det'>
                                                <p>{d.details}</p>
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </React.Fragment>
                                ))

                            }
                        </Slider>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Testimonials