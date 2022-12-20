import React from 'react'
import Aos from 'aos';
import dataJson from '../Data/data.json'

const Client = () => {

    return (
        <>
            <section className='Client'>
                <div className=' container'>
                    <div className='row clients-wrap'>
                        {
                            dataJson.client.map((d,i) => (
                                <React.Fragment key={d.id}>
                                    <div className='col-lg-3 col-md-4 col-6'>
                                        <div className='client_logo'>
                                            <img data-aos="fade-left" data-aos-offset="200" src={d.img} alt="client_logo" />
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

export default Client