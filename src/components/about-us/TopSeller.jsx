import { TOP_SELLER_DATA } from '@/utils/helper'
import React from 'react'

const TopSeller = () => {
    return (
        <div className='container max-w-[1180px]'>
            <div className="border border-grey w-full my-16 sm:my-24 lg:my-[140px]"></div>
            <div className="flex max-xl:flex-wrap gap-6 justify-center">
                {TOP_SELLER_DATA.map((obj, index) => (
                    <div className='bg-topSeller rounded-[10px] p-px min-h-[314px]'>
                        <div className='bg-bg-color rounded-[10px] h-full'>
                            <div className='h-full w-full max-w-[450px] md:max-w-[341px] lg:max-w-[364px] rounded-[10px] bg-sellerBox p-5' key={index}>
                                <div className="size-[69px] rounded-full bg-seller-svg flex justify-center items-center">{obj.image}</div>
                                <h2 className='font-bold text-custom-3xl leading-130 text-white pt-3 sm:pt-7'>{obj.title}</h2>
                                <p className='text-lg leading-170 font-light text-white pt-3 sm:pt-[18px]'>{obj.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="border border-grey w-full my-16 sm:my-24 lg:my-[140px]"></div>
        </div>
    )
}

export default TopSeller