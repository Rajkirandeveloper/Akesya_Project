'use client'
import React from 'react'
import "../styles/About.css"


const About = () => {
  return (
    <section id="about" className='about'>
    <div className='container'>
    <div className='section-title aos-init aos-animate' data-aos="fade-up">

             <h2>About Us</h2>
    </div>
    <div className='row content'>
    <div  className='col-lg-6 aos-init aos-animate' data-aos="fade-up" data-aos-delay="150">
    <p>We are Akeshya, a firm that specializes in web design and marketing. We help transform ideas into reality with a team of passionate graphic designers, web developers, and seasoned marketing advisors.
    </p>
    <ul>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-check2-all" viewBox="0 0 16 16">
      <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0"/>
      <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708"/>
    </svg>
    <li> 
     We started with a simple idea: do what is best for the client. </li>
     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-check2-all" viewBox="0 0 16 16">
      <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0"/>
      <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708"/>
    </svg>
    <li>Our methodical and individual approach to each project delivers the finest possible results for your media.</li>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" class="bi bi-check2-all" viewBox="0 0 16 16">
      <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0"/>
      <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708"/>
    </svg>
    <li>Our day-to-day work is to solve your problems utilising the most up-to-date, practical adaptive technology, and we have a lot of fun doing it.</li>
    </ul>
    </div>

    <div  className='col-lg-6 aos-init aos-animate' data-aos="fade-up" data-aos-delay="150">
    <p>We're professional, but we're also friendly, and we'll always pay attention to your concerns. We expect to work with innovative people that have an open mind and are dedicated to making every idea a reality. We want to hear from you if you're interested in SEO, have Web Development ideas, or require a graphic designer who can match your goals.
    </p>
    <a href="#services" className='btn-learn-more '>Learn More</a>
   
    </div>
    
    
    
    </div>
    
    </div>
    </section>
  
  )
}

export default About


