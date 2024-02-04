import React, { useRef } from 'react'
import ServiceSection from '../components/services/ServiceSection';


function Services (): React.ReactNode {
    const text = " A LOT OF ";
    const text2= " THINGS ";
    const ref = useRef(null);

 
    return (
        <section ref={ref}  id='services' className=' section__page relative w-full h-full bg-white text-black z-10 flex flex-col md:flex-row
                                        items-center justify-center text-left overflow-hidden '>
            <div className='mb-0 md:mb-10 font-dugaspro text-8xl sm:text-9xl  tracking-widest break-words' >
                <span>
                    {text}
                </span>
                <br></br>
                <span>
                    {text2}
                </span>            
            </div>
            <div className='my-10'>
                <ServiceSection 
                    topMainName = {'FRONTEND'}
                    bottomMainName= {'DEVELOP'}
                    name={'WEB SITES AND WEB APPS'} 
                    tags={['react', 'angular', 'vue', 'js-ts']} />
                <hr className='bg-black h-[2px]'/>            
                <ServiceSection 
                    topMainName = {'BACKEND'}
                    bottomMainName= {'DEVELOP'}
                    name={'DATABASES - REST/API AND DATA ANALYSIS'} 
                    tags={['python', 'js-ts', 'sql']} />
                <hr className='bg-black h-[2px]'/>
                <ServiceSection 
                    topMainName = {'GAME'}
                    bottomMainName= {'DEVELOP'}
                    name={'ARCADE GAMES FOR MOBILE AND WEBS'} 
                    tags={['godot', 'unity', 'gamemaker']} />
                <hr className='bg-black h-[2px]'/>
                <ServiceSection 
                    topMainName = {'ARTIST'}
                    bottomMainName= {'DESIGNER'}
                    name={'PIXEL & DIGITAL ART'} 
                    tags={['procreate', 'photoshop', 'afterfx']} />
            </div>
        </section>
    );
}

export default Services
