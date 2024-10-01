import { TIMELINE_DATA } from '@/utils/Helper'
import React from 'react'
import Paragraph from './common/Paragraph'

const Timeline = () => {
  return (
    <div className='relative'>
      <div className="container xl:!max-w-[1180px]">
        <Paragraph blue className='text-center'>WHY IT MATTERS</Paragraph>
        <h2 className='text-center font-bold text-white !leading-133 max-w-[788px] mx-auto max-md:text-[35px] md:text-5xl'>Data is the key to a winning
          Amazon strategy</h2>
        <Paragraph className='pt-[14px] max-w-[828px] mx-auto text-center !font-light'>Amazon is a complex platform, and being able to make sense of the large amount of data available is key to making smart, data-driven decisions. That’s why we developed a platform that enables us to track and analyze all the data we need to run a smooth operation and drive up market share for our partner brands.</Paragraph>
        <div className="flex max-lg:flex-wrap lg:gap-6">
          <div className='relative grid w-full gap-6 sm:gap-10 pl-7 md:pl-44 lg:pl-0 max-md:relative after:absolute after:bg-verticleBorder after:p-px after:h-[90%] md:after:left-[57px] xl:after:left-1/2 after:top-0 sm:after:top-10 pt-10 sm:pt-[86px] max-xl:justify-end'>
            {TIMELINE_DATA.map((obj, index) => (
              <div className={`w-full xl:max-w-[530px] h-fit p-[1px] rounded-[10px] relative max-xl:mx-auto ${index % 2 !== 0 ? "m-0" : "xl:ml-auto"}`}>
                <div className='bg-timelineGradient p-px rounded-[10px] relative z-40'>
                  <div className='p-4 rounded-[10px] !bg-timelineBg'>
                    <div key={index} className='max-w-[770px] xl:max-w-[530px]'>
                      <div className='flex items-center gap-5'>
                        <h2 className='font-bold leading-130 text-2xl md:text-custom-lg text-white'>{obj.Heading}</h2>
                        <div className='md:hidden'>
                          {obj.icon}
                        </div>
                      </div>
                      <p className='leading-170 text-base sm:text-lg text-white font-light pt-[18px]'>{obj.Paragraph}</p>
                    </div>
                  </div>
                </div>
                <span className={`${index % 2 !== 0 ? "max-xl:-left-40 xl:-right-40" : "md:-left-40"} md:absolute top-0 flex z-10 max-md:pt-6`}>
                  <div className='rounded-full bg-borderGradient p-px'>
                    <div className='bg-bg-color rounded-full max-md:hidden'>
                      <div className='size-20 bg-iconGradient rounded-full flex justify-center items-center'>
                        {obj.icon}
                      </div>
                    </div>
                    <div className={`absolute top-5 z-20 ${index % 2 !== 0 ? "xl:rotate-180 xl:-left-20 md:left-[110px] -left-9" : "-left-9 md:left-[110px]"}`}>
                      {obj.arrow}
                    </div>
                  </div>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timeline