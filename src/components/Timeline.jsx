import { TIMELINE_DATA } from '@/utils/Helper'
import React from 'react'
import Icon from './common/Icon'

const Timeline = () => {
  return (
    <div className='relative'>
      <div className="container xl:!max-w-[1180px]">
        <div className="flex max-lg:flex-wrap lg:gap-6">
          <div className='relative grid grid-rows-5 w-full gap-10 pl-7 md:pl-44 lg:pl-0 max-md:relative after:absolute after:bg-verticleBorder after:p-px after:h-[92%] xl:after:h-[1907px] md:after:left-[57px] xl:after:left-1/2 after:top-8 pt-[86px] max-xl:justify-end'>
            {TIMELINE_DATA.map((obj, index) => (
              <div className={`w-full xl:max-w-[530px] p-[1px] rounded-[10px] relative max-xl:mx-auto ${index % 2 !== 0 ? "m-0" : "xl:ml-auto"}`}>
                <div className='bg-timelineGradient p-px rounded-[10px] relative z-40'>
                  <div className='p-4 rounded-[10px] !bg-timelineBg'>
                    <div key={index} className='max-w-[770px] xl:max-w-[530px]'>
                      <h2 className='font-bold leading-130 text-custom-lg text-white'>{obj.Heading}</h2>
                      <p className='leading-170 text-lg text-white font-light pt-[18px]'>{obj.Paragraph}</p>
                    </div>
                  </div>
                </div>
                <span className={`${index % 2 !== 0 ? "max-xl:-left-40 xl:-right-40" : "md:-left-40"} md:absolute top-0 flex z-10 max-md:pt-6`}>
                  <div className='rounded-full bg-borderGradient p-px'>
                    <div className='bg-bg-color rounded-full'>
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