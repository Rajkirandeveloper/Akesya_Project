'use client'
import { React, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./page.module.css";
import About from "./Components/About";
import Count from "./Components/Count";
import Services from "./Components/Services";
import MoreService from "./Components/MoreService";
import Features from "./Components/Features";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Client from "./Components/Client";
import ScrollToTopButton from "./Components/ScrollToTopButton";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  
  return (
    <main className={styles.main}>
      
      <ScrollToTopButton />
      <Hero />
      <Client />
      <About />
      <Count />
      <Services />
      <MoreService />
      <Features />
      <Contact />
      <Footer />
    </main>
  );
}




