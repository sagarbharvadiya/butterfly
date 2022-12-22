import React from 'react'
import dataJson from '../Data/data.json'
const Our_team = () => {
    return (
        <>
            <section className='team'>
                <div className=' container'>
                    <div className='team_title text-center col-12'>
                        <h2>TEAM</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className='row'>
                        {
                            dataJson.team.map((d, i) => (
                                <React.Fragment key={d.id}>
                                    <div className='col-lg-3 col-md-6 d-flex'>
                                        <div className='team_member'>
                                            <div className='member_Img'>
                                                <img src={d.img} alt={d.img} className="img-fluid" />
                                                <div className='Team_social'>
                                                    <a href="/"><i className="fa-brands fa-twitter"></i></a>
                                                    <a href="/"><i className="fa-brands fa-facebook"></i></a>
                                                    <a href="/"><i className="fa-brands fa-instagram"></i></a>
                                                    <a href="/"><i className="fa-brands fa-linkedin"></i></a>
                                                </div>
                                            </div>
                                            <div className='team_info'>
                                                <h4>{d.name}</h4>
                                                <span>{d.passion}</span>
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

export default Our_team