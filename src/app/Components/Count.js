'use client'

import React from "react";
import "../styles/Count.css"
import PureCounter from "./PureCounter";
const Count = () => {
  return (

    <section id="counts" className="counts">
    <div className="container">
    <div className="row">
    <div className="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-xl-start aos-init aos-animate" data-aos="fade-right" data-aos-delay="150">
     <img src="https://akeshya.com/assets/img/counts-img.svg" class="img-fluid" alt="campaign"/>
    </div>

    <div className="col-xl-7 d-flex align-items-stretch pt-4  pt-xl-0 aos-init aos-animate" data-aos="fade-left" data-aos-delay="300">
      <div className="content d-flex flex-column justify-content-center">
        <div  className="row">
          <div  className="col-md-6 d-md-flex align-items-md-stretch">
             <div className="count-box-2 count-box">
                     
             <i class="bi bi-emoji-smile" style={{"font-size": "1.5rem","color":"#14279b"}}></i>
             <div className=""><PureCounter EndValue={3835039}/>
             <p className="org-text">Organic Reach(Global)</p></div>        
             
             </div>
          </div>
          <div  className="col-md-6 d-md-flex align-items-md-stretch">
             <div className="count-box-2 count-box">
             <i  className="bi bi-journal-richtext" style={{"font-size": "1.5rem","color":"#14279b"}}></i>
                 <div><span>85</span>
                 <p>Campaigns</p></div> 
             </div>
          </div>

          <div  className="col-md-6 d-md-flex align-items-md-stretch">
             <div className="count-box-2 count-box">
                


<i  class="bi bi-clock" style={{"font-size": "1.5rem","color":"#14279b"}}></i>
<div><PureCounter EndValue={14081}/>
<p>Watch hours(Asia)</p></div>              

             </div>
          </div>

          <div  className="col-md-6 d-md-flex align-items-md-stretch">
             <div className="count-box-2 count-box">
            
             <i class="bi bi-globe" style={{"font-size": "1.5rem","color":"#14279b"}}></i>
           <div><span>17</span>
           <p>Excellent CTR %</p></div>
                  
             </div>
          </div>
        </div>
  
      </div>
    
    </div>
    
    </div>
  </div>

    </section>
  
  );
};

export default Count;
