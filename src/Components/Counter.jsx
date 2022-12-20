import React from 'react'
import CountUp from 'react-countup';
import dataJson from "../Data/data.json"

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
                        {
                            dataJson.counter.map((d, i) => (
                                <React.Fragment key={d.id}>
                                    <div className='col-lg-3 col-6 text-center'>
                                        <CountUp
                                            end={d.count}
                                            duration={5}
                                        ></CountUp>
                                        <p>{d.count_t}</p>
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

export default Counter