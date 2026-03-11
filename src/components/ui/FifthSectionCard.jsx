import React from 'react'

const FifthSectionCard = ({subText, mainText, CardImage}) => {
  return ( 
    <div className='bg-[#2a2a2a] rounded-[30px] p-2  overflow-hidden'>
        <div className='w-full h-[290px] rounded-[30px] overflow-hidden'>
            <img className='w-full h-full object-cover rounded-2xl' src={CardImage} alt="" />
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-col py-9 px-6'>
            <h3 className='text-[16px] lg:text-[18.5px] font-bold'>{mainText}</h3>
            <h3 className='text-[12px] font-bold font- text-[#bababb]'>{subText}</h3>
            </div>
        </div>
    </div>
  )
}

export default FifthSectionCard