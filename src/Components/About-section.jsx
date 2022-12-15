import React, { useEffect } from 'react'
import Aos from 'aos';
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
                <a href="https://www.youtube.com/" className='glightbox play-btn mb-4'></a>
              </div>
            </div>
            <div className='col-lg-6'>
              <div data-aos="fade-up" className='about_right_top'>
                <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>
              </div>
              <div data-aos="fade-left" data-aos-offset="200" className='about_right_box'>
                <div className='icon'>
                  <i class="fa-solid fa-fingerprint"></i>
                </div>
                <div className='box_text'>
                  <h4>Lorem Ipsum</h4>
                  <p className='box_description'>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                </div>
              </div>
              <div data-aos="fade-right" className='about_right_box'>
                <div className='icon'>
                  <i class="fa-solid fa-gift"></i>
                </div>
                <div className='box_text'>
                  <h4>Nemo Enim</h4>
                  <p className='box_description'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                </div>
              </div>
              <div data-aos="fade-left" className='about_right_box'>
                <div className='icon'>
                  <i class="fa-solid fa-atom"></i>
                </div>
                <div className='box_text'>
                  <h4>Dine Pad</h4>
                  <p className='box_description'>Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default About_section