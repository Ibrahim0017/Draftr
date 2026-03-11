import CardSection from '@/ui/CardSection'
import FifthSection from '@/ui/FifthSection'
import Footer from '@/ui/Footer'
import ForthSection from '@/ui/ForthSection'
import Header from '@/ui/Header'
import Hero from '@/ui/Hero'
import InfiniteCarousel from '@/ui/InfiniteCarousel'
import Layout from '@/ui/Layout'
import Testimonials from '@/ui/Testimonials'
import React from 'react'


const LandingPages = () => {
  return (
    <>
    <Header/>
    <Hero/>
    {/* <InfiniteCarousel/> */}
    <CardSection/>
    <ForthSection/>
    <FifthSection/>
    <Testimonials/>
    <Layout/>
    <Footer/>
    </>
  )
}

export default LandingPages