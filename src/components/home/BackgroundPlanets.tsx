import React from 'react'
import PlusSymbol from '../../assets/planets/PlusSymbol.svg'
import Star from '../../assets/planets/Star.svg'
import Point from '../../assets/planets/Point.svg'
import Planet from '../../assets/planets/Planet.svg'


import { motion } from 'framer-motion';

function BackgroundPlanets (): React.ReactNode {
    const [style, setStyle] = React.useState({});

    let x = 0; // Declare x outside the parallax function
    let y = 0;
    React.useEffect(() => {
        document.addEventListener("mousemove", parallax);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener("mousemove", parallax);
        };
    }, []); // Run the effect only once when the component mounts

    function parallax(e: MouseEvent): void {
        const { clientX, clientY } = e;
        const offset = 50
        x = -(clientX - window.innerWidth )/ offset;
        y = -(clientY - window.innerHeight )/ offset;
        setStyle({ transform: `translateX(${x}px) translateY(${y}px)` });
    }
    return (
        <motion.div id='circles' 
            className='fixed w-full h-full flex justify-center items-center z-0'> 

            <motion.div
                animate={{ rotate: 360 }}
                transition={{duration:8, repeat: Infinity, ease: 'linear' }}
                className='absolute  w-[110vw] md:w-[40rem] lg:w-[46rem] '>
                
                <img 
                    className='parallax'
                    style={style}
                    src={PlusSymbol} alt="Plus Symbol" />
            </motion.div>
        
            <motion.div
                initial={{rotate:140}}
                animate={{ rotate: 500 }}
                transition={{duration:10, repeat: Infinity, ease: 'linear' }}
                className=' absolute hidden md:block md:w-[63rem] lg:w-[66rem]'>
                <div className='w-28'>
                    <img  style={style} className='w-full h-full' src={Star} alt="Star Symbol" />
                </div>
            </motion.div>
            <motion.div
                initial={{rotate:320}}
                animate={{ rotate: 680 }}
                transition={{duration:13, repeat: Infinity, ease: 'linear' }}
                className=' absolute hidden md:block md:w-[63rem] lg:w-[66rem]'>
                <div className='w-28'>
                    <img style={style} className='w-full h-full' src={Star} alt="Star Symbol" />
                </div>
            </motion.div>
            <motion.div
                initial={{rotate:60}}
                animate={{ rotate: 420 }}
                transition={{duration:6, repeat: Infinity, ease: 'linear' }}
                className=' absolute hidden md:block md:w-[63rem] lg:w-[66rem]'>
                <div className='w-28'>
                    <img style={style} className='w-full h-full' src={Point} alt="Star Symbol" />
                </div>
            </motion.div>
            <motion.div
                initial={{rotate:260}}
                animate={{ rotate: 620 }}
                transition={{duration:12, repeat: Infinity, ease: 'linear' }}
                className='absolute hidden md:block md:w-[87rem]'>
                <div className='size-28'>
                    <img style={style} className='' src={Planet} alt="Star Symbol" />
                </div>
            </motion.div>

        </motion.div>


    );
}

export default BackgroundPlanets
