import React from 'react'
import { motion } from 'framer-motion'
import bsm from '../assets/bsm-header1.png'

const Header = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.6,
            }}
            className='bg-primary px-8 md:px-18'>

            <h1 className='font-[Bebas] tracking-wider text-white pt-10 md:pt-18 text-sm md:text-2xl lg:text-3xl text-center md:text-center'>Red Light Busking Presents</h1>
            <h1 className='font-[Bebas] tracking-wider text-secondary text-5xl text-center md:text-center md:text-8xl lg:text-[180px]'>
                Bedroom <span className='line-through'>Shut</span> Music Up
            </h1>

        </motion.div>
    )
}

export default Header