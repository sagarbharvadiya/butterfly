import React from 'react'
import dataJson from '../Data/data.json'
import Aos from 'aos';
const Services_section = () => {

  return (
    <>
      <section className='services'>
        <div className='container'>
          <div className='col-12 text-center section_title'>
            <h1 data-aos="fade-left" data-aos-offset="200">SERVICES</h1>
            <p data-aos="fade-right" data-aos-offset="200">Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <div className='row'>
            {
              dataJson.services.map((d, i) => (
                <React.Fragment key={d.id}>
                  <div className='col-lg-4 col-md-4'>
                    <div className='services_box d-flex'>
                      <div className='services_icon'>
                        <i data-aos="fade-down" className={d.icon}></i>
                    </div>
                    <div className='services_content'>
                      <h4 data-aos="fade-up-left" data-aos-easing="ease-in-sine" data-aos-duration="3000">{d.title}</h4>
                      <p data-aos="fade-up-right" data-aos-easing="ease-in-sine" data-aos-duration="3000">{d.text}</p>
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

export default Services_section