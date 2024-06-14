'use client'
import React from 'react'
import "../styles/Client.css"
const Client = () => {
  return (
    <section className='clients ' id="clients">
    <div className='container'>
      <div className='row d-flex flex-row justify-center align-center'>
         <div className='col-lg-2 col-md-4 col-6 '>
        
         <img src="https://akeshya.com/assets/img/clients/client-1.png" className='logo-image img-fluid aos-init aos-animate' data-aos='zoom-in' alt="logo-1"  />
          </div>
          <div className='col-lg-2 col-md-4 col-6'>
          <img src="https://akeshya.com/assets/img/clients/client-2.png" className='logo-image img-fluid aos-init aos-animate' data-aos='zoom-in' alt="logo-2"  />
           </div>
           <div className='col-lg-2 col-md-4 col-6'>
           <img src="https://akeshya.com/assets/img/clients/client-3.png" className='logo-image img-fluid aos-init aos-animate' data-aos='zoom-in' alt="logo-3"  />
            </div>
            <div className='col-lg-2 col-md-4 col-6'>
            <img src="https://akeshya.com/assets/img/clients/client-4.png" className='img-fluid aos-init aos-animate' data-aos='zoom-in' alt="logo-4"  />
             </div>
             <div className='col-lg-2 col-md-4 col-6'>
             <img src="https://akeshya.com/assets/img/clients/client-5.png" className='img-fluid aos-init aos-animate' data-aos='zoom-in' alt="logo-5"  />
              </div>
              <div className='col-lg-2 col-md-4 col-6'>
             <img src="https://akeshya.com/assets/img/clients/client-6.png" className='img-fluid aos-init aos-animate' data-aos='zoom-in' alt="logo-5"  />
              </div>
      </div>
    </div>
    
    </section>
  )
}

export default Client
