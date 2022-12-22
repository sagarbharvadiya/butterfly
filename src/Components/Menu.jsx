import React, { useState } from 'react'
import dataJson from '../Data/data.json'
import { Link } from 'react-router-dom';
const Menu = () => {
    const [items, setItems] = useState(dataJson.portfolio);

    const filterItem = (categItem) => {
        const updatedItems = dataJson.portfolio.filter((curElem) => {
            return curElem.category === categItem;
        })
        setItems(updatedItems);
    }
    return (
        <>
            <div className='portfolio_menu d-flex justify-content-center align-items-center'>
                <ul className='d-flex'>
                    <li className='list-unstyled'><button className='btn' onClick={() => setItems(dataJson.portfolio)}>All</button></li>
                    <li className='list-unstyled'><button className='btn' onClick={() => filterItem('App')}>App</button></li>
                    <li className='list-unstyled'><button className='btn' onClick={() => filterItem('Card')}>Card</button></li>
                    <li className='list-unstyled'><button className='btn' onClick={() => filterItem('Web')}>Web</button></li>
                </ul>
            </div>
            <div className='section-center row'>
                {
                    items.map((elem) => {
                        const { id, name, sub_name, img, icon1, icon } = elem;

                        return (
                            <React.Fragment key={id}>
                                <div className='col-lg-4 col-md-6 portfolio-item filter-app'>
                                    <div className='portfolio-wrap'>
                                        <img src={img} alt="" className='img-fluid' />
                                        <div className='portfolio-info'>
                                            <h4>{name}</h4>
                                            <p>{sub_name}</p>
                                            <div className='portfolio-links'>
                                                <a href={img} data-gallery="portfolioGallery" className='portfolio-lightbox' title='app1'>
                                                    <i className={icon}></i>
                                                </a>
                                                
                                                <Link title="More Details" data-item-id={id} to={`/portfolio/${id}`}>
                                                    <i className={icon1}></i>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Menu