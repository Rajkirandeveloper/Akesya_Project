'use client'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';

import "../styles/PureCounter.css"
const PureCounter = ({EndValue}) => {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    
    <span data-aos="fade-up" className='span-full'>
    <CountUp
      start={0}
      end={EndValue}
      duration={5} 
      separator=''
     
    >
      {({ countUpRef }) => (
        <span ref={countUpRef} />
      )}
    </CountUp>
  </span>
  
    
    
   
  );
};

export default PureCounter;
