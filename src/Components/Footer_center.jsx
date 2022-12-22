import React from 'react'
import dataJson from '../Data/data.json'
import FooterRight from './Footer_right'
const Footer_center = () => {
    return (
        <>{
            dataJson.footer.map((d, i) => (
                <React.Fragment key={d.id}>
                    <div className='col-lg-3 col-md-6 footer-links'>
                        <h4>{d.linktitle}</h4>
                        <ul>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/">{d.link1}</a></li>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/">{d.link2}</a></li>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/">{d.link3}</a></li>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/">{d.link4}</a></li>
                            <li><i className="fa fa-angle-right" aria-hidden="true"></i><a href="/">{d.link5}</a></li>
                        </ul>
                    </div>
                </React.Fragment>
            ))
        }
        <FooterRight/>

        </>
    )
}

export default Footer_center