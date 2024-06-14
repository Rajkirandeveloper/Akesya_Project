'use client'
import React, { useState, useEffect } from 'react';
import '../styles/ScrollToTopButton.css'; 
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={isVisible ? "scrollToTopButton" : "hidden"}>
      <button onClick={scrollToTop}>
      <i class="bi bi-arrow-up" style={{"color": "#fff"}}></i>
      </button>
    </div>
  );
};

export default ScrollToTopButton;


