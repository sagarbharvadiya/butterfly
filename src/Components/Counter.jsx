import React from 'react'
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <>
            <section className='Counter'>
                <div className='container'>
                    <div className='text-center title'>
                        <h3>What we have achieved so far</h3>
                        <p>Iusto et labore modi qui sapiente xpedita tempora et aut non ipsum consequatur illo.</p>
                    </div>
                    <div className='row counters position-relative'>
                        <div className='col-lg-3 col-6 text-center'>
                            <CountUp
                                end={232}
                                duration={5}
                            ></CountUp>
                            <p>Clients</p>
                        </div>
                        <div className='col-lg-3 col-6 text-center'>
                            <CountUp
                                end={521}
                                duration={5}
                            ></CountUp>
                            <p>Projects</p>
                        </div>
                        <div className='col-lg-3 col-6 text-center'>
                            <CountUp
                                end={1463}
                                duration={5}
                            ></CountUp>
                            <p>Hours Of Support</p>
                        </div>
                        <div className='col-lg-3 col-6 text-center'>
                            <CountUp
                                end={15}
                                duration={5}
                            ></CountUp>
                            <p>Hard Workers</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Counter