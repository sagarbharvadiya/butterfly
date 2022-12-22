import React from 'react'
import { useParams } from "react-router-dom"
import dataJson from '../Data/data.json'

const PortfolioFull = () => {

    const { productId } = useParams()
    const thisProduct = dataJson.portfolio_details.find(prod => prod.id === productId)
    return (
        <>
            <div className=' container'>
                <div className='row'>
                    <div className='d-flex gap-5 align-items-center'>
                        <div className='img'>
                            <img className='default-img' src={thisProduct.img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PortfolioFull
