"use client"
import React, { useState } from 'react';
import "../styles/Contact.css";


const Contact = () => {
  const [result,setResult]=useState("")
  const [allert,setAllert]=useState(false)

  const onSubmit=async (event)=>{
    event.preventDefault()
    setResult('Sending....')
    const formData=new FormData(event.target.value)
    formData.append("access_key", "86e15948-1db4-49bc-9327-86caf0362e00");


    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data=await response.json()

    if(data.success){
      setAllert(true)
      setResult(" Your Message has been sent.Thank you!",data)
      event.target.reset()
    }
    else{
      console.log("Error",data)
      setResult(data.message)
    }
  }


  return (
    <section className="contact " id="contact"  >
      <div className="container">
        <div className="section-title aos-init aos-animate">
          <h2>Contact Us </h2>
         
        </div>

        <div className="row">
          <div
            className=" col-lg-4 col-md-6 col-10  aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="contact-about">
              <h3>Akeshya</h3>
              <p>
                Designers, developers & marketeers capable of delivering
                solutions according to your needs,
              </p>
            </div>
          </div>

          <div
            className=" col-lg-4 col-md-6 col-10  mt-4 mt-md-0 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="info">
              <div className="card">
                
              <i class="bi bi-geo-alt" style={{"font-size": "1.5rem","color":"#14279b"}}></i>
               
            
              <p>
                  26-2-789, 7th street, Jyothi Nagar, Nellore, Andhra Pradesh
                  524004
                </p>
              </div>

              <div className="card" >
              <i class="bi bi-envelope" style={{"font-size": "1.5rem","color":"#14279b"}}></i>
                <p>info@akeshya.com</p>
              </div>

              <div className="card">
              <i class="bi bi-telephone" style={{"font-size": "1.5rem","color":"#14279b"}}></i>
                <p>+91 94942 40922</p>
              </div>
            </div>
          </div>

          <div
            className=" col-lg-4 col-md-12 col-10 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <form className="php-email-form" method="POST" name="contact" onSubmit={onSubmit}>
              <input type="hidden" name="form-name" value="contact" />

              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />{" "}
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  required
                />{" "}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  id="subject"
                  placeholder="Your Subject"
                  required
                />{" "}
              </div>

              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Your Message"
                  required
                />{" "}
              </div>

             

              <div className="text-center">
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </div>
            </form>
            <span>{result}</span>
            {allert &&    <div>{alert({result})} </div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;




