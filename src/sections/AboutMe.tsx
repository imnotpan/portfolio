import React, { useRef } from 'react'
import useTextWriteAppear from '../hooks/useText';
import { motion, useInView } from 'framer-motion';

function NavBar (): React.ReactNode {
    const baseText = "Started game development at 15 on platforms like Newgrounds. Enrolled at " + 
                    "Austral University in 2019, expanded to digital design in 2020, creating " +
                    "visualizers for Lollapalooza, cover art, and animated music videos for " +
                    "national/international artists."
    const ref = useRef(null);
    const isOnView = useInView(ref)

    return (
        <section  ref={ref}  id='about' className='relative overflow-y-hidden overflow-x-hidden section__page relative w-full flex bg-black z-10'>
            
            <div className='flex flex-col w-full  mx-[5vh] lg:mx-[30vh] '>

                <div   className='md:ml-10 mix-blend-difference relative z-20 '>
                    <p className='font-archivoblack text-white text-7xl sm:text-8xl  mt-10 '> ABOUT  </p>
                    <motion.p className='hidden sm:block mb-10 text-gray-300 text-z font-bold font-neue text-4xl mr-4 text-left'>
                        {useTextWriteAppear(baseText, isOnView, 0.9)}
                    </motion.p>
            
                    <p className='block sm:hidden my-5 mb-5 text-gray-300 text-4xl font-bold font-neue text-xl mr-4 text-left'>
                        {baseText}
                    </p>
                </div>
            </div>
    
        </section>
    );
}

export default NavBar
