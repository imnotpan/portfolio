import React, { useRef } from 'react'
import useTextWriteAppear from '../hooks/useText';
import { motion, useInView } from 'framer-motion';

function NavBar (): React.ReactNode {
    const baseText = "Started game development at 15 on platforms like Newgrounds. Enrolled at" + 
                    "Austral University in 2019, expanded to digital design in 2020, creating " +
                    "visualizers for Lollapalooza, cover art, and animated music videos for " +
                    "national/international artists."
    const ref = useRef(null);
    const isOnView = useInView(ref)

    return (
        <section  ref={ref}  id='about' className='section__page relative w-full flex bg-black z-10'>
            <div className='flex w-full justify-center items-center text-center lg:mx-[25vh]'>
                <div   className=' relative z-20 border border-2 border-black border-r-gray-800'>
                    <motion.p className='my-10 text-gray-300 text-xl font-ibmmono text-base ml-16 mr-4 text-right'>
                        {useTextWriteAppear(baseText, isOnView, 0.9)}
                    </motion.p>
                </div>
                <div className='relative break-all	'>
                    <p className='font-archivoblack text-white text-7xl md:text-base mt-10 mb-4 mr-16 '> ABOUT  </p>
                </div>
            </div>
        </section>
    );
}

export default NavBar
