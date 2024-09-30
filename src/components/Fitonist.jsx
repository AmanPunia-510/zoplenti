import Image from 'next/image'
import React from 'react'

const Fitonist = () => {
    return (
        <div className='py-20 sm:py-24 xl:py-[140px]'>
            <div className="container max-w-[1180px]">
                <div className="border border-grey w-full"></div>
                <Image
                    className='rounded-3xl border border-blue my-20 sm:my-24 xl:my-[140px] h-[190px] sm:h-auto'
                    src='/assets/images/webp/fintonist.webp'
                    width={1440}
                    height={480}
                    alt='Fitonist'
                />
                <div className="border border-grey w-full"></div>
            </div>
        </div>
    )
}

export default Fitonist