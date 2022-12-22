import React from 'react'
import FooterCenter from './Footer_center'

const Footer_left = () => {
    return (
        <>
            <div className='col-lg-3 col-md-6 footer-contact'>
                <h3>Butterfly</h3>
                <p> A108 Adam Street
                    <br />
                    New York, NY 535022
                    <br />
                    United States
                    <br />
                    <br />
                    <strong>Phone:</strong>
                    +1 5589 55488 55
                    <br />
                    <strong>Email:</strong>
                    info@example.com
                    <br />
                </p>
            </div>
            <FooterCenter/>
        </>
    )
}

export default Footer_left