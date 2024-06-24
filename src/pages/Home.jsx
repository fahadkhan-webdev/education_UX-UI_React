import React from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/Hero-section/HeroSection'
import Company from '../components/company-section/Company'
import Offer from '../components/Offers/Offer'

import Aboutus from '../components/About us/Aboutus'
import Updates from '../components/Updates/Updates'
import Footer from '../components/Footer/Footer'
import Courses from '../components/Courses-section/Courses'

function Home() {
  return (
    <>
  <Header/>
  <HeroSection/>
  <Company/>
  <Offer/>
  <Courses/>
  <Aboutus/>
  <Updates/>
<Footer/>
    </>
  )
}

export default Home