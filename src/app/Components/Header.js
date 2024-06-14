import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <header id="header" className='fixed-top d-flex align-items-center'>
    <div className='conatiner d-flex align-items-center justify-content-between'>
    <div className='logo'>
    <h1>    <a href="/">
    <img src="https://akeshya.com/assets/img/logo.png" alt="logo"/>
    AKESHYA
    
    </a> </h1>
    </div>

    <nav id="navbar" className='navbar'>
    <ul>
       <li><a  className='nav-link scrolto active' href="#">Home</a></li>
       <li><a  className='nav-link scrolto active' href="/about">About</a></li>
       <li><a  className='nav-link scrolto active' href="/services">Services </a></li>
       <li><a  className='getstarted scrolto active' href="/contact">Contact us</a></li>
    
    </ul>

    

    </nav>
    
    </div>
    </header>
  )
}

export default Header
