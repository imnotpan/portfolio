import React from 'react'
import Ellipse from '../../assets/planets/Ellipse.svg'
import PlusSymbol from '../../assets/planets/PlusSymbol.svg'
import Star from '../../assets/planets/Star.svg'
import Point from '../../assets/planets/Point.svg'

import { motion, useMotionValue, useTransform } from 'framer-motion';

function BackgroundPlanets (): React.ReactNode {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const offsetX = useTransform(mouseX, (value: number) => value - 50); 
    const offsetY = useTransform(mouseY, (value: number) => value - 50); 
  

    return (
        <motion.div id='circles' 
            className='relative w-full h-full flex justify-center items-center '
            onMouseMove={(event) => {
                mouseX.set(event.clientX);
                mouseY.set(event.clientY);
            }}> 

            <motion.img 
                
                className='absolute hidden md:block' src={Ellipse}/>
            <img className='absolute hidden md:block w-[60rem]' src={Ellipse}/>
            <img className='absolut hidden md:block w-[80rem]' src={Ellipse}/>
            <motion.div
                animate={{ rotate: 360 }}
                transition={{duration:8, repeat: Infinity, ease: 'linear' }}
                className='absolute hidden md:block w-[110vw] md:w-[40rem] lg:w-[46rem]'>
                
                <img src={PlusSymbol} alt="Plus Symbol" />
            </motion.div>
            <motion.div
                initial={{rotate:140}}
                animate={{ rotate: 500 }}
                transition={{duration:10, repeat: Infinity, ease: 'linear' }}
                className=' absolute hidden md:block md:w-[63rem] lg:w-[66rem]'>
                <div className='w-28'>
                    <img className='w-full h-full' src={Star} alt="Star Symbol" />
                </div>
            </motion.div>
            <motion.div
                initial={{rotate:260}}

                animate={{ rotate: 620 }}
                transition={{duration:12, repeat: Infinity, ease: 'linear' }}
                className='absolute hidden md:block md:w-[87rem]'>
                <div className='size-28'>
                    <img className='' src={Point} alt="Star Symbol" />
                </div>
            </motion.div>

        </motion.div>


    );
}

export default BackgroundPlanets
