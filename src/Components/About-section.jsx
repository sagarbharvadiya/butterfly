import React, { useEffect } from 'react'
import Aos from 'aos';
// import * as Icons from 'react-bootstrap-icons';
import dataJson from '../Data/data.json';
const About_section = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <section className='about'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div data-aos="fade-left" data-aos-offset="200" className='about_video'>
                <a href="https://www.youtube.com/" className='glightbox play-btn mb-4 font-0'>d</a>
              </div>
            </div>
            <div className='col-lg-6'>
              {
                dataJson.about.map((d, i) => (
                  <React.Fragment key={d.id}>
                    <div data-aos="fade-up" className='about_right_top'>
                      <h3>{d.title}</h3>
                      <p>{d.sub_title}</p>
                    </div>
                    <div data-aos="fade-left" data-aos-offset="200" className='about_right_box'>
                      <div className='icon'>
                      <i className={d.icon}></i>
                      </div>
                      <div className='box_text'>
                        <h4>{d.box_title}</h4>
                        <p className='box_description'>{d.box_sub_title}</p>
                      </div>
                    </div>
                  </React.Fragment>
                ))
              }
            </div>

          </div>
        </div>
      </section>

    </>
  )
}

export default About_section