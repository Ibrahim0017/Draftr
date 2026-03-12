import WhySection from '@/ui/WhySection'
import AboutHero from '@/ui/AboutHero'
import ImpactSection from '@/ui/ImpactSection'
import TeamSection from '@/ui/TeamSection'
import React from 'react'
import SuccefulProject from '@/ui/succefulProject'

const AboutPage = () => {
  return (
    <>
    <div className='mt-[-70px]'>
    <AboutHero/>
    <ImpactSection/>
    <WhySection/>
    <SuccefulProject/>
    <TeamSection/>
    </div>
    </>
  )
}

export default AboutPage