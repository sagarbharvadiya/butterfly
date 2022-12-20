import React from 'react'
import dataJson from '../Data/data.json'


const Gallery = () => {

    return (
        <>
            <section className='gallery'>
                <div className='container'>
                    <div className='gallery_title text-center pb-5'>
                        <h2>GALLERY</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className='row'>
                        {
                            dataJson.gallery.map((d, i) => (
                                <React.Fragment key={d.id}>
                                    <div className='col-lg-3 col-md-4'>
                                        <div className='gallery-item'>

                                            <a href={d.img} target='_top'>
                                                <img src={d.img} alt="" srcset="" className=' img-fluid' />
                                            </a>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Gallery