import React from 'react'
import GoogleMapReact from 'google-map-react';
import dataJson from '../Data/data.json'
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Contact = () => {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 9
  };
  return (
    <>
      <section className='contact'>
        <div className='container'>
          <div className='contact_title text-center pb-5 col-12'>
            <h2>CONTACT</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <div className='map' style={{ width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
              />
            </GoogleMapReact>
          </div>
          <div className='row mt-5'>
            <div className='col-lg-4'>
              <div className='contact_left'>
                {
                  dataJson.contact.map((d, i) => (
                    <React.Fragment key={d.id}>
                      <div className='address'>
                        <i className={d.icon}></i>
                        <h4>{d.contact_left}</h4>
                        <p>{d.text}</p>
                      </div>
                    </React.Fragment>
                  ))
                }
              </div>
            </div>
            <div className='col-lg-8 mt-5 mt-lg-0'>
              <form action='php' className='form'>
                <div className='row'>
                <div className='col-md-6 form-group'>
                  <input type="text" name='name' className='form-control' id='name' placeholder='Your Name' required />
                </div>
                <div className='col-md-6 form-group mt-3 mt-md-0'>
                  <input type="email" className='form-control' name='email' id='email' placeholder='Your Email' required />
                </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div className="form-group mt-3">
                  <textarea className="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
                <div className="my-3"><div className="loading">Loading</div><div className="error-message"></div>
                  <div className="sent-message">Your message has been sent. Thank you!</div>
                </div>
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact