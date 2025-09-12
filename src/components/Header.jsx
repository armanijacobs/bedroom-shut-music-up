import React from 'react'
import { motion } from 'framer-motion'
import bsm from '../assets/bsm-header1.png'

const Header = () => {
    return (
        <div
            className='bg-primary'>
            <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.6,
                }}
                className='p-8'
                src={bsm}
                alt="" />

        </div>
    )
}

export default Header