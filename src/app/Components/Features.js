'use client'

import React from 'react'
import "../styles/Features.css"

const Features = () => {
  return (
    <section id="Features" className='features'>
     <div className='container'>
     <div className='section-title aos-init aos-animate' data-aos="fade-up">
     <h2> Our Core Features </h2>
     <h6>Akeshya is a forward-thinking and intelligent design firm that is technically and creatively capable of transforming your brand into its best digital self. Our approach to design and development results in compelling, engaging branding and immersive digital experiences that provide a value for money.</h6>
     </div>
     <div className='row aos-init aos-animate' data-aos="fade-up" data-aos-delay="300">
     
     <div className='col-lg-3 col-md-4'>
      <div className='icon-box'>
      
      <i style={{"color": "#ffbb2c"}}    class="bi bi-calendar3-event"></i> 
       <h3><a href>Web design</a></h3>
      </div>
     </div>

     <div className='col-lg-3 col-md-4 mt-md-0'>
     <div className='icon-box'>
     
     <i style={{"color": "#5578ff"}} class="bi bi-code-square"></i>
      <h3><a href>Development</a></h3>
     </div>
    </div>


    <div className='col-lg-3 col-md-4  mt-md-0'>
    <div className='icon-box'>
    <i style={{"color": "#e80368"}} class="bi bi-award-fill"></i>
     <h3><a href>Branding</a></h3>
    </div>
   </div>


   <div className='col-lg-3 col-md-4  mt-lg-0'>
   <div className='icon-box'>
    


<i style={{"color": "#e361ff"}} class="bi bi-play-circle"></i>
   

<h3><a href>Media buying</a></h3>
   </div>
  </div>


  <div className='col-lg-3 col-md-4'>
  <div className='icon-box'>
   
  <i style={{"color": "#47aeff"}} class="bi bi-search-heart"></i>
   <h3><a href>Search engine</a></h3>
  </div>
 </div>


 <div className='col-lg-3 col-md-4'>
 <div className='icon-box'>
 <i style={{"color": "#ffa76e"}} class="bi bi-filter-square"></i>
  <h3><a href>Brand strategy</a></h3>
 </div>
</div>

<div className='col-lg-3 col-md-4'>
<div className='icon-box'>
 


<i style={{"color": "#dbce11"}} class="bi bi-geo-alt"></i>
 <h3><a href>Local search marketing</a></h3>
</div>
</div>

<div className='col-lg-3 col-md-4'>
<div className='icon-box'>

<i class="bi bi-bar-chart-fill" style={{"color": "#4233ff"}} ></i>
 <h3><a href>Lead Tracking & Management</a></h3>
</div>
</div>

<div className='col-lg-3 col-md-4'>
<div className='icon-box'>
 
<i class="bi bi-file-earmark-person" style={{"color": "#b2904f"}} ></i>
 <h3><a href>Contact management</a></h3>
</div>
</div>

<div className='col-lg-3 col-md-4'>
<div className='icon-box'>
<i class="bi bi-card-image" style={{"color": "#b20969"}}></i>
 <h3><a href>Media management</a></h3>
</div>
</div>

<div className='col-lg-3 col-md-4'>
<div className='icon-box'>
<i class="bi bi-calendar4-event" style={{"color": "#ff5828"}}></i>
 <h3><a href>Social sheduling</a></h3>
</div>
</div>

<div className='col-lg-3 col-md-4'>
<div className='icon-box'>
 
<i style={{"color": "#29cc61"}} class="bi bi-badge-ad-fill"></i>

<h3><a href>Ad retargeting</a></h3>
</div>
</div>




     </div>
     </div>
    </section>
  )
}

export default Features
