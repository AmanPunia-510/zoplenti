import React from 'react'
import Paragraph from './Paragraph'
import { DOMINATE_CATEGORY_DATA_LIST } from '@/utils/Helper'

const WhyItMatter = () => {
    const { heading, cards } = DOMINATE_CATEGORY_DATA_LIST;
    return (
        <div>
            <div className="ml-44">
                <Paragraph blue>{heading.subheading}</Paragraph>
                <p className='font-bold text-5xl leading-133 text-white'>{heading.mainheading}</p>
                <p className='font-normal text-xl leading-170 text-white max-w-[1098px] mt-3.5'>{heading.description}</p>
                <div className="flex">
                    <div className="max-w-[423px] w-full h-[296px] border border-curious-blue rounded-2xl border-b-0 border-r-0">
                    </div>
                    <div className="max-w-[423px] w-full h-[296px] border border-curious-blue rounded-2xl border-t-0 ">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyItMatter