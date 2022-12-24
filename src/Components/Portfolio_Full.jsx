import React from 'react'
import { useParams } from "react-router-dom"
import dataJson from '../Data/data.json'
import Slider from "react-slick";

const PortfolioFull = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const { productId } = useParams()
    const thisProduct = dataJson.portfolio_details.find(prod => prod.id === productId)
    return (
        <>
            <section id='breadcrumbs' className='breadcrumbs'>
                <div className=' container'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h2>Portfolio Details</h2>
                        <ol>
                            <li><a href="/">Home</a> </li>
                            <li><a href="/portfolio">Portfolio</a></li>
                        </ol>
                    </div>
                </div>
            </section>
            <section id='portfolio-details' className='portfolio-details'>
                <div className=' container'>
                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className='portfolio_img_slider'>
                                <Slider {...settings}>
                                    <img src={thisProduct.img} alt={thisProduct.img} />
                                    <img src={thisProduct.img1} alt={thisProduct.img1} />
                                </Slider>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='portfolio-info'>
                                <h3>{thisProduct.name}</h3>
                                <ul>
                                    <li><strong>{thisProduct.cat}</strong> {thisProduct.cat_det} </li>
                                    <li><strong>{thisProduct.client}</strong> {thisProduct.cat_det} </li>
                                    <li><strong>{thisProduct.date}</strong> {thisProduct.date_dat} </li>
                                    <li><strong>{thisProduct.url}</strong> <a href='{thisProduct.url_dat}'>{thisProduct.url_dat} </a></li>
                                </ul>
                            </div>
                            <div className='portfolio-description'>
                                <h2>{thisProduct.title}</h2>
                                <p>{thisProduct.dec}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default PortfolioFull


