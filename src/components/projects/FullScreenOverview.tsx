import React, { useRef } from 'react'
import {RemoveScroll} from 'react-remove-scroll';
import { useStoreOverview } from '../../store/StoreOverview';
import TagElement from '../services/TagElement';
import { motion, useInView } from 'framer-motion';
import useTextWriteAppear from '../../hooks/useText';
import CursorBlinker from '../home/CursorBlinker';
import BackgroundPlanets from '../home/BackgroundPlanets';



function FullScreenOverview (): React.ReactNode {
    const setStateFullScreenOverview = useStoreOverview((state) => state.setStateFullScreenOverview);
    const mainTitle = useStoreOverview((state) => state.mainTitle);
    const mainDescription = useStoreOverview((state) => state.mainDescription);
    const tags = useStoreOverview((state) => state.tags);
    const images = useStoreOverview((state) => state.images);
    const redirectLink = useStoreOverview((state) => state.redirectLink);
    const ref = useRef(null);
    const isOnView = useInView(ref)

    return (

        <RemoveScroll
            ref={ref}
            className='fixed z-50 bg-black h-screen w-screen flex flex-col md:flex-row overflow-y-auto'>
            <button 
                onClick={() => {setStateFullScreenOverview(false)}}
                className='fixed mix-blend-difference top-0 right-0 text-white text-xl font-alexa p-5 z-50'> 
                <div>
                    CLOSE
                </div>
            </button>
            <motion.div 
                initial={{opacity: 0}}
                animate={{ opacity: 100 }}
                transition={{ ease: "easeOut", duration: 1 }}
                className='flex lg:flex-row flex-col w-full h-full z-40 '>
                <div className='w-full lg:p-32 p-12'>
                    <p className='text-white text-5xl font-archivoblack'> {mainTitle} </p>
                    <motion.p className='my-10 text-gray-300 text-xl font-ibmmono text-base mr-4 text-left'>
                        {useTextWriteAppear(mainDescription, isOnView, 1)}
                    </motion.p>
                    <a 
                        className='hover:underline text-white font-ibmmono text-2xl'
                        href={redirectLink} 
                        target='_blank' 
                        rel="noreferrer"> 
                        {'> REDIRECT LINK'}
                        <span> <CursorBlinker/></span> 
                    </a>
                    <div className='flex mt-5'>
                        {tags.map((tag, index) => (
                            <div key={index} className='text-gray-300' >
                                <TagElement  
                                    name={tag}/>
                            </div>
                        ) )}
                    </div>
                </div>
                <div className=' bg-black lg:max-w-[128rem] lg:w-[128rem] z- relative flex flex-col lg:overflow-y-auto  overflow-x-clip'>
                    {images.map((img, index) => (
                        <img  
                            key={index}
                            className=' sm:hover:zoom-img hover:z-[100] sm:grayscale hover:grayscale-0  z-10 sm:opacity-25 sm:hover:opacity-100' 
                            src={img}/>
                    ) )}
                </div>
            </motion.div>
            <div className='absolute w-full h-full translate-x-[-50%] opacity-20 z-[10]'>
                <BackgroundPlanets/>
            </div>
        </RemoveScroll>

    );
}

export default FullScreenOverview


