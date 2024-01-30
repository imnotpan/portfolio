import React, { useEffect , useState } from 'react'
import { motion } from "framer-motion"
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




function  Projects (): React.ReactNode {
    const [carouselWidth, setCarouselWidth] = useState<number | undefined>();
    const [carouselWidthImages, setCarouselWidthImages] = useState<number | undefined>();

    const carouselref = React.useRef<HTMLInputElement>(null);
    const carouselimages = React.useRef<HTMLInputElement>(null);

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
        <section id='projects' className='w-full h-full flex flex-row overflow-hidden z-50'>
            <div className='text-black w-full flex flex-col h-full'>
                <div className='w-full bg-black text-white flex '>
                    <div className='w-full overflow-hidden flex'>
                        <div className='font-archivoblack inline-block w-full flex text-center '>                            
                            <p className='w-full  text-8xl font-flexa font-extrabold mt-3'> PROJECTS I WORK. </p> 
                        </div>
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

                <div className='font-archivoblack inline-block w-full flex text-center mt-3  '>
                    <div className='flex w-full text-center justify-center'>
                        <p className='  text-8xl  font-flexa font-extrabold'> DESING WORLD </p> 
                        <p className='text-left mt-5 ml-4 text-xl font-ibmmono  '> WORKS I DO <br/> <span className='font-robotoslab'> WHEN I NO PROGRAM 👀 </span> </p>
                    </div>
                </div>
                <motion.div 
                    ref={carouselimages}
                    drag="x"
                    className='flex w-full cursor-grab' 
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

