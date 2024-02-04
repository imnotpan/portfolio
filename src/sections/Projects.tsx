import React, { useRef } from 'react'
import { motion, useInView } from "framer-motion"
import PortfolioCarousel from '../components/projects/PortfolioCarousel';

import useTextWriteAppear from '../hooks/useText';
import CoverCarousel from '../components/projects/CoverCarousel';

function  Projects (): React.ReactNode {
    const ref = useRef(null);
    const isOnView = useInView(ref)
    
    return (
        <section id='projects' className='section__page relative w-full h-full flex flex-col overflow-hidden z-10 bg-white'>
            <div className='w-full bg-black text-white flex '>
                <div className='w-full overflow-hidden flex'>
                    <motion.div 
                        animate="animate"
                        className='font-archivoblack inline-block w-full flex text-center '>                            
                        <p className='w-full  text-8xl font-flexa font-extrabold mt-3'>  PROJECTS I WORK. </p> 
                    </motion.div>
                </div>
            </div>
            <PortfolioCarousel/>
            <div  className='font-archivoblack inline-block w-full flex text-center mt-3 z-50 '>
                <motion.div ref={ref} className='flex w-full text-center justify-center'>
                    <p className='  text-8xl  font-flexa font-extrabold'> DESING WORLD </p> 
                    <motion.p className='text-left mt-5 ml-4 text-xl font-ibmmono  flex flex-col '>
                        <motion.span className='font-robotoslab'> 
                            {useTextWriteAppear('THINGS I DO', isOnView, 1)}
                        </motion.span> 
                        <motion.span className='font-robotoslab'> 
                            
                            {useTextWriteAppear('WHEN I NO PROGRAM 👀 ', isOnView, 1)}

                        </motion.span>
                    </motion.p>
                </motion.div>
            </div>
            <CoverCarousel/>
        </section>
    );
}

export default Projects

