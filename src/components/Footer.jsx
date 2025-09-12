import React from 'react'
import redlight from '../assets/Red_Light_Neon_woman_FINAL.png'
import trust from '../assets/English_Stamp_Black_PNG.png'


const Footer = () => {
    return (
        <div className='flex flex-row bg-secondary h-20 md:h-25 justify-around items-center px-25'>

            <div>
                <img className='h-10 md:h-15' src={trust} alt="" />
            </div>
            <div className='bg-secondary font-[montserrat] text-white flex flex-col justify-center text-center'>
                <h5 className='font-bold text-[10px] underline'>Get in Touch</h5>
                <p className='text-[10px] md:text-xs'>@redlightbuskin.</p>
                <p className='text-[10px] md:text-xs'>Curator: David Anglin</p>
                <p className='text-[10px] md:text-xs'> Online Otters. All rights reserved.</p>
            </div>

            <div>
                <img className='h-16 md:h-24' src={redlight} alt="" />
            </div>
        </div>
    )
}

export default Footer