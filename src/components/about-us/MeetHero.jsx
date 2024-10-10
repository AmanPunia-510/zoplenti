import React from 'react'
import Paragraph from '../common/Paragraph'

const MeetHero = () => {
    return (
        <div className='bg-hero bg-no-repeat bg-bottom bg-cover border border-grey'>
            <div className="container max-w-[1180px] py-28 xl:py-[138px]">
                <Paragraph blue>MEET ZOPLENTI</Paragraph>
                <h2 className='font-bold text-[28px] md:text-5xl lg:text-custom-5xl text-white !leading-143 max-md:max-w-[548px]'>We are setting the standard for the Ultimate Amazon partner</h2>
                <div className="flex justify-center">
                    <Paragraph className='max-w-[540px] lg:max-w-[785px] !normal-case mt-2 md:mt-4'>Our daily focus is on protecting and growing our partner brands—raising the bar for what to expect from an Amazon partner.</Paragraph>
                </div>
            </div>
        </div>
    )
}

export default MeetHero
