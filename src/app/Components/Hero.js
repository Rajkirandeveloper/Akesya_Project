'use client'
import React from 'react'
import '../styles/Hero.css'
const Hero = () => {
  return (
    <section id="hero" className='d-flex align-items-center'>
 <div className="container">
       <div className="row">
         <div   className=" bottom-divv aos-init aos-animate col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
         
         <h1 data-aos="fade-up" className="aos-init aos-animate">Grow your business with akesya</h1>
         <h2 data-aos='fade-up' data-aos-delay='400' className="aos-init aos-animate">We are team of talented website designers, developers & digital marketeers</h2>
         <div data-aos='fade-up' data-aos-delay='800'  className="aos-init aos-animate">
         <a className="btn-get-started scrollto  img-fluid animated" href="#about" >Get Started</a>
       </div>   
         </div>
         <div  className=" aos-init aos-animate col-lg-6 order-1 order-lg-2 hero-img" data-aos="move-up" data-aos-delay="200">
          <img src="https://akeshya.com/assets/img/hero-img.png" className="img-fluid animated" alt="text-two"  />
         </div>
        
        
       </div>
         
      </div>
      </section>
  )
}

export default Hero
