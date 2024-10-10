import React from 'react'
import Paragraph from './common/Paragraph'

const Hero = () => {
  return (
    <div className='bg-hero bg-no-repeat bg-bottom bg-cover border border-grey'>
      <div className="container max-w-[1180px] py-28 xl:pt-[202px] xl:pb-[102px]">
        <Paragraph blue>OUR CUSTOM TECHNOLOGY</Paragraph>
        <h2 className='font-bold text-[35px] md:text-5xl lg:text-custom-5xl text-white !leading-143'>Meet The Z-Vantage Platform</h2>
        <div className="flex justify-center">
          <Paragraph className='max-w-[690px] !normal-case mt-2 md:mt-4'>Z-Vantage is our proprietary technology platform designed to provide partners with a competitive edge on Amazon.</Paragraph>
        </div>
      </div>
    </div>
  )
}

export default Hero
