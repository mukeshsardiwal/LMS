import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div className='pt-16'>
      <h1 className='text-base text-gray-500'>Trusted by learner from</h1>
      <div className='flex flex-wrap items-center justify-center gap-6 md:gap-16 md:mt-10 mt-5'>
        <img src={assets.microsoft_logo} alt="Microsoft" className='w-20 md:2-28' />
        <img src={assets.sentilone_icon} alt="SentilOne" className='w-20 md:2-28' />
        <img src={assets.adobe_logo} alt="Adobe" className='h-18 w-15 md:2-28' />
        <img src={assets.blinkit_icon} alt="Blinkit" className='h-12 w-18 md:2-28' />
        <img src={assets.appsecures_icon} alt="Appsecure" className='h-20 w-18 md:2-28' />
      </div>
    </div>
  )
}

export default Companies