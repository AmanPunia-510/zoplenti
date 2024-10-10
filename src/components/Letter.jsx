import { LETTER_DATA_LIST } from '@/utils/Helper'
import Image from 'next/image'
import React from 'react'

const Letter = () => {
    return (
        <div className='my-36'>
            <div className="container max-w-[1180px]">
                <div className="max-w-[1022px] w-full bg-rich-white xl:h-[1443px]">
                    <div className="bg-picton-blue flex justify-between items-center p-4 sm:p-6 lg:py-[23px] lg:px-10 flex-wrap max-sm:flex-wrap">
                        <p className='text-sm leading-164 text-white font-normal '>From the office of:
                            <span className='font-bold block'>Steven Hollander, CEO</span></p>
                        <Image
                            src='/assets/images/svg/letter-logo.svg'
                            width={111}
                            height={100}
                            alt='letter-logo'
                        />
                        <p className='text-sm leading-164 text-white font-bold '>Zoplenti
                            <span className='font-normal block'>401 East Jackson Street</span>
                            <span className='font-normal block'>Suite 2340 Tampa, FL 33602</span>
                        </p>
                    </div>
                    <div className="max-w-[706px] w-full mx-auto p-5 md:pt-[45px] md:pb-10 md:px-0">
                        <div className="font-normal text-sm leading-164 text-black opacity-70">
                            <p>Future Partner,</p>
                            <p>My journey with Zoplenti started in my parents&#8217; garage in 2016.,</p>
                            <p className='mt-1'>Back then, I was still in high school. Since then, we&#8217;ve grown and evolved with the times.</p>
                            <p className='mt-1'>Looking back, I&#8217;m proud of the team we&#8217;ve built, the technology we&#8217;ve developed, and all the valuable lessons we&#8217;ve learned along the way.</p>
                        </div>
                        <div className="flex justify-center mt-5">
                            <Image
                                src='/assets/images/svg/border-dashed.svg'
                                width={201}
                                height={1}
                                alt='border-dashed'
                            />
                        </div>
                        {LETTER_DATA_LIST.map((data, index) =>
                            <div key={index} className='mt-5'>
                                <p className='font-bold text-sm leading-164 text-black opacity-70'>{data.title}</p>
                                {data.description.map((description, index) => (
                                    <p className='font-normal text-sm leading-164 text-black opacity-70' key={index}>{description}</p>
                                ))}
                                <div className="flex justify-center mt-5">
                                    <Image
                                        src='/assets/images/svg/border-dashed.svg'
                                        width={201}
                                        height={1}
                                        alt='border-dashed'
                                    />
                                </div>
                            </div>
                        )}
                        <div className="max-w-[181px] w-full mt-5">
                            <p className='font-normal text-sm leading-164 text-black opacity-70 text-center'>Anything is possible,</p>
                            <Image
                                src='/assets/images/svg/signature.svg'
                                width={181}
                                height={92}
                                alt='signature'
                            />
                            <p className='font-normal text-sm leading-164 text-black opacity-70 text-center'>Steven Hollander</p>
                            <p className='font-normal text-sm leading-164 text-black opacity-70 text-center'>Founder & CEO</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Letter