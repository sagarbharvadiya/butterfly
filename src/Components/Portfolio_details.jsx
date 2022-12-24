import React from 'react'
// import { useParams } from "react-router-dom"
import dataJson from '../Data/data.json'
import Slider from "react-slick";

const Portfolio_details = () => {
  // const { productId } = useParams()
  // const portfolio_details = dataJson.portfolio_details.find(prod => prod.id === productId)


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

      <section id='portfolio-details' className='portfolio-details'>
        <div className=' container'>
          <div className='row gy-4'>
            {
              dataJson.portfolio_details.map((d, i) => (
                <React.Fragment key={d.id}>
                  <div className='col-lg-8'>
                    <div className='portfolio_img_slider'>
                      <Slider {...settings}>
                        <img src={d.img} alt="1" />
                        <img src={d.img1} alt="2"/>
                      </Slider>
                    </div>
                    <div className='col-lg-4'>
                      <div className='porftolio_name'>
                        <h4>{d.name}</h4>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))

            }



          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio_details