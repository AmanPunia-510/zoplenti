import CoreValue from '@/components/about-us/CoreValue'
import Leadership from '@/components/about-us/Leadership'
import MeetHero from '@/components/about-us/MeetHero'
import TopSeller from '@/components/about-us/TopSeller'
import React from 'react'

const page = () => {
    return (
        <div>
            <MeetHero />
            <Leadership />
            <CoreValue />
            <TopSeller />
        </div>
    )
}

export default page
