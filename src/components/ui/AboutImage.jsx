import React from 'react'
import aboutImage from '../../assets/AboutImage.jpg'

const AboutImage = () => {
  return (
    <>
    <div className='w-[90%] rounded-[40px]  overflow-hidden'>
        <img src={aboutImage} alt="" />
    </div>
    </>
  )
}

export default AboutImage