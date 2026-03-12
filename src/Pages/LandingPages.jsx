import CardSection from '@/ui/CardSection'
import FifthSection from '@/ui/FifthSection'
import ForthSection from '@/ui/ForthSection'
import Hero from '@/ui/Hero'
import InfiniteCarousel from '@/ui/InfiniteCarousel'
import Layout from '@/ui/Layout'
import Testimonials from '@/ui/Testimonials'
import React from 'react'


const LandingPages = () => {
  return (
    <>
    <Hero/>
    {/* <InfiniteCarousel/> */}
    <CardSection/>
    <ForthSection/>
    <FifthSection/>
    <Testimonials/>
    <Layout/>
    </>
  )
}

export default LandingPages