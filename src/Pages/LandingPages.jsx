import CardSection from '@/ui/CardSection'
import FifthSection from '@/ui/FifthSection'
import ForthSection from '@/ui/ForthSection'
import Header from '@/ui/Header'
import Hero from '@/ui/Hero'
import InfiniteCarousel from '@/ui/InfiniteCarousel'
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
    </>
  )
}

export default LandingPages