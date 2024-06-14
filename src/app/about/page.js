import React from 'react'
import About from '../Components/About'
import Navbar from '../Components/Navbar'
import Count from '../Components/Count'
import Footer from '../Components/Footer'
const page = () => {
  return (
    <section>
    <Navbar/>
     <About/>
     <Count/>
     <Footer/>
    </section>
  )
}

export default page
