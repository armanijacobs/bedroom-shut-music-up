import React from 'react'
import bedroom3 from '../assets/bsm-bedroom3.png'
import about from '../assets/about.png'

const About = () => {
    return (
        <div className='bg-primary px-10 pt-8 text-center'>
            <img src={bedroom3} alt="" />

            <div className='flex flex-col items-center'>
                <img
                    className='w-2/5 h-2/5 py-2'
                    src={about}
                    alt="" />
                <p className='text-white font-[Lato] text-sm m-2 md:m-10 md:text-3xl'>This exhibition seeks to oﬀer an inter-generational reflection on the lived experiences of
                    Afro/Caribbean descendants growing up in London’s multi-cultural environment
                    where we take a focused look into the area of Waltham Forest. This project aims
                    to explore how the early 2000’s marked a pivotal change for Afro-Caribbeans, from
                    how music and stories created by imprisoned peers became the sounds of the time,
                    and how implementation of systems aﬀected the outcomes of many during this time
                    and what if anything has changed.</p>
            </div>

        </div>
    )
}

export default About