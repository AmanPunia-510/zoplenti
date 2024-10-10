import React from 'react'
import Paragraph from '../common/Paragraph'
import { CORE_VALUE_DATA } from '@/utils/helper'

const CoreValue = () => {
    return (
        <>
            <div className="container xl:!max-w-[1087px]">
                <h2 className='text-center font-bold text-white !leading-133 mx-auto max-md:text-custom-3sxl md:text-5xl'>Our Five Core Values</h2>
                <Paragraph className='pt-3 sm:pt-4 max-w-[944px] mx-auto text-center !font-light'>At Zoplenti, our values guide everything we do, reflecting our commitment to our partners and the principles that drive our success. Rooted in our family business heritage and inspired by our grandfather’s legacy, our core values reflect our unwavering commitment to excellence.</Paragraph>
                <div className="flex flex-wrap gap-x-6 gap-y-7 justify-center mt-12">
                    {CORE_VALUE_DATA.map((obj, index) => (
                        <div className='w-full max-w-[450px] md:max-w-[333px] h-full min-h-[201px] border-[2px] border-core-value p-[25px] shadow-core-bottom' key={index}>
                            <div className='size-[59px] sm:size-[69px] rounded-full bg-core-svg flex items-center justify-center mx-auto'>
                                {obj.coreSvg}
                            </div>
                            <h2 className={`${index === 0 ? "max-w-[250px] " : "max-w-[180px]"} font-normal text-custom-3xl sm:text-3xl leading-90 text-white font-anton text-center mt-6 uppercase drop-shadow-core-text strock mx-auto tracking-wide`}>{obj.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default CoreValue