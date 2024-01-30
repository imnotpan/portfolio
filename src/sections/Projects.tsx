import React, { useEffect , useRef, useState } from 'react'
import { motion, useInView } from "framer-motion"
import PortfolioCarousel from '../components/projects/PortfolioCarousel';
import CoverChulako from '../assets/desings/CoverChulako.jpg'
import CoverCotuuYan from '../assets/desings/CoverCotuuYan.jpg'
import CoverFarAway from '../assets/desings/CoverFarAway.jpg'
import CoverFazumTempo from '../assets/desings/CoverFazumTempo.jpg'
import CoverLazerAgua from '../assets/desings/CoverLazerAgua.jpg'
import CoverMuevelo from '../assets/desings/CoverMuevelo.jpg'
import CoverNiña from '../assets/desings/CoverNiña.jpg'
import CoverSick from '../assets/desings/CoverSick.jpg'
import CoverSkinny from '../assets/desings/CoverSkinny.jpg'
import ImageCoverDesign from '../components/projects/ImageCoverDesign';
import useTextWriteAppear from '../hooks/useText';




function  Projects (): React.ReactNode {
    const [carouselWidth, setCarouselWidth] = useState<number | undefined>();

    const [carouselWidthImages, setCarouselWidthImages] = useState<number | undefined>();

    const carouselref = React.useRef<HTMLInputElement>(null);
    const carouselimages = React.useRef<HTMLInputElement>(null);
    const ref = useRef(null);
    const isOnView = useInView(ref)
    
    useEffect( () => {
        const handleResize = ():void => {
            if (carouselref.current?.scrollWidth !== undefined) {
                setCarouselWidth(carouselref.current.scrollWidth - carouselref.current.offsetWidth);
            }   
            if (carouselimages.current?.scrollWidth !== undefined) {
                setCarouselWidthImages(carouselimages.current.scrollWidth - carouselimages.current.offsetWidth);
            }   
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
        
    },[]) 


  

    return (
        <section id='projects' className='relative w-full h-full flex flex-row overflow-hidden z-10 bg-white'>
            <div className='text-black w-full flex flex-col h-full'>
                <div className='w-full bg-black text-white flex '>
                    <div className='w-full overflow-hidden flex'>
                        <motion.div 
                            animate="animate"
                            className='font-archivoblack inline-block w-full flex text-center '>                            
                            <p className='w-full  text-8xl font-flexa font-extrabold mt-3'>  PROJECTS I WORK. </p> 
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    ref={carouselref}
                    drag="x"
                    dragConstraints={{ right: 0, left: -(carouselWidth ?? 0) + 100 }}
                    className=''
                >
                    <PortfolioCarousel/>
                </motion.div>

                <div  className='font-archivoblack inline-block w-full flex text-center mt-3 z-50 '>
                    <motion.div ref={ref} className='flex w-full text-center justify-center'>
                        <p className='  text-8xl  font-flexa font-extrabold'> DESING WORLD </p> 
                        <motion.p className='text-left mt-5 ml-4 text-xl font-ibmmono  flex flex-col '>
                            <motion.span className='font-robotoslab'> 
                                {useTextWriteAppear('THINGS I DO', isOnView)}
                            </motion.span> 
                            <motion.span className='font-robotoslab'> 
                                
                                {useTextWriteAppear('WHEN I NO PROGRAM 👀 ', isOnView)}

                            </motion.span>
                        </motion.p>
                    </motion.div>
                </div>
                
                <motion.div 
                    ref={carouselimages}
                    drag="x"
                    className='flex w-full cursor-grab z-50' 
                    dragConstraints={{ right: 0, left: -(carouselWidthImages ?? 0) + 100 }}>
                    <ImageCoverDesign image={CoverChulako} name={'Cover Chulako'} />
                    <ImageCoverDesign image={CoverCotuuYan} name={'Cover Chulako'} />
                    <ImageCoverDesign image={CoverFarAway} name={'Cover Chulako'} />
                    <ImageCoverDesign image={CoverFazumTempo} name={'Cover Chulako'} />
                    <ImageCoverDesign image={CoverLazerAgua} name={'Cover Chulako'} />
                    <ImageCoverDesign image={CoverMuevelo} name={'Cover Chulako'} />
                    <ImageCoverDesign image={CoverNiña} name={'Cover Chulako'} />
                    <ImageCoverDesign image={CoverSick} name={'Cover Chulako'} />
                    <ImageCoverDesign image={CoverSkinny} name={'Cover Chulako'} />
                </motion.div>
            </div>          

        </section>
    );
}

export default Projects

