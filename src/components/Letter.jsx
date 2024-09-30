import Image from 'next/image'
import React from 'react'

const Letter = () => {
    return (
        <div className='my-36'>
            <div className="container max-w-[1180px]">
                <div className="max-w-[1022px] w-full bg-rich-white">
                    <div className="bg-blue flex justify-between items-center py-[23px] px-10">
                        <p className='text-sm leading-164 text-white font-normal'>From the office of:
                            <span className='font-bold block'>Steven Hollander, CEO</span></p>
                        <Image
                            src='/assets/images/svg/letter-logo.svg'
                            width={111}
                            height={100}
                            alt='letter-logo'
                        />
                        <p className='text-sm leading-164 text-white font-bold'>Zoplenti
                            <span className='font-normal block'>401 East Jackson Street</span>
                            <span className='font-normal block'>Suite 2340 Tampa, FL 33602</span>
                        </p>
                    </div>
                    <div className="max-w-[706px] w-full mx-auto pt-[45px] pb-10">
                        <div className="font-normal text-sm leading-164 text-black opacity-70">
                            <p>Future Partner,</p>
                            <p>My journey with Zoplenti started in my parents&#8217; garage in 2016. ,</p>
                            <p className='mt-1'>Back then, I was still in high school. Since then, we’ve grown and evolved with the times.</p>
                            <p className='mt-1'>Looking back, I’m proud of the team we’ve built, the technology we’ve developed, and all the valuable lessons we’ve learned along the way.</p>
                        </div>
                        <div className="flex justify-center mt-5">
                            <Image
                                src='/assets/images/svg/border-dashed.svg'
                                width={201}
                                height={1}
                                alt='border-dashed'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Letter