import React from 'react'
import { useParams } from "react-router-dom"
import dataJson from '../Data/data.json'
import Slider from "react-slick";

const Portfolio_details = () => {
  const { productId } = useParams()
  const portfolio_details = dataJson.portfolio_details.find(prod => prod.id === productId)


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

      <section id='portfolio-details' className='portfolio-details' key={portfolio_details.id}>
        <div className=' container'>
          <div className='row gy-4'>
            <div className='col-lg-8'>
              <div className='portfolio_img_slider'>
                {/* <Slider {...settings}> */}
                {/* <img src={portfolio_details.img} alt="1" /> */}
                {/* </Slider> */}
              </div>
            </div>
            <div className='col-lg-6'>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio_details