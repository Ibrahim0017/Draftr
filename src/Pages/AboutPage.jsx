import WhySection from '@/ui/WhySection'
import AboutHero from '@/ui/AboutHero'
import ImpactSection from '@/ui/ImpactSection'
import TeamSection from '@/ui/TeamSection'
import React from 'react'

const AboutPage = () => {
  return (
    <>
    <div className='mt-[-70px]'>
    <AboutHero/>
    <ImpactSection/>
    <WhySection/>
    <TeamSection/>
    </div>
    </>
  )
}

export default AboutPage