import React from 'react'
import { motion } from 'framer-motion'
import bsm from '../assets/bsm-header1.png'

const Header = () => {
    return (
        <div
            className='bg-primary px-8 md:px-18'>

            <motion.h1
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.6,
                }}
                className='font-[Bebas] tracking-wider text-white pt-10 md:pt-18 text-sm md:text-2xl lg:text-3xl text-center md:text-center'>Red Light Busking Presents</motion.h1>
            <motion.h1
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.6,
                }}
                className='font-[Bebas] tracking-wider text-secondary text-5xl text-center md:text-center md:text-8xl lg:text-[180px]'>
                Bedroom <span className='line-through'>Shut</span> Music Up
            </motion.h1>

        </div>
    )
}

export default Header