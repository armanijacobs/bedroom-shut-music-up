import React from 'react'
import { motion } from 'framer-motion'
import booknow from '../assets//book-now.png'

const Booking = () => {
    return (
        <div className='w-screen h-full bg-primary pb-10 md:pb-15'>
            <div>
                <div
                    className='px-20 py-10'>
                    <motion.img
                        initial={{ opacity: 0, scale: 0, x: 50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        src={booknow}
                        alt="" />
                </div>
                <div className='h-full flex justify-center items-center'>
                    <motion.iframe
                        initial={{ opacity: 0, scale: 0, x: 100 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className='border-2 border-white rounded-3xl'
                        src="https://app.acuityscheduling.com/schedule.php?owner=36854543&ref=embedded_csp"
                        title="Schedule Appointment"
                        width="80%"
                        height="800"
                        frameBorder="0"
                        allow="payment"></motion.iframe><script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
                </div>
            </div>
        </div>
    )
}

export default Booking