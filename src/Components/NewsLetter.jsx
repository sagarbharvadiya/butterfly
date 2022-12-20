import React from 'react'

const NewsLetter = () => {
    return (
        <>
            <section className='news_letter text-center'>
                <div className="container">
                    <div className='row justify-content-center'>
                        <div className='col-lg-6'>
                            <h4>Join Our Newsletter</h4>
                            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                            <form action="" method="post">
                                <input type="email" name="email" />
                                <input type="submit" value="Subscribe" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsLetter