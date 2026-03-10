import React from 'react'

const Card = ({MainText,SubText,cardImage}) => {
  return (
    <>
    <div className='bg-[#FFFFFF] rounded-[20px] p-2 shadow-lg shadow-[#DDD7FC] overflow-hidden'>
        <div className='w-full h-[300px] rounded-[20px]'>
            <img className='w-full h-full object-cover rounded-2xl' src={cardImage} alt="" />
        </div>
        <div className='flex flex-col'>
            <div className='flex flex-col p-5'>
            <h3 className='text-[15px] lg:text-[17.4px] font-bold'>{MainText} </h3>
            <h3 className='text-[13px]'>{SubText}.</h3>
            </div>
        </div>
    </div>
    </>
  )
}

export default Card