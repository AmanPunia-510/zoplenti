import { TIMELINE_DATA } from '@/utils/Helper'
import React from 'react'

const Timeline = () => {
  return (
    <>
      <div className="container !max-w-[1180px]">
        <div className="flex max-lg:flex-wrap lg:gap-6">
          <div className='grid grid-rows-5 w-full gap-10 pl-7 md:pl-44 lg:pl-0 max-md:relative after:absolute after:bg-white after:w-px after:h-full after:left-0 xl:after:left-1/2 after:top-20'>
            {TIMELINE_DATA.map((obj, index) => (
              <div className={`w-full max-w-[530px] relative max-xl:mx-auto ${index % 2 === 0 ? "m-0" : "xl:ml-auto"}`}>
                <span className={`${index % 2 === 0 ? "max-xl:-left-40 xl:-right-40" : "md:-left-40"} md:absolute top-0 flex`}>
                  <div className='bg-borderGradient rounded-full p-px'>
                    <div className='size-20 bg-iconGradient rounded-full'>
                      {obj.Icon}
                    </div>
                  </div>
                </span>
                <div className='bg-timelineGradient p-[1px] rounded-[10px]'>
                  <div className='p-4 rounded-[10px]'>
                    <div key={index} className='max-w-[530px]'>
                      <h2 className='font-bold leading-130 text-custom-lg text-white'>{obj.Heading}</h2>
                      <p className='leading-170 text-lg text-white font-normal pt-[18px]'>{obj.Paragraph}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Timeline
