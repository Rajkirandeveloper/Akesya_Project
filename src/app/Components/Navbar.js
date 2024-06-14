"use client"
import "../styles/Navbar.css";
import { useEffect, useState } from "react";
import Link from "next/link";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  const[mobileMenu,setMobileMenu]=useState(false)
  const toggleMenu=()=>{
    
 setMobileMenu(!mobileMenu)
    

  }

  return (
    <nav className={`container  ${sticky ? "dark-nav" : ""}`}>
    <div className="logo-div">
    <img className="logo" src="https://akeshya.com/assets/img/logo.png" alt="logo" />
    <h1 className="heading">AKESHYA  </h1>
  
    
    
    </div> 
   
      <ul className={mobileMenu? "":"hide-mobile-menu"}>
        <li> <a href="/">Home</a></li>
       <li><a href="/about">About</a></li>
       <li  onClick={toggleMenu}> <Link href="/#services">Services</Link> </li>
        <li className="getstarted" > <a href="/contact" >Contact us</a> </li>
      </ul>
       <svg className="menu-icon" onClick={toggleMenu} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
       <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
       </svg>

     
    </nav>
  );
};

export default Navbar;

// <img src="#"  onClick={toggleMenu} alt="menu_icon"/>