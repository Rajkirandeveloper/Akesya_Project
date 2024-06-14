'use client'

import React from "react";
import "../styles/Services.css";
const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div
          className="section-title aos-init aos-animated-flex d-flex flex-column justify-content-center align-items-center "
          data-aos="fade-up"
        >
          <h2>Services</h2>
          <h6>
            Akeshya will serve as your consultant and development partner to
            help you turn your idea into a reality.
          </h6>
        </div>

        <div className="row">
          <div className=" col-xl-3 col-lg-3 col-md-5 col-sm-10 col-10 ">
            <div
              className=" icon-box aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon">
              <i class="bi bi-dribbble"></i>
              </div>
              <h4 className="title">
                <a href>Design</a>
              </h4>
              <p className="descrption">
                Design Our web design services can assist you in reclaiming your
                company's online image. Your business will flourish on the
                Internet thanks to the combination of style and technology we
                provide, as well as our experience.
              </p>
            </div>
          </div>

          <div className=" col-xl-3 col-xl-3 col-lg-3 col-md-5 col-sm-10 col-10 ">
            <div
              className="icon-box aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon">
              <i class="bi bi-file-earmark-text"></i>
              </div>
              <h4 className="title">
                <a href>Development</a>
              </h4>
              <p className="descrption">
                Development Our development team can construct platforms to help
                your business thrive by creating powerful customised solutions
                tailored to your particular requirements. Akeshya makes use of
                established and effective web development tools.
              </p>
            </div>
          </div>

          <div className=" col-xl-3 col-xl-3 col-lg-3 col-md-5 col-sm-10 col-10">
            <div
              className="icon-box aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon">
              <i class="bi bi-globe-americas"></i>
              </div>
              <h4 className="title">
                <a href>Marketing</a>
              </h4>
              <p className="descrption">
                Marketing A beautiful website is the foundation of effective
                marketing. Our customers achieve success where it counts—in the
                real world—by combining our proven approach with our passion for
                improving conversions and increasing ROI.
              </p>
            </div>
          </div>

          <div className=" col-xl-3 col-xl-3 col-lg-3 col-md-5 col-sm-10 col-10 ">
            <div
              className="icon-box aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon">
              <i class="bi bi-speedometer2"></i>
              </div>
              <h4 className="title">
                <a href>Support</a>
              </h4>
              <p className="descrption">
                Support Since the beginning, we at Akeshya have specialised in
                website maintenance. We recognise the significance of having
                your business online 24 hours a day, seven days a week, and
                we've created a system to ensure that we're always available.
              </p>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Services;
//col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0
