import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/hero'
import About from '../sections/About'
import Services from '../sections/Services'
import Portifilio from '../sections/Portifilio'
import Contact from '../sections/Contact'
import Competence from '../sections/Competence'
import Footer from '../components/Footer'


export default function Home() {
  return (
    <>
        <Navbar />

        <main className='pt-20'>
            <Hero />
            <About />
            <Services />
            <Portifilio />
            <Competence />
            <Contact />
        </main>

        <Footer />
    </>
  )
}
